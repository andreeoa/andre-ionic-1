import { IonTitle, IonToolbar, IonItem, IonAvatar } from "@ionic/react";
import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const Toolbar1: React.FC<any> = ({ title, history, authData }) => {
  const { user_photo } = authData.user;
  return (
    <IonToolbar>
      <IonItem lines="none" className="ion-text-center">
        <IonTitle>{title}</IonTitle>
        <IonAvatar slot="end" onClick={() => history.push("/profile")}>
          <img src={user_photo} alt="" />
        </IonAvatar>
      </IonItem>
    </IonToolbar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authData: state.auth
  };
};

export default connect(mapStateToProps)(withRouter(Toolbar1));
