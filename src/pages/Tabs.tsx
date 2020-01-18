import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import React, { useState } from "react";
import { withRouter, Route } from "react-router";
import { home, paper, mail, settings } from "ionicons/icons";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Tabs: React.FC = (props: any) => {
  const [routes] = useState<string[]>(["/dashboard", "/profile"]);
  return routes.includes(props.location.pathname) ? (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="activity" href="/signin">
          <IonIcon icon={paper} />
          <IonLabel>Activity</IonLabel>
        </IonTabButton>

        <IonTabButton tab="inbox" href="/mail">
          <IonIcon icon={mail} />
          <IonLabel>Inbox</IonLabel>
        </IonTabButton>

        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  ) : null;
};

export default withRouter(Tabs);
