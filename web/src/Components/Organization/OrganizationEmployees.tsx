import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getStatus, getUser } from "../../APIs/auth";
import { cancelEmployStatus } from "../../APIs/User/organization";
import { useHovered } from "../../Hooks/hooks";
import { InfoField } from "../User/User/UserProfile";

interface TableEntryProps {
  employ: Employ;
  setEmploy: React.Dispatch<React.SetStateAction<Employ | null>>;
}

const TableEntry: React.FC<TableEntryProps> = ({ employ, setEmploy }) => {
  const [hovered, setHovered] = useHovered();

  const [user, setUser] = useState<User | null>(null);
  const { userId } = employ;
  useEffect(() => {
    getUser(userId).then((u) => {
      if (u !== null) {
        setUser(u);
      }
    });
  }, [userId]);

  if (user === null) {
    return null;
  }

  // var status = "-";
  // switch (employ.status.status) {
  //   case "REMOTE":
  //     status = "Τηλεργασία";
  //     break;
  //   case "SUSPENSION":
  //     status = "Αναστολή";
  //     break;
  //   case "VACATION":
  //     status = "Άδεια";
  //     break;
  // }

  return (
    <tr
      onClick={() => setEmploy(employ)}
      style={{ cursor: "pointer" }}
      className={hovered ? "bg-primary text-light" : ""}
      onMouseEnter={setHovered}
      onMouseLeave={setHovered}
    >
      <th>{user.AFM}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{getStatus(employ.status.status)}</td>
    </tr>
  );
};

interface EmployProfileProps {
  employ: Employ | null;
  onStatusCancel: (id: string) => void;
}

const EmployProfile: React.FC<EmployProfileProps> = ({
  employ,
  onStatusCancel,
}) => {
  const [user, setUser] = useState<User | null>(null);
  let history = useHistory();

  var userId: string = "";
  if (employ !== null) {
    userId = employ.userId;
  }

  useEffect(() => {
    if (userId !== "") {
      getUser(userId).then((u) => {
        if (u !== null) {
          setUser(u);
        }
      });
    }
  }, [userId]);

  if (user === null || employ == null) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="row row-cols-1 gy-3">
        <InfoField
          text="Όνομα"
          value={user.firstName}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Επίθετο"
          value={user.lastName}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Μηνιαίος μισθός"
          value={employ.salaryMonth.toString()}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Α.Φ.Μ."
          value={user.AFM}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Διεύθυνση"
          value={user.address}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Τ.Κ."
          value={user.zipcode}
          readOnly={true}
          onChange={(v) => {}}
        />
        <InfoField
          text="Κατάσταση"
          value={getStatus(employ.status.status)}
          readOnly={true}
          onChange={() => {}}
        />
        {employ.status.status === "NORMAL" ? (
          <div className="col d-flex justify-content-between">
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                history.push("/organization/employees/forms/remote", {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  AFM: user.AFM,
                  AMKA: user.AMKA,
                });
              }}
            >
              Φόρμα δήλωσης τηλεργασίας
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                history.push("/organization/employees/forms/suspension", {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  AFM: user.AFM,
                  AMKA: user.AMKA,
                });
              }}
            >
              Φόρμα αναστολής σύμβασης
            </button>
          </div>
        ) : (
          <div>
            <div className="col d-flex">
              <div>
                <p>Από:</p>
                <input
                  type="text"
                  className="form-control"
                  readOnly={true}
                  value={employ.status.from}
                />
              </div>
              <div>
                <p>Μέχρι:</p>
                <input
                  type="text"
                  className="form-control"
                  readOnly={true}
                  value={employ.status.to}
                />
              </div>
            </div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => onStatusCancel(employ.id)}
            >
              Κατάργηση {getStatus(employ.status.status)}ς
            </button>
          </div>
        )}
      </div>
      {/* <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary mt-4"
          // onClick={() => {
          //   history.push("/organization/employees/updateContract", {
          //     employ: employ,
          //     user: user,
          //   });
          // }}
        >
          Tροποποίηση Στοιχείων
        </button>
      </div> */}
    </div>
  );
};

interface OrganizationEmploysProps {
  organization: Organization;
  setOrganization: React.Dispatch<React.SetStateAction<Organization | null>>;
}

export const OrganizationEmployees: React.FC<OrganizationEmploysProps> = ({
  organization,
  setOrganization,
}) => {
  const [employ, setEmploy] = useState<Employ | null>(null);

  useEffect(() => {
    if (organization !== null) {
      if (organization.employees.length !== 0) {
        setEmploy(organization.employees[0]);
      }
    }
  }, [organization]);

  if (organization === null) {
    return null;
  }

  const onStatusCancel = async (id: string) => {
    const res = await cancelEmployStatus(id);
    if (res === "ok") {
      let em = organization.employees;
      for (let i = 0; i < em.length; i += 1) {
        if (em[i].id === id) {
          em[i].status.status = "NORMAL";
          em[i].status.from = "";
          em[i].status.to = "";
        }
      }
      setOrganization((o) => ({ ...o!, employees: em }));
    }
  };

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
        <div className="border rounded shadow" style={{ flex: "1" }}>
          <input
            type="text"
            className="form-control mb-4 border-0"
            placeholder="Αναζήτηση"
          />
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">ΑΦΜ</th>
                <th scope="col">Όνομα</th>
                <th scope="col">Επίθετο</th>
                <th scope="col">Κατάσταση</th>
              </tr>
            </thead>
            <tbody>
              {organization.employees.map((e, i) => {
                return <TableEntry key={i} employ={e} setEmploy={setEmploy} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="border rounded shadow ms-4" style={{ maxWidth: "40%" }}>
          <EmployProfile employ={employ} onStatusCancel={onStatusCancel} />
        </div>
      </div>
    </div>
  );
};
