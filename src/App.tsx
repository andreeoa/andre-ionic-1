import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Products from "./pages/Products";
import Users from "./pages/Users";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Help from "./pages/Help";
import ForgotPassword from "./pages/ForgotPassword";
import ExperienceOurSolution from "./pages/ExperienceOurSolution";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Inbox from "./pages/Inbox";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import eApproval from "./pages/apps/eApproval";
import ExpenseApproval from "./pages/apps/ExpenseApproval";
import Menu from "./components/Menu";
import ExpenseApprovalDetail from "./pages/apps/ExpenseApprovalDetail";
import { connect } from "react-redux";
import { getUserInfo } from "./redux/auth/actions";

const App: React.FC = ({ getUserInfo }: any) => {
  useEffect(() => {
    const init = async () => await getUserInfo();
    init();
  });
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/products" component={Products} exact={true} />
            <Route path="/users" component={Users} exact={true} />
            <Route path="/user/:id" component={User} exact={true} />
            <Route path="/signin" component={SignIn} exact={true} />
            <Route path="/help" component={Help} exact={true} />
            <Route
              path="/forgot-password"
              component={ForgotPassword}
              exact={true}
            />
            <Route
              path="/experience-our-solution"
              component={ExperienceOurSolution}
              exact={true}
            />
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/activity" component={Activity} exact={true} />
            <Route path="/inbox" component={Inbox} exact={true} />
            <Route path="/settings" component={Settings} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route
              path="/notifications"
              component={Notifications}
              exact={true}
            />

            <Route path="/e-approval" component={eApproval} exact={true} />
            <Route
              path="/expense-approval"
              component={ExpenseApproval}
              exact={true}
            />
            <Route
              path="/expense-approval-detail/:id"
              component={ExpenseApprovalDetail}
              exact={true}
            />

            <Route exact path="/" render={() => <Redirect to="/signin" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserInfo: async () => dispatch(await getUserInfo())
  };
};

export default connect(null, mapDispatchToProps)(App);
