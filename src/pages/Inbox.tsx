import { IonContent, IonHeader, IonPage, IonFooter } from "@ionic/react";
import React from "react";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";

const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <MainToolbar title="Inbox" />
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Inbox</h1>
      </IonContent>
      <IonFooter>
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Inbox;
