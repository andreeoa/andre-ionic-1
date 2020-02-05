import {
  IonContent,
  IonPage,
  IonButton,
  IonAlert,
  IonFooter,
  IonToolbar,
  IonItem,
  IonTitle,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonAvatar,
  IonLoading
} from "@ionic/react";
import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { lock, create } from "ionicons/icons";
import { connect } from "react-redux";
import { logout } from "../redux/auth/logout/actions";

const Profile: React.FC = ({ authData, logoutData, logout }: any) => {
  const {
    username,
    firstname,
    lastname,
    email,
    mobile_no,
    user_photo,
    last_login
  } = authData.user;
  const [showAlert, setShowAlert] = useState(false);
  const details = [
    {
      title: "User ID:",
      body: username
    },
    {
      title: "First Name:",
      body: firstname
    },
    {
      title: "Last Name:",
      body: lastname
    },
    {
      title: "Mobile No.:",
      body: mobile_no
    }
  ];
  const onLogOut = (e: any) => {
    setShowAlert(true);
  };
  return (
    <IonPage>
      <header>
        <IonToolbar>
          <IonItem lines="none" className="ion-text-center">
            <IonIcon icon={lock} />
            <IonTitle>Profile</IonTitle>
            <IonIcon icon={create} />
          </IonItem>
        </IonToolbar>
      </header>
      <IonContent className="ion-padding">
        <IonLoading isOpen={logoutData.loading} message={"Logging out..."} />
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAvatar
                style={{
                  margin: "0 auto",
                  minWidth: "10rem",
                  minHeight: "10rem"
                }}
              >
                <IonImg src={user_photo} alt="" />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>{firstname + " " + lastname}</h1>
                <h5>{email}</h5>
              </div>
            </IonCol>
          </IonRow>
          {details.map(detail => (
            <IonRow
              className="ion-padding-horizontal ion-margin-vertical"
              key={detail.title}
            >
              <IonCol push="1">{detail.title}</IonCol>
              <IonCol>{detail.body}</IonCol>
            </IonRow>
          ))}

          <IonRow>
            <IonCol>
              <IonButton
                color="danger"
                expand="block"
                shape="round"
                fill="outline"
                onClick={onLogOut}
              >
                Log Out
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p className="ion-text-center">Last login: {last_login}</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          message={"Are you sure you want to log out?"}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: blah => {
                console.log("Confirm Cancel: blah");
              }
            },
            {
              text: "OK",
              handler: () => {
                logout();
              }
            }
          ]}
        />
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authData: state.auth,
    logoutData: state.logout
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    logout: () => dispatch(logout(ownProps))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
