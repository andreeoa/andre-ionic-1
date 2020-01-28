import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonText,
  IonItem,
  IonHeader,
  IonBackButton,
  IonCard,
  IonFooter,
  IonIcon
} from "@ionic/react";
import React, { useState } from "react";
import ExpenseDetailItem from "../../components/Apps/eApproval/ExpenseDetailItem";
import WorkFlowInfoItem from "../../components/Apps/eApproval/WorkFlowInfoItem";
import { close, checkmark } from "ionicons/icons";

const ExpenseApprovalDetail: React.FC<any> = ({ match }) => {
  const { id } = match.params;
  const [tab, setTab] = useState(0);
  const tabItems = [
    {
      title: "Expense Detail",
      key: 0
    },
    {
      title: "Workflow Info",
      key: 1
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ "--background": "#dff2f3" }}>
          <IonItem
            lines="none"
            style={{
              "--background": "#dff2f3"
            }}
            className="ion-text-center"
          >
            <IonButtons
              slot="start"
              style={{ position: "absolute", left: "0" }}
            >
              <IonBackButton />
            </IonButtons>
            <IonTitle>Expense ID: {id}</IonTitle>
          </IonItem>
          <IonItem lines="none" style={{ "--background": "#dff2f3" }}>
            <IonLabel>
              <h2>
                <strong>Aditaya Hashimi</strong> (E345345)
              </h2>
            </IonLabel>
          </IonItem>
          <IonItem lines="none" style={{ "--background": "#dff2f3" }}>
            <IonLabel>
              <IonText style={{ fontSize: "2rem", fontWeight: "bold" }}>
                1,703.68
              </IonText>{" "}
              SGD
              <div style={{ marginTop: "5px" }}>
                <p slot="start" className="ion-float-left">
                  Period: Jan 2023
                </p>
                <IonButton
                  className="ion-float-right"
                  color="warning"
                  fill="outline"
                  style={{ marginTop: "-5px" }}
                >
                  Pend Approv.
                </IonButton>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem
            lines="none"
            className="ion-text-center"
            style={{
              background: "#dff2f3",
              borderTop: "1.5px solid #d7d8da",
              "--background": "#dff2f3"
            }}
          >
            {tabItems.map(item => (
              <IonCol
                size="6"
                key={item.title}
                onClick={() => setTab(item.key)}
              >
                {item.title}
              </IonCol>
            ))}
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow slot="fixed" className="ion-padding-horizontal">
          {tabItems.map(item => (
            <IonCol key={item.title}>
              <div
                style={{
                  borderBottom: "3px solid #3880ff",
                  position: "relative",
                  bottom: "5px",
                  display: item.key === tab ? "block" : "none"
                }}
              ></div>
            </IonCol>
          ))}
        </IonRow>
        <IonRow className="ion-padding">
          {tab === 0 ? (
            <>
              <ExpenseDetailItem />
              <ExpenseDetailItem />
              <ExpenseDetailItem />
              <ExpenseDetailItem />
              <ExpenseDetailItem />
            </>
          ) : (
            <WorkFlowInfoItem />
          )}
        </IonRow>
      </IonContent>
      <IonFooter className="ion-padding-horizontal">
        <IonToolbar>
          <IonCard
            style={{
              background: "#dff2f3",
              borderRadius: "30px"
            }}
            className="ion-text-center"
          >
            <IonRow>
              <IonCol size="6">
                <IonButton fill="clear" color="danger">
                  Reject
                  <IonIcon slot="start" icon={close} />
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton fill="clear" color="success">
                  Approve
                  <IonIcon slot="start" icon={checkmark} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCard>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ExpenseApprovalDetail;
