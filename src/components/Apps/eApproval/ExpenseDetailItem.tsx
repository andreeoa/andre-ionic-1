import React from "react";
import {
  IonCol,
  IonCard,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
  IonNote
} from "@ionic/react";
import { arrowDropdown } from "ionicons/icons";

const ExpenseDetailItem: React.FC = () => {
  return (
    <IonCol size="12">
      <IonCard className="ion-no-margin">
        <IonItem lines="none">
          <IonLabel>
            <p style={{ fontSize: "12px" }}>Project Claim (PRJ-001)</p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#000"
                }}
              >
                Accomodation
              </span>{" "}
              <small>(EXP025)</small>
            </p>
            <p>05 Oct 2019</p>
          </IonLabel>
          <IonNote className="ion-text-right" style={{ marginTop: "25px" }}>
            <IonText
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000"
              }}
            >
              800.35
            </IonText>

            <p className="ion-no-margin" style={{ fontSize: "18px" }}>
              SGD
            </p>
          </IonNote>
        </IonItem>
        <div
          className="ion-padding-horizontal"
          style={{ fontSize: "12px", marginTop: "-10px" }}
        >
          <p className="ion-float-left">Aditya 16 Oct 2019</p>
          <p
            className="ion-float-right"
            style={{ marginRight: "15px", color: "#3880ff" }}
          >
            View Remarks{" "}
            <IonIcon
              icon={arrowDropdown}
              style={{
                position: "absolute",
                right: "13px",
                bottom: "12px",
                fontSize: "15px"
              }}
            />
          </p>
        </div>
      </IonCard>
    </IonCol>
  );
};

export default ExpenseDetailItem;
