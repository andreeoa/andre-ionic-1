import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonAvatar,
  IonGrid,
  IonRow,
  IonButtons,
  IonMenuButton,
  IonRouterOutlet,
  IonPage,
  IonItemDivider
} from "@ionic/react";

const eApproval: React.FC = ({ history }: any) => {
  const avatar = `https://image.flaticon.com/icons/svg/234/234694.svg`;
  return (
    <IonPage>
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem
                lines="none"
                routerLink="/e-approval"
                routerDirection="none"
              >
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem lines="none" routerLink="/dashboard">
                <IonLabel>Leave Request Approval</IonLabel>
                <p slot="end">23</p>
              </IonItem>
              <IonItem lines="none" routerLink="/dashboard">
                <IonLabel>Expense Approval</IonLabel>
                <p slot="end">8</p>
              </IonItem>
              <IonItem lines="none" routerLink="/dashboard">
                <IonLabel>Purchase Order Approval</IonLabel>
                <p slot="end">43</p>
              </IonItem>
              <IonItemDivider />
              <IonItem lines="none" routerLink="/settings">
                <IonLabel>Settings</IonLabel>
              </IonItem>
              <IonItem lines="none" routerLink="/dashboard">
                <IonLabel>Log Out</IonLabel>
              </IonItem>
              <IonItemDivider />
              <IonItem lines="none" routerLink="/dashboard">
                <IonLabel>Back To Dashboard</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>

      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle style={{ fontWeight: "bold" }}>{`eApproval`}</IonTitle>
            <IonAvatar slot="end" onClick={() => history.push("/profile")}>
              <img src={avatar} alt="" />
            </IonAvatar>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ "--background": "#dff2f3" }}>
        <IonGrid>
          <IonRow></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default eApproval;
