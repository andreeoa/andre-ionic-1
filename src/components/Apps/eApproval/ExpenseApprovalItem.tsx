import React from "react";
import { IonCol, IonCard, IonItem, IonLabel } from "@ionic/react";

const ExpenseApprovalItem: React.FC = () => {
  return (
    <IonCol size="12">
      <IonCard
        style={{
          margin: "unset"
        }}
      >
        <IonItem lines="none" routerLink="/expense-approval-detail/1">
          <IonLabel>
            <small className="ion-margin-bottom">Expense ID: 5000212</small>
            <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>
              Jessica Tan (E801115)
            </h2>
            <p>Aug 2019</p>
          </IonLabel>
          <span slot="end" className="ion-text-end">
            <p style={{ margin: "0px 0px 3px", fontWeight: "bold" }}>
              23,430.00
            </p>
            <p style={{ margin: "unset", fontSize: "13px" }}>MYR</p>
          </span>
        </IonItem>
      </IonCard>
    </IonCol>
  );
};

export default ExpenseApprovalItem;
