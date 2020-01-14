import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonBackButton,
  IonButtons,
  IonLoading
} from "@ionic/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/users/actions";

const User: React.FC = ({ match, fetchUser, userData }: any) => {
  const { user } = userData;
  useEffect(() => {
    fetchUser(match.params.id);
  }, []);

  const userCard = (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{user.email}</IonCardSubtitle>
        <IonCardTitle>{user.username}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <h2>Website: {user.website}</h2>
        <p>Phone: {user.phone}</p>
      </IonCardContent>
    </IonCard>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>User Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {userData.user_loading ? (
          <IonLoading isOpen={userData.user_loading} message={"Loading..."} />
        ) : userData.user_error ? (
          <h2>{userData.user_error}</h2>
        ) : (
          userCard
        )}
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: (id: number) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
