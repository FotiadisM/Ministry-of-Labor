import React, { useContext, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { getOrganization } from "../APIs/User/organization";
import { PrivateEmployerRoute } from "../Components/App/PrivateRoute";
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
        const org = getOrganization(employmentInfo.employId);
        setOrganization(org);
      }
    }
  }, [employmentInfo]);

  // onSubmits
  const onSuspensionSubmit = (info: Info) => {};

  const onRemoteSubmit = (info: Info) => {};

  return (
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
  );
};
