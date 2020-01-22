import {
  IonContent,
  IonPage,
  IonFooter,
  IonToolbar,
  IonItem,
  IonTitle,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
  IonHeader
} from "@ionic/react";
import React from "react";
import Tabs from "../components/Tabs";
import {
  notifications,
  mail,
  cart,
  bus,
  volumeHigh,
  options,
  save
} from "ionicons/icons";
import Item from "../components/Notifications/Item";

const Notifications: React.FC = () => {
  const main = {
    title: "Enable Notifications",
    description: "All Notifications",
    icon: notifications,
    function: (e: any) => {
      console.log(e);
    }
  };
  const notificationsItems = [
    {
      title: "Inbox Updates",
      description: "Notify me with updates in my inbox",
      icon: mail,
      function: () => {}
    },
    {
      title: "Sales Order Updates",
      description: "Notify me with Sales Updates",
      icon: cart,
      function: () => {}
    },
    {
      title: "Delivery Updates",
      description: "Notify me with Delivery Updates",
      icon: bus,
      function: () => {}
    }
  ];
  const customise = [
    {
      title: "Sounds",
      description: "Default",
      icon: volumeHigh,
      function: () => {}
    },
    {
      title: "Vibrate",
      description: "Default",
      icon: options,
      function: () => {}
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle style={{ fontWeight: "bold" }}>Notifications</IonTitle>
            <IonIcon icon={save} />
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <Item item={main} />
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonItem
                lines="none"
                style={{ "--background": "none", margin: "-15px -15px" }}
              >
                <span>Notifications</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            {notificationsItems.map(item => (
              <Item item={item} key={item.title} />
            ))}
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonItem
                lines="none"
                style={{ "--background": "none", margin: "-15px -15px" }}
              >
                <span>Customise</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            {customise.map(item => (
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

export default Notifications;
