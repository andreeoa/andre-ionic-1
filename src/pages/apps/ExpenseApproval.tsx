import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import React from "react";
import ExpenseApprovalItem from "../../components/Apps/eApproval/ExpenseApprovalItem";
import Toolbar2 from "../../components/Toolbars/Toolbar2";

const ExpenseApproval: React.FC = ({ history }: any) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar2 title="Expense Approval" />
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
