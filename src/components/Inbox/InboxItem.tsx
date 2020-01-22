import { IonCol, IonCard, IonItem, IonAvatar, IonLabel } from "@ionic/react";
import React from "react";

const inboxes = [
  {
    id: 1,
    userName: "Jessica Tan",
    subject: "Expense Approval",
    image: "https://image.flaticon.com/icons/svg/1087/1087840.svg",
    points: {
      value: 123.0,
      sign: "MYR"
    }
  },
  {
    id: 2,
    userName: "Andre Alvarico",
    subject: "Pending Acceptance",
    image: "https://image.flaticon.com/icons/svg/214/214327.svg",
    points: {
      value: 764.234,
      sign: "TON"
    }
  },
  {
    id: 3,
    userName: "Aljhun Caputolan",
    subject: "Leave Approval",
    image: "https://image.flaticon.com/icons/svg/1146/1146296.svg",
    points: {
      value: 10.0,
      sign: "DAYS"
    }
  }
];

const InboxItem: React.FC = () => {
  return (
    <>
      {inboxes.map(inbox => (
        <IonCol size="12" key={inbox.id}>
          <IonCard
            style={{
              margin: "unset"
            }}
          >
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={inbox.image} alt="" />
              </IonAvatar>
              <IonLabel>
                <h2 style={{ fontSize: "4.5vw" }}>{inbox.subject}</h2>
                <p style={{ fontSize: "4vw" }}>{inbox.userName}</p>
              </IonLabel>
              <span slot="end" className="ion-text-end">
                <p style={{ margin: "0px 0px 3px", fontWeight: "bold" }}>
                  205.50
                </p>
                <p style={{ margin: "unset", fontSize: "13px" }}>MYR</p>
              </span>
            </IonItem>
          </IonCard>
        </IonCol>
      ))}
    </>
  );
};

export default InboxItem;
