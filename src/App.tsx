import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
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
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
