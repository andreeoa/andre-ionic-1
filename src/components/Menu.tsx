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
  IonItemDivider
} from "@ionic/react";
import { menuController } from "@ionic/core";
import { withRouter } from "react-router";

const Menu: React.FC = ({ history }: any) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonRow>
          <IonCol>
            <IonItem
              lines="none"
              className="ion-margin-top"
              routerLink="/profile"
            >
              <IonAvatar
                style={{
                  height: "70px",
                  width: "70px"
                }}
                onClick={() => {
                  menuController.close();
                }}
              >
                <img
                  src={`https://image.flaticon.com/icons/svg/234/234694.svg`}
                  alt=""
                />
              </IonAvatar>
            </IonItem>
            <IonItem lines="none" style={{ margin: "-5px 0px 0px 5px" }}>
              <IonLabel>
                <h2>Alex_Yong</h2>
                <p>alexyong01@gmail.com</p>
              </IonLabel>
            </IonItem>
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
