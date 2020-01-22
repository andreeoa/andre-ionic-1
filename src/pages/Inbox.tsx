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
import Tabs from "../components/Tabs";
import InboxItem from "../components/Inbox/InboxItem";
import Toolbar1 from "../components/Toolbars/Toolbar1";

const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar1 title="Inbox" />
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
                <span>List(6)</span>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <InboxItem />
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
};

export default Inbox;
