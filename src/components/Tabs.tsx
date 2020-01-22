import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";
import { home, paper, mail, settings } from "ionicons/icons";
import { withRouter } from "react-router";

const MainMenu: React.FC = ({ history }: any) => {
  const menus = [
    {
      title: "dashboard",
      label: "Home",
      icon: home
    },
    {
      title: "activity",
      label: "Activity",
      icon: paper
    },
    {
      title: "inbox",
      label: "Inbox",
      icon: mail
    },
    {
      title: "settings",
      label: "Settings",
      icon: settings
    }
  ];
  return (
    <IonTabBar slot="bottom">
      {menus.map(menu => (
        <IonTabButton
          tab={menu.title}
          selected={history.location.pathname === "/" + menu.title}
          href={`/${menu.title}`}
          key={menu.title}
        >
          <IonIcon icon={menu.icon} />
          <IonLabel>{menu.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default withRouter(MainMenu);
