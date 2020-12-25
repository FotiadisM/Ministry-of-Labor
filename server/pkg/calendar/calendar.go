package calendar

import (
	"context"
	"fmt"
)

// Service ..
type Service struct {
	r Repository
}

// GetAvailableDates ..
func (s *Service) GetAvailableDates(ctx context.Context) (res *GetAvailableDatesResponse, err error) {
	res = &GetAvailableDatesResponse{}
	res.Months = make([]month, 0, 2)

	dates, err := s.r.GetAvailableDates(ctx)
	if err != nil {
		return nil, fmt.Errorf("Failed to retrieve available dates from repo: %w", err)
	}

	/*
		[
			month: "April"
			days: [
				date: "13/12/1999"
				hours: [
					id: string
					time: "09:50"
					active: bool
				]
			]
		]
	*/

	// formating the data to be more easily consumed by the client
	h := make(map[string]bool)
	for _, d := range dates {
		if _, ok := h[d.Time.Month().String()]; !ok {
			h[d.Time.Month().String()] = true

			m := month{
				Month: d.Time.Month().String(),
				Days: []date{
					{
						Date: fmt.Sprintf("%v/%v/%v", d.Time.Day(), d.Time.Month(), d.Time.Year()),
						Hours: []hour{
							{
								ID:     d.ID,
								Time:   fmt.Sprintf("%v:%v", d.Time.Hour(), d.Time.Minute()),
								Active: d.Active,
							},
						},
					},
				},
			}

			res.Months = append(res.Months, m)
		} else {

			for _, m := range res.Months {
				if m.Month == d.Time.Month().String() {
					flag := true

					for _, da := range m.Days {
						if da.Date == fmt.Sprintf("%v/%v/%v", d.Time.Day(), d.Time.Month(), d.Time.Year()) {
							flag = false

							da.Hours = append(da.Hours, hour{
								ID:     d.ID,
								Time:   fmt.Sprintf("%v:%v", d.Time.Hour(), d.Time.Minute()),
								Active: d.Active,
							})
						}

						if flag {
							m.Days = append(m.Days, date{
								Date: fmt.Sprintf("%v/%v/%v", d.Time.Day(), d.Time.Month(), d.Time.Year()),
								Hours: []hour{
									{
										ID:     d.ID,
										Time:   fmt.Sprintf("%v:%v", d.Time.Hour(), d.Time.Minute()),
										Active: d.Active,
									},
								},
							})

						}
					}
				}
			}
		}
	}

	return
}
