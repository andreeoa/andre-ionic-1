import React from "react";
import {
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonPage,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon
} from "@ionic/react";
import { beer } from "ionicons/icons";
import Toolbar2 from "../../components/Toolbars/Toolbar2";

const eApproval: React.FC = ({ history }: any) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar2 title="eApproval" />
      </IonHeader>
      <IonContent style={{ "--background": "#dff2f3" }}>
        <IonGrid>
          <IonRow>
            {[1, 2, 3, 4].map(number => (
              <IonCol size="6" key={number}>
                <IonCard
                  style={{
                    "--background": "#fff",
                    margin: "unset"
                  }}
                >
                  <IonCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, sint.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <span style={{ marginLeft: "3px" }}>Menu</span>
            </IonCol>
          </IonRow>
          <IonRow>
            {[1, 2, 3, 4].map(number => (
              <IonCol size="12" key={number}>
                <IonCard
                  style={{
                    margin: "unset"
                  }}
                >
                  <IonItem lines="none" routerLink="/expense-approval">
                    <IonIcon icon={beer} style={{ fontSize: "30px" }} />
                    <IonLabel className="ion-margin-start">
                      Purchase Order Approval
                    </IonLabel>
                    <p slot="end" style={{ color: "#3880ff" }}>
                      {number}
                    </p>
                  </IonItem>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default eApproval;
