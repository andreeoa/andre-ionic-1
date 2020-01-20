import { IonContent, IonHeader, IonPage, IonFooter } from "@ionic/react";
import React from "react";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";

const Activity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <MainToolbar title="Activity" />
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Activity</h1>
      </IonContent>
      <IonFooter>
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Activity;
