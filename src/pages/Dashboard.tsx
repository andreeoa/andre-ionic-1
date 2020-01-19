import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonSlides,
  IonSlide,
  IonLabel,
  IonIcon,
  IonButton
} from "@ionic/react";
import React from "react";
import { filing, checkmark, cube } from "ionicons/icons";

const Dashboard: React.FC = ({ history }: any) => {
  const avatar = `https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y`;
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  const apps = [
    {
      id: 1,
      name: "eApproval",
      image: null
    },
    {
      id: 2,
      name: "Steelaris Transporter",
      image: null
    },
    {
      id: 3,
      name: "EMM Wipro Unza",
      image: null
    },
    {
      id: 4,
      name: "ESFA Wipro Unza",
      image: null
    }
  ];
  const inboxes = [
    {
      id: 1,
      userName: "Jessica Tan",
      subject: "Expense Approval",
      points: {
        value: 123.0,
        sign: "MYR"
      }
    },
    {
      id: 2,
      userName: "Andre Alvarico",
      subject: "Pending Acceptance",
      points: {
        value: 764.234,
        sign: "TON"
      }
    },
    {
      id: 3,
      userName: "Aljhun Caputolan",
      subject: "Leave Approval",
      points: {
        value: 10.0,
        sign: "DAYS"
      }
    }
  ];
  const activities = [
    {
      id: 1,
      userName: "Andre Alvarico",
      subject: "Expense Approval",
      image: null,
      status: "Rejected"
    },
    {
      id: 2,
      userName: "Jessica Tan",
      subject: "Leave Approval",
      image: null,
      status: "Accepted"
    },
    {
      id: 3,
      userName: "Aljhun Caputolan",
      subject: "Expense Approval",
      image: null,
      status: "Accepted"
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonTitle style={{ fontWeight: "bold" }}>Dashboard</IonTitle>
            <IonAvatar slot="end" onClick={() => history.push("/profile")}>
              <img src={avatar} alt="" />
            </IonAvatar>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-vertical">
                  <IonCol>
                    <IonLabel>eApproval</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  {[1, 2, 3, 4].map((num: number) => (
                    <IonCol size="6" className="ion-margin-vertical" key={num}>
                      <IonItem lines="none">
                        <IonIcon
                          icon={filing}
                          style={{
                            marginBottom: "35px",
                            marginRight: "10px",
                            fontSize: "35px"
                          }}
                        />
                        <div>
                          <h1 style={{ margin: "unset" }}>75%</h1>
                          <span>Monthly Target Sales</span>
                        </div>
                      </IonItem>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-vertical">
                  <IonCol>
                    <IonLabel>Transporter</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>1</IonCol>
                  <IonCol>2</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>1</IonCol>
                  <IonCol>2</IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </div>
        <div style={{ backgroundColor: "#dff2f3" }}>
          <IonGrid>
            <IonRow className="ion-margin-top">
              <IonCol>
                <span style={{ marginLeft: "3px" }}>Apps</span>
              </IonCol>
            </IonRow>
            <IonRow>
              {apps.map(app => (
                <IonCol size="6" key={app.id}>
                  <IonCard
                    style={{
                      "--background": "#fff",
                      margin: "unset"
                    }}
                  >
                    <IonItem
                      lines="none"
                      style={{ minHeight: "70px", display: "inline-flex" }}
                    >
                      <IonIcon icon={cube} style={{ fontSize: "30px" }} />
                      <p style={{ margin: "0 0 0 10px" }}>{app.name}</p>
                    </IonItem>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
            <IonRow className="ion-margin-top">
              <IonCol>
                <IonItem
                  lines="none"
                  style={{ "--background": "none", margin: "-15px -15px" }}
                >
                  <span>Inbox</span>
                  <span slot="end" style={{ color: "#0000EE" }}>
                    See All
                  </span>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              {inboxes.map(inbox => (
                <IonCol size="12" key={inbox.id}>
                  <IonCard
                    style={{
                      "--background": "#fff",
                      margin: "unset"
                    }}
                  >
                    <IonItem lines="none">
                      <IonAvatar slot="start">
                        <img
                          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                          alt=""
                        />
                      </IonAvatar>
                      <IonLabel>
                        <h3>{inbox.subject}</h3>
                        <p>{inbox.userName}</p>
                      </IonLabel>
                      <span slot="end" style={{ textAlign: "right" }}>
                        <p style={{ margin: "unset", fontWeight: "bold" }}>
                          205.50
                        </p>
                        <p style={{ margin: "unset", fontSize: "13px" }}>MYR</p>
                      </span>
                    </IonItem>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
            <IonRow className="ion-margin-top">
              <IonCol>
                <IonItem
                  lines="none"
                  style={{ "--background": "none", margin: "-15px -15px" }}
                >
                  <span>Activity</span>
                  <span slot="end" style={{ color: "#0000EE" }}>
                    See All
                  </span>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              {activities.map(activity => (
                <IonCol size="12" key={activity.id}>
                  <IonCard
                    style={{
                      "--background": "#fff",
                      margin: "unset"
                    }}
                  >
                    <IonItem lines="none">
                      <IonAvatar slot="start">
                        <img
                          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                          alt=""
                        />
                      </IonAvatar>
                      <IonLabel>
                        <h3>{activity.subject}</h3>
                        <p>{activity.userName}</p>
                      </IonLabel>
                      <IonButton color="success" fill="outline">
                        {activity.status}
                      </IonButton>
                    </IonItem>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
