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
  IonCol,
  IonLoading,
  IonText
} from "@ionic/react";
import React, { useState } from "react";
import { person, unlock, helpCircleOutline } from "ionicons/icons";
import Logo from "../img/eoa-logo.png";
import styles from "../css/signin.module.css";
import { connect } from "react-redux";
import { authenticate } from "../redux/auth/actions";

const SignIn: React.FC = ({
  history,
  authUser,
  authenticate,
  nonAuth
}: any) => {
  const [username, setUsername] = useState<string>("boonhao");
  const [password, setPassword] = useState<string>("12345678");

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
    const user = {
      USERID: username,
      USERPASS: password
    };
    authenticate(user);
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
        <IonLoading isOpen={authUser.loading} message={"Loading..."} />
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
                  <IonInput
                    placeholder="User ID"
                    value={username}
                    onIonChange={(e: any) => setUsername(e.target.value)}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem lines="none" className={styles.input}>
                  <IonIcon icon={unlock} slot="start" />
                  <IonInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={(e: any) => setPassword(e.target.value)}
                  ></IonInput>
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
            <IonRow>
              {authUser.error ? (
                <IonCol className="ion-text-center">
                  <IonText color="danger">{authUser.error}</IonText>
                </IonCol>
              ) : (
                ""
              )}
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

const mapStateToProps = (state: any) => {
  return {
    authUser: state.auth
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    authenticate: (user: object) => dispatch(authenticate(user, ownProps))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
