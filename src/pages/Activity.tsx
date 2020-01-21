import {
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import React from "react";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";
import ActivityItem from "../components/Activity/ActivityItem";

const Activity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <MainToolbar title="Activity" />
      </IonHeader>
      <IonContent style={{ "--background": "#dff2f3" }}>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel>Filter</IonLabel>
                <IonSelect>
                  <IonSelectOption value="all">All</IonSelectOption>
                  <IonSelectOption value="f">Female</IonSelectOption>
                  <IonSelectOption value="m">Male</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem>
                <IonLabel>Filter</IonLabel>
                <IonSelect>
                  <IonSelectOption value="all">All</IonSelectOption>
                  <IonSelectOption value="f">Female</IonSelectOption>
                  <IonSelectOption value="m">Male</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonItem
                lines="none"
                style={{ "--background": "none", margin: "-15px -15px" }}
              >
                <span>List(10)</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <ActivityItem />
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Activity;
