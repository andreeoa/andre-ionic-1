import { IonTitle, IonToolbar, IonItem, IonAvatar } from "@ionic/react";
import React from "react";
import { withRouter } from "react-router";
import axios from "../../plugins/axios";

const Toolbar1: React.FC<any> = ({ title, history }) => {
  const avatar = `https://image.flaticon.com/icons/svg/234/234694.svg`;
  const testReq = async () => {
    await axios.post("/app/t");
  };
  return (
    <IonToolbar>
      <IonItem lines="none" className="ion-text-center">
        <IonTitle onClick={testReq}>{title}</IonTitle>
        <IonAvatar slot="end" onClick={() => history.push("/profile")}>
          <img src={avatar} alt="" />
        </IonAvatar>
      </IonItem>
    </IonToolbar>
  );
};

export default withRouter(Toolbar1);
