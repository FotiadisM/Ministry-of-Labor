import React, { useContext, useEffect, useState } from "react";
import {
  getEmployByUserID,
  getOrganization,
} from "../../../APIs/User/organization";
import { UserContext } from "../../../Context/context";

interface UserOrganizationInfoFieldProps {
  text: string;
  value: string;
}

const UserOrganizationInfoField: React.FC<UserOrganizationInfoFieldProps> = ({
  text,
  value,
}) => {
  return (
    <div className="d-flex me-5 mb-5 ms-3 align-items-center">
      <p className="mb-0 me-5 p-0 w-50">{text + ":"}</p>
      <input className="form-control" value={value} readOnly={true} />
    </div>
  );
};

interface HeaderProps {
  title: string;
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ title, logo }) => {
  return (
    <div className="container pb-4">
      <h2 className="fst-italic">
        <i className={"bi pe-4 " + logo} style={{ fontSize: "2.5rem" }}></i>
        {title}
      </h2>
      <hr className="" />
    </div>
  );
};

interface ButtonProps {
  text: string;
  textBtn: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, textBtn, onClick }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="mb-0">{text}</p>
      <button className="btn btn-primary" onClick={onClick}>
        {textBtn}
      </button>
    </div>
  );
};

export const UserOrganization: React.FC = () => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;
  const [employ, setEmploy] = useState<Employ | null>(null);
  const [org, setOrg] = useState<Organization | null>(null);

  const { id } = userInfo.user!;
  const { organizationID } = userInfo.user!.employmentInfo!;
  useEffect(() => {
    const res = getEmployByUserID(id);
    if (res != null) {
      setEmploy(res);
    }

    const res2 = getOrganization(organizationID);
    if (res2 !== null) {
      setOrg(res2);
    }
  }, [id, organizationID]);

  if (employ === null || org === null) {
    return null;
  }

  return (
    <div className="container my-5">
      <div className="d-flex">
        <div className="flex-grow-1 me-5">
          <Header title="Προσωπικές πληροφορίες" logo="bi-person-fill" />
          <div>
            <UserOrganizationInfoField text="Μπήκα" value={employ.joined} />
            <UserOrganizationInfoField
              text="Μηνιαίος μισθός"
              value={employ.salaryMonth.toString()}
            />
            <UserOrganizationInfoField
              text="Εργασιακή κατάσταση"
              value={employ.status}
            />
            <UserOrganizationInfoField
              text="Συόλικές άδειες κάθε χρόνο"
              value={employ.timeoffsYear.toString()}
            />
            <UserOrganizationInfoField
              text="Άδειες που έχουν χρησιμοποιηθεί"
              value={employ.timeoffsTaken.toString()}
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="mb-5">
            <Header title="Ενέργειες" logo="bi-gear" />
            <Button text="agffsg" textBtn="sdfhasd" onClick={() => {}} />
            <Button text="asgfasdfg" textBtn="agfs" onClick={() => {}} />
            <Button text="asdf" textBtn="gasffg" onClick={() => {}} />
          </div>
          <div>
            <Header title="Στοιχεία οργανισμού" logo="bi-building" />
            <UserOrganizationInfoField text="Όνομα" value={org.name} />
            <UserOrganizationInfoField text="Διεύθυνση" value={org.address} />
            <UserOrganizationInfoField text="Τ.Κ." value={org.zipcode} />
          </div>
        </div>
      </div>
    </div>
  );
};
