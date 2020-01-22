import React from "react";
import {
  IonMenu,
  IonContent,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonLabel,
  IonList,
  IonMenuToggle,
  IonItemDivider,
  IonIcon,
  IonImg
} from "@ionic/react";
import { menuController } from "@ionic/core";
import { withRouter } from "react-router";
import { create } from "ionicons/icons";

const Menu: React.FC = ({ history }: any) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonRow
          className="ion-padding ion-margin-bottom"
          style={{
            background: "#f1f1f1"
          }}
        >
          <IonCol>
            <IonAvatar
              style={{
                minWidth: "5rem",
                minHeight: "5rem"
              }}
              onClick={() => {
                menuController.close();
                history.push("/profile");
              }}
            >
              <IonImg
                src={`https://image.flaticon.com/icons/svg/234/234694.svg`}
                alt=""
              />
              <IonIcon
                icon={create}
                style={{
                  background: "#ffffff",
                  borderRadius: "50%",
                  padding: "5px",
                  fontSize: "20px",
                  position: "absolute",
                  bottom: "72px",
                  left: "65px"
                }}
              />
            </IonAvatar>

            <div className="ion-margin-top">
              <h5 style={{ marginTop: "unset" }}>Alex_Yong</h5>
              <span>alexyong01@gmail.com</span>
            </div>
          </IonCol>
        </IonRow>
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
      <footer className="ion-margin-vertical">
        <p className="ion-text-center">Last login 26 Dec 2019 11:22:14 AM</p>
      </footer>
    </IonMenu>
  );
};

export default withRouter(Menu);
