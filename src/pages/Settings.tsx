import {
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import React from "react";
import Tabs from "../components/Tabs";
import {
  person,
  notifications,
  download,
  time,
  business,
  call,
  helpCircleOutline
} from "ionicons/icons";
import Item from "../components/Settings/Item";

const Settings: React.FC = ({ history }: any) => {
  const general = [
    {
      title: "Account Settings",
      description: "Manage you Account",
      icon: person,
      function: () => {
        history.push("/profile");
      }
    },
    {
      title: "Notifications",
      description: "Manage Notification Settings",
      icon: notifications,
      function: () => {
        history.push("/notifications");
      }
    },
    {
      title: "Downloads",
      description: "Download over WiFi or Cellular",
      icon: download,
      function: () => {}
    }
  ];
  const about = [
    {
      title: "Version",
      description: "V.1.23.2",
      icon: time,
      function: () => {}
    },
    {
      title: "Our Company",
      description: "E-Outsource Asia",
      icon: business,
      function: () => {}
    },
    {
      title: "Send Feedback",
      description: "Any Feedback?",
      icon: call,
      function: () => {}
    },
    {
      title: "Help",
      description: "View Tutorials",
      icon: helpCircleOutline,
      function: () => {}
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonTitle style={{ fontWeight: "bold" }}>Settings</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonItem
                lines="none"
                style={{ "--background": "none", margin: "-15px -15px" }}
              >
                <span>General</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            {general.map(item => (
              <Item item={item} key={item.title} />
            ))}
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonItem
                lines="none"
                style={{ "--background": "none", margin: "-15px -15px" }}
              >
                <span>About</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            {about.map(item => (
              <Item item={item} key={item.title} />
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
};

export default Settings;
