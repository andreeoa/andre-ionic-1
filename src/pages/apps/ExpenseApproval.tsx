import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButtons,
  IonMenuButton
} from "@ionic/react";
import React from "react";
import ExpenseApprovalItem from "../../components/Apps/eApproval/ExpenseApprovalItem";

const ExpenseApproval: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle style={{ fontWeight: "bold" }}>Expense Approval</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ "--background": "#dff2f3" }}>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel>Filter</IonLabel>
                <IonSelect>
                  <IonSelectOption value="all">All</IonSelectOption>
                  <IonSelectOption value="f">Female</IonSelectOption>
                  <IonSelectOption value="m">Male</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem>
                <IonLabel>Filter</IonLabel>
                <IonSelect>
                  <IonSelectOption value="all">All</IonSelectOption>
                  <IonSelectOption value="f">Female</IonSelectOption>
                  <IonSelectOption value="m">Male</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <ExpenseApprovalItem />
            <ExpenseApprovalItem />
            <ExpenseApprovalItem />
            <ExpenseApprovalItem />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ExpenseApproval;
