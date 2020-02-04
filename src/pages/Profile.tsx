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
  IonLoading,
  useIonViewWillEnter
} from "@ionic/react";
import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { lock, create } from "ionicons/icons";
import { connect } from "react-redux";
import { logout } from "../redux/auth/logout/actions";
import { auth } from "../redux/auth/actions";

const Profile: React.FC = ({ authData, logoutData, logout, auth }: any) => {
  useIonViewWillEnter(auth);
  const {
    name,
    username,
    firstname,
    lastname,
    email,
    mobile_no
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
                <IonImg
                  src={`https://image.flaticon.com/icons/svg/234/234694.svg`}
                  alt=""
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>{name}</h1>
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
              <p className="ion-text-center">
                Last login: 26 Dec 2019 11:22:14 AM
              </p>
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
    logout: () => dispatch(logout(ownProps)),
    auth: () => dispatch(auth(ownProps))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
