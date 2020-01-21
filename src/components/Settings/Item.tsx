import React from "react";
import { IonCol, IonCard, IonItem, IonIcon, IonLabel } from "@ionic/react";

const Item: React.FC<any> = ({ item }) => {
  return (
    <IonCol size="12" key={item.title}>
      <IonCard
        style={{
          margin: "unset",
          boxShadow: "none"
        }}
      >
        <IonItem
          lines="none"
          style={{ "--background": "#dff2f3" }}
          onClick={item.function}
        >
          <IonIcon icon={item.icon} />
          <IonLabel className="ion-margin-start">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </IonLabel>
        </IonItem>
      </IonCard>
    </IonCol>
  );
};

export default Item;
