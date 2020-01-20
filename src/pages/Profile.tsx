import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonAlert,
  IonFooter,
  IonToolbar
} from "@ionic/react";
import React, { useState } from "react";
import MainMenu from "../components/MainMenu";

const Profile: React.FC = ({ history }: any) => {
  const [showAlert, setShowAlert] = useState(false);
  const onLogOut = (e: any) => {
    setShowAlert(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Profile Page</h2>
        <IonButton onClick={onLogOut}>Log Out</IonButton>
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
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
