import {
  IonCol,
  IonCard,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton
} from "@ionic/react";
import React from "react";

const activities = [
  {
    id: 1,
    userName: "Andre Alvarico",
    subject: "Expense Approval",
    image: "https://image.flaticon.com/icons/svg/1169/1169097.svg",
    status: 1
  },
  {
    id: 2,
    userName: "Jessica Tan",
    subject: "Leave Approval",
    image: "https://image.flaticon.com/icons/svg/2411/2411109.svg",
    status: 0
  },
  {
    id: 3,
    userName: "Aljhun Caputolan",
    subject: "Expense Approval",
    image: "https://image.flaticon.com/icons/svg/2445/2445284.svg",
    status: 1
  }
];

const ActivityItem: React.FC = () => {
  return (
    <>
      {activities.map(activity => (
        <IonCol size="12" key={activity.id}>
          <IonCard
            style={{
              margin: "unset"
            }}
          >
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={activity.image} alt="" />
              </IonAvatar>
              <IonLabel>
                <h2 style={{ fontSize: "4.5vw" }}>{activity.subject}</h2>
                <p style={{ fontSize: "4vw" }}>{activity.userName}</p>
              </IonLabel>
              <IonButton
                color={activity.status ? "success" : "danger"}
                fill="outline"
              >
                {activity.status ? "Accepted" : "Rejected"}
              </IonButton>
            </IonItem>
          </IonCard>
        </IonCol>
      ))}
    </>
  );
};

export default ActivityItem;
