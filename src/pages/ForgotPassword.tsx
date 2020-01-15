import {
  IonContent,
  IonPage,
  IonItem,
  IonInput,
  IonIcon,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";
import { person, helpCircleOutline, arrowBack } from "ionicons/icons";
import Logo from "../img/eoa-logo.png";
import styles from "../css/signin.module.css";

const ForgotPassword: React.FC = ({ history }: any) => {
  const gotoHelp = (e: any) => {
    e.preventDefault();
    history.push("/help");
  };
  const gotoSignIn = (e: any) => {
    e.preventDefault();
    history.push("/signin");
  };
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none" style={{ marginBottom: "60px" }}>
                <IonIcon icon={arrowBack} onClick={gotoSignIn} />
                <IonIcon
                  icon={helpCircleOutline}
                  slot="end"
                  onClick={gotoHelp}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none" className="ion-margin-vertical">
                <IonImg src={Logo} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4 className="ion-text-center" style={{ color: "#808080" }}>
                FORGOT YOUR PASSWORD?
              </h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <small
                className="ion-margin-horizontal"
                style={{ color: "#808080" }}
              >
                Please enter your User ID to reset password:
              </small>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none" className={styles.input}>
                <IonIcon icon={person} slot="start" />
                <IonInput placeholder="User ID"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                type="submit"
                color="primary"
                expand="block"
                shape="round"
              >
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                color="light"
                expand="block"
                shape="round"
                onClick={gotoSignIn}
              >
                Cancel
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
