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
  IonIcon
} from "@ionic/react";
import React, { useState } from "react";
import ExpenseApprovalItem from "../../components/Apps/eApproval/ExpenseApprovalItem";
import { arrowBack } from "ionicons/icons";

const ExpenseApprovalDetail: React.FC<any> = ({ history, match }) => {
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
      <header>
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
              <IonButton onClick={() => history.goBack()}>
                <IonIcon slot="icon-only" icon={arrowBack} />
              </IonButton>
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
                <div></div>
              </IonCol>
            ))}
          </IonItem>
        </IonToolbar>
        <IonRow>
          <IonCol>
            {tab === 0 ? (
              <div
                style={{
                  borderBottom: "3px solid #3880ff",
                  position: "relative",
                  bottom: "5px"
                }}
              ></div>
            ) : (
              ""
            )}
          </IonCol>
          <IonCol>
            {tab === 1 ? (
              <div
                style={{
                  borderBottom: "3px solid #3880ff",
                  position: "relative",
                  bottom: "5px"
                }}
              ></div>
            ) : (
              ""
            )}
          </IonCol>
        </IonRow>
      </header>
      <IonContent>
        <IonRow className="ion-padding">
          {tab === 0 ? (
            <>
              <ExpenseApprovalItem />
              <ExpenseApprovalItem />
              <ExpenseApprovalItem />
            </>
          ) : (
            <p>Workflow Info</p>
          )}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ExpenseApprovalDetail;
