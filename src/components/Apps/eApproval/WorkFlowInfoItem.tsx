import React from "react";
import { IonCol, IonCard, IonItem, IonLabel } from "@ionic/react";

const WorkFlowInfoItem: React.FC = () => {
  return (
    <IonCol size="12">
      <IonCard className="ion-no-margin">
        <IonItem lines="none">
          <IonLabel>
            <p>Review Expense</p>
            <p style={{ padding: "10px 0" }} color="warning">
              Status:{" "}
              <span
                style={{
                  position: "relative",
                  top: "2px",
                  fontSize: "18px",
                  color: "#ffce00"
                }}
              >
                Pending Approval
              </span>
            </p>
            <p>Approver: Robert</p>
          </IonLabel>
        </IonItem>
      </IonCard>
    </IonCol>
  );
};

export default WorkFlowInfoItem;
