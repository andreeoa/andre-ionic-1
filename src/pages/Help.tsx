import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonInput,
  IonLabel
} from "@ionic/react";
import React from "react";
import { search, call, mail } from "ionicons/icons";
import styles from "../css/signin.module.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none" className={styles.input}>
                <IonInput placeholder="Search..."></IonInput>
                <IonIcon icon={search} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none" style={{ "--background": "#dff2f3" }}>
                <IonLabel>Login Guide</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ul className={styles.dashed}>
                <li>
                  Login using a valid e.Mobility System User ID and Password.
                </li>
                <li>
                  Contact your system admin for authorization related inquiry.
                </li>
              </ul>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none" style={{ "--background": "#dff2f3" }}>
                <IonLabel>Contact Us</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonIcon icon={call} slot="start" />
                <IonLabel>Tel: 012-3456789</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={mail} slot="start" />
                <IonLabel>
                  Email: <a href="#">e.mobility@e-oasia.com</a>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
