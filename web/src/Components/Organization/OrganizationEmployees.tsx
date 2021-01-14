import React, { useState } from "react";

interface OrganizationEmploysProps {
  organization: Organization;
  setOrganization: React.Dispatch<React.SetStateAction<Organization | null>>;
}

export const OrganizationEmployees: React.FC<OrganizationEmploysProps> = ({
  organization,
}) => {
  //   const [employ, setEmploy] = useState<Employ>(organization);

  return (
    <div className="container my-5">
      <div className="pb-4">
        <h2 className="fst-italic">
          <i
            className="bi bi-people-fill pe-4"
            style={{ fontSize: "2.5rem" }}
          ></i>
          Ανθρώπινο δυναμικό
        </h2>
        <hr />
      </div>
      <div className=" d-flex justify-content-between">
        <div
          className="border rounded shadow"
          style={{ minHeight: "400px", flex: "1" }}
        >
          <input
            type="text"
            className="form-control mb-4 border-0"
            placeholder="Αναζήτηση"
          />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded shadow ms-4">hello</div>
      </div>
    </div>
  );
};
