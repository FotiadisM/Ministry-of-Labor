import React, { useState } from "react";
import { InfoField } from "../User/User/UserProfile";

interface OrganizationProfileProps {
  organization: Organization;
  setOrganization: React.Dispatch<React.SetStateAction<Organization | null>>;
}

export const OrganizationProfile: React.FC<OrganizationProfileProps> = ({
  organization,
}) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);

  if (organization === null) {
    return null;
  }

  return (
    <div className="container my-5">
      <div className="pb-4">
        <h2 className="fst-italic">
          <i className="bi bi-building pe-4" style={{ fontSize: "2.5rem" }}></i>
          {organization.name}
        </h2>
        <hr />
      </div>
      <div className="my-2">
        <div className="d-flex justify-content-between">
          <h4>Στοιχεία</h4>
          <div className="form-check form-switch fs-5">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Τροποποίηση
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={!readOnly}
              onChange={(e) => setReadOnly(!e.target.checked)}
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row row-cols-2 gy-3">
            <InfoField
              text="Όνομα"
              value={organization.name}
              readOnly={readOnly}
              onChange={(v) => {}}
            />
            <InfoField
              text="ΑΦΜ"
              value={organization.AFM}
              readOnly={readOnly}
              onChange={(v) => {}}
            />
            <InfoField
              text="Διεύθυνση"
              value={organization.address}
              readOnly={readOnly}
              onChange={(v) => {}}
            />
            <InfoField
              text="Τ.Κ."
              value={organization.zipcode}
              readOnly={readOnly}
              onChange={(v) => {}}
            />
            <InfoField
              text="Αριθμός Υπαλλήλων"
              value={organization.employees.length.toString()}
              readOnly={true}
              onChange={(v) => {}}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary mt-4 float-end"
            style={{
              visibility: readOnly ? "hidden" : "visible",
            }}
          >
            Υποβολή
          </button>
        </form>
      </div>
    </div>
  );
};
