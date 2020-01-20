import { IonTitle, IonToolbar, IonItem, IonAvatar } from "@ionic/react";
import React from "react";
import { withRouter } from "react-router";

const MainToolbar: React.FC<any> = ({ title, history }) => {
  const avatar = `https://image.flaticon.com/icons/svg/234/234694.svg`;
  return (
    <IonToolbar>
      <IonItem lines="none">
        <IonTitle style={{ fontWeight: "bold" }}>{title}</IonTitle>
        <IonAvatar slot="end" onClick={() => history.push("/profile")}>
          <img src={avatar} alt="" />
        </IonAvatar>
      </IonItem>
    </IonToolbar>
  );
};

export default withRouter(MainToolbar);
