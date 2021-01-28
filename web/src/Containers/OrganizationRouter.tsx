import React, { useContext, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { getOrganization, updateEmployState } from "../APIs/User/organization";
import { PrivateEmployerRoute } from "../Components/App/PrivateRoute";
import { Modal, showModal } from "../Components/App/Modal";
import { OrganizationEmployees } from "../Components/Organization/OrganizationEmployees";
import {
  OrganizationEmployeesForm,
  Info,
} from "../Components/Organization/OrganizationEmployeesForm";
import { OrganizationProfile } from "../Components/Organization/OrganizationProfile";
import { UserContext } from "../Context/context";

export const OrganizationRouter: React.FC = () => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  let employmentInfo: EmploymentInfo | null = null;
  if (userInfo.user !== null) {
    employmentInfo = userInfo.user.employmentInfo;
  }

  const [organization, setOrganization] = useState<Organization | null>(null);

  useEffect(() => {
    if (employmentInfo !== null) {
      if (employmentInfo.isOwner) {
        getOrganization(employmentInfo.organizationID).then((o) => {
          if (o != null) {
            setOrganization(o);
          }
        });
      }
    }
  }, [employmentInfo]);

  // onSubmits
  const onSuspensionSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    info: Info
  ) => {
    const f = document.getElementById("orgEmployForm") as HTMLFormElement;

    e.preventDefault();
    e.stopPropagation();

    if (f.checkValidity()) {
      const res = await updateEmployState(
        info.firstName,
        info.lastName,
        info.AFM,
        info.AMKA,
        "SUSPENSION",
        info.from,
        info.to
      );

      if (res === "ok") {
        document.getElementById("orgFormModalBtn")!.click();
      } else {
        showModal();
      }
    }

    f.classList.add("was-validated");
  };

  const onRemoteSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    info: Info
  ) => {
    const f = document.getElementById("orgEmployForm") as HTMLFormElement;

    e.preventDefault();
    e.stopPropagation();

    if (f.checkValidity()) {
      const res = await updateEmployState(
        info.firstName,
        info.lastName,
        info.AFM,
        info.AMKA,
        "REMOTE",
        info.from,
        info.to
      );

      if (res === "ok") {
        document.getElementById("orgFormModalBtn")!.click();
      } else {
        showModal();
      }
    }

    f.classList.add("was-validated");
  };

  if (organization === null) {
    return null;
  }

  return (
    <>
      <Switch>
        <PrivateEmployerRoute exact path="/organization/profile">
          <OrganizationProfile
            organization={organization!}
            setOrganization={setOrganization}
          />
        </PrivateEmployerRoute>
        <PrivateEmployerRoute exact path="/organization/employees">
          <OrganizationEmployees
            organization={organization!}
            setOrganization={setOrganization}
          />
        </PrivateEmployerRoute>
        <PrivateEmployerRoute
          exact
          path="/organization/employees/forms/suspension"
        >
          <OrganizationEmployeesForm
            title="Φορμά αναστολής σύμβασης εργασίας"
            onSubmit={onSuspensionSubmit}
          />
        </PrivateEmployerRoute>
        <PrivateEmployerRoute exact path="/organization/employees/forms/remote">
          <OrganizationEmployeesForm
            title="Φορμά τηλεργασίας"
            onSubmit={onRemoteSubmit}
          />
        </PrivateEmployerRoute>
      </Switch>
      <Modal
        title="Λάθος στοιχεία"
        msg="Τα στοιχεία που πληκτρολογείσατε δεν είναι σωστά"
      />
    </>
  );
};
