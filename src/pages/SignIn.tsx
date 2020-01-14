import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonButton,
  IonFooter,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";
import { person, unlock, helpCircleOutline } from "ionicons/icons";
import Logo from "../img/eoa-logo.png";

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonIcon icon={helpCircleOutline} slot="end" />
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
              <h2 className="ion-text-center" style={{ color: "#808080" }}>
                SIGN IN
              </h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signin-item">
                <IonIcon icon={person} slot="start" />
                <IonInput placeholder="User ID"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signin-item">
                <IonIcon icon={unlock} slot="start" />
                <IonInput type="password" placeholder="Password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-end">
                <a href="#" style={{ fontSize: "80%", color: "#808080" }}>
                  Forgot your Password?
                </a>
              </div>
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
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-text-center">
        <IonToolbar>
          <a href="" style={{ color: "#808080" }}>
            Experience Our Solution
          </a>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SignIn;
