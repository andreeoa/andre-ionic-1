import {
  IonContent,
  IonPage,
  IonToolbar,
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
import { person, unlock, helpCircleOutline } from "ionicons/icons";
import Logo from "../img/eoa-logo.png";
import styles from "../css/signin.module.css";

const SignIn: React.FC = ({ history }: any) => {
  const gotoHelp = (e: any) => {
    e.preventDefault();
    history.push("/help");
  };
  const gotoForgotPassword = (e: any) => {
    e.preventDefault();
    history.push("/forgot-password");
  };
  const gotoExperienceOurSolution = (e: any) => {
    e.preventDefault();
    history.push("/experience-our-solution");
  };
  const onLogin = (e: any) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <IonPage>
      <header>
        <IonItem lines="none">
          <IonIcon
            icon={helpCircleOutline}
            slot="end"
            style={{ fontSize: "30px" }}
            onClick={gotoHelp}
          />
        </IonItem>
      </header>
      <IonContent className="ion-padding">
        <form onSubmit={onLogin}>
          <IonGrid>
            <IonRow style={{ marginTop: "70px" }}>
              <IonCol>
                <IonItem lines="none">
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
                <IonItem lines="none" className={styles.input}>
                  <IonIcon icon={person} slot="start" />
                  <IonInput placeholder="User ID"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem lines="none" className={styles.input}>
                  <IonIcon icon={unlock} slot="start" />
                  <IonInput type="password" placeholder="Password"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div className="ion-text-end">
                  <a
                    href="!#"
                    style={{
                      fontSize: "80%",
                      color: "#808080",
                      marginRight: "5px"
                    }}
                    onClick={gotoForgotPassword}
                  >
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
        </form>
      </IonContent>
      <footer className="ion-text-center">
        <IonToolbar>
          <a
            href="!#"
            onClick={gotoExperienceOurSolution}
            style={{ color: "#808080" }}
          >
            Experience Our Solution
          </a>
        </IonToolbar>
      </footer>
    </IonPage>
  );
};

export default SignIn;
