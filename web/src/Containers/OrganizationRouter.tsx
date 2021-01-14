import React, { useContext, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { getOrganization } from "../APIs/User/organization";
import { PrivateEmployerRoute } from "../Components/App/PrivateRoute";
import { OrganizationEmployees } from "../Components/Organization/OrganizationEmployees";
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
    </Switch>
  );
};
