import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from "@ionic/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/actions";

const Users: React.FC = ({ userData, fetchUsers }: any) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const userList = (
    <IonList>
      {userData.users.map((user: any) => (
        <IonItem key={user.id} routerLink={`/user/${user.id}`}>
          <IonLabel>{user.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Users List</h1>
        {userData.loading ? (
          <IonLoading isOpen={userData.loading} message={"Loading..."} />
        ) : userData.error ? (
          <h2>{userData.error}</h2>
        ) : (
          userList
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
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
