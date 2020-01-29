import {
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonMenuButton
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router";

const Toolbar2: React.FC<any> = ({ title, history }) => {
  const avatar = `https://image.flaticon.com/icons/svg/234/234694.svg`;
  return (
    <IonToolbar>
      <IonItem lines="none" className="ion-text-center">
        <IonMenuButton />
        <IonTitle>{title}</IonTitle>
        <IonAvatar slot="end" onClick={() => history.push("/profile")}>
          <img src={avatar} alt="" />
        </IonAvatar>
      </IonItem>
    </IonToolbar>
  );
};

export default withRouter(Toolbar2);
