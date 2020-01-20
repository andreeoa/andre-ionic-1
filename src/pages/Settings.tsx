import { IonContent, IonHeader, IonPage, IonFooter } from "@ionic/react";
import React from "react";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <MainToolbar title="Settings" />
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Settings</h1>
      </IonContent>
      <IonFooter>
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Settings;
