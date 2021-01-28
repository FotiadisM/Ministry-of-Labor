import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../Components/App/PrivateRoute";
import { Calendar } from "../Components/User/Dates/Calendar";
import { NewDateProvider } from "../Components/User/Dates/NewDate";
import { UserOrganization } from "../Components/User/Organization/UserOrganization";
import { UserProfile } from "../Components/User/User/UserProfile";
import { UserFormTimeOff } from "../Components/User/User/UserFormTimOff";
import { UserContext } from "../Context/context";
import { updateEmployState } from "../APIs/User/organization";
import { Modal, showModal } from "../Components/App/Modal";

export const UserRouter: React.FC = () => {
  const userContext = useContext(UserContext);
  const { userInfo } = userContext!;

  let isEmployd = false;
  if (userInfo.user !== null) {
    if (userInfo.user.employmentInfo !== null) {
      isEmployd = true;
    }
  }

  const onTakeOff = async (
    e: React.FormEvent<HTMLFormElement>,
    info: {
      from: string;
      to: string;
    }
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const f = document.getElementById("userFormTimeOff") as HTMLFormElement;

    if (f.checkValidity()) {
      const res = await updateEmployState(
        userInfo.user!.firstName,
        userInfo.user!.lastName,
        userInfo.user!.AFM,
        userInfo.user!.AMKA,
        "VACATION",
        info.from,
        info.to
      );

      if (res === "ok") {
        document.getElementById("userFormModalBtn")!.click();
      } else {
        showModal();
      }
    }

    f.classList.add("was-validated");
  };

  const onTakeOffSpecial = async (
    e: React.FormEvent<HTMLFormElement>,
    info: {
      from: string;
      to: string;
    }
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const f = document.getElementById("userFormTimeOff") as HTMLFormElement;

    if (f.checkValidity()) {
      const res = await updateEmployState(
        userInfo.user!.firstName,
        userInfo.user!.lastName,
        userInfo.user!.AFM,
        userInfo.user!.AMKA,
        "SPECIAL_VACATION",
        info.from,
        info.to
      );

      if (res === "ok") {
        document.getElementById("userFormModalBtn")!.click();
      } else {
        showModal();
      }
    }

    f.classList.add("was-validated");
  };

  return (
    <>
      <Switch>
        <PrivateRoute exact path="/user/profile">
          <UserProfile />
        </PrivateRoute>
        <PrivateRoute exact path="/user/dates">
          <Calendar />
        </PrivateRoute>
        <PrivateRoute exact path="/user/dates/new">
          <NewDateProvider />
        </PrivateRoute>
        <PrivateRoute exact path="/user/organization">
          {isEmployd ? <UserOrganization /> : null}
        </PrivateRoute>
        <PrivateRoute exact path="/user/forms/timeOff">
          {isEmployd ? (
            <UserFormTimeOff title="Δήλωση άδειας" onSubmit={onTakeOff} />
          ) : null}
        </PrivateRoute>
        <PrivateRoute exact path="/user/forms/timeOff/special">
          {isEmployd ? (
            <UserFormTimeOff
              title="Δήλωση άδειας ειδικού σκοπού"
              onSubmit={onTakeOffSpecial}
            />
          ) : null}
        </PrivateRoute>
        <Route path="/user">
          <div className="text-center fw-bold fs-4">404</div>
        </Route>
      </Switch>
      <Modal
        title="Λάθος στοιχεία"
        msg="Τα στοιχεία που πληκτρολογείσατε δεν είναι σωστά"
      />
    </>
  );
};
