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
  IonImg
} from "@ionic/react";
import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { lock, create } from "ionicons/icons";

const Profile: React.FC = ({ history }: any) => {
  const [showAlert, setShowAlert] = useState(false);
  const avatar = `https://image.flaticon.com/icons/svg/234/234694.svg`;
  const details = [
    {
      title: "User ID:",
      body: "alexyong01"
    },
    {
      title: "First Name:",
      body: "Alex"
    },
    {
      title: "Last Name:",
      body: "yong"
    },
    {
      title: "Mobile No.:",
      body: "+06123456789"
    }
  ];
  const onLogOut = (e: any) => {
    setShowAlert(true);
  };
  return (
    <IonPage>
      <header>
        <IonToolbar>
          <IonItem lines="none">
            <IonIcon icon={lock} />
            <IonTitle style={{ fontWeight: "bold" }}>Profile</IonTitle>
            <IonIcon icon={create} />
          </IonItem>
        </IonToolbar>
      </header>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol style={{ padding: "0 70px" }}>
              <IonImg src={avatar} onClick={() => history.push("/profile")} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>Alex_Yong</h1>
                <h5>alexyong01@gmail.com</h5>
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
                history.push("/signin");
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

export default Profile;
