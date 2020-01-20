import {
  IonContent,
  IonHeader,
  IonPage,
  IonAvatar,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonSlides,
  IonSlide,
  IonLabel,
  IonIcon,
  IonButton,
  IonFooter
} from "@ionic/react";
import React from "react";
import { beer, football, paw, snow } from "ionicons/icons";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";

const Dashboard: React.FC = ({ history }: any) => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  const statistics = [
    {
      id: 1,
      title: "Monthy Target Sales",
      icon: beer,
      percent: 45,
      color: "primary"
    },
    {
      id: 2,
      title: "Daily Sales order (MYR)",
      icon: football,
      percent: 78,
      color: "secondary"
    },
    {
      id: 3,
      title: "MTD Sales Order (MYR)",
      icon: paw,
      percent: 94,
      color: "tertiary"
    },
    {
      id: 4,
      title: "MTD Sales Visits",
      icon: snow,
      percent: 32,
      color: "success"
    }
  ];
  const apps = [
    {
      id: 1,
      name: "eApproval",
      image: "https://image.flaticon.com/icons/svg/2399/2399630.svg"
    },
    {
      id: 2,
      name: "Steelaris Transporter",
      image: "https://image.flaticon.com/icons/svg/685/685842.svg"
    },
    {
      id: 3,
      name: "EMM Wipro Unza",
      image: "https://image.flaticon.com/icons/svg/2144/2144314.svg"
    },
    {
      id: 4,
      name: "ESFA Wipro Unza",
      image: "https://image.flaticon.com/icons/svg/2432/2432908.svg"
    }
  ];
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
  return (
    <IonPage>
      <IonHeader>
        <MainToolbar title="Dashboard" />
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
                <IonRow className="ion-padding">
                  {statistics.map((stat: any) => (
                    <IonCol size="6" key={stat.id}>
                      <IonItem lines="none">
                        <IonIcon
                          icon={stat.icon}
                          slot="start"
                          style={{
                            margin: "unset",
                            position: "relative",
                            right: "10px"
                          }}
                        />
                        <IonLabel
                          style={{ fontSize: "30px" }}
                          color={stat.color}
                        >
                          {stat.percent}%
                        </IonLabel>
                      </IonItem>
                      <p
                        style={{
                          position: "relative",
                          bottom: "25px",
                          marginLeft: "43px",
                          textAlign: "left",
                          fontSize: "15px",
                          lineHeight: "20px"
                        }}
                      >
                        {stat.title}
                      </p>
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
                    <IonItem lines="none" style={{ display: "flex" }}>
                      <IonAvatar slot="start">
                        <img src={app.image} alt="" />
                      </IonAvatar>
                      <p style={{ margin: "0px", fontSize: "4vw" }}>
                        {app.name}
                      </p>
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
                        <img src={inbox.image} alt="" />
                      </IonAvatar>
                      <IonLabel>
                        <h2 style={{ fontSize: "4.5vw" }}>{inbox.subject}</h2>
                        <p style={{ fontSize: "4vw" }}>{inbox.userName}</p>
                      </IonLabel>
                      <span slot="end" style={{ textAlign: "right" }}>
                        <p
                          style={{ margin: "0px 0px 3px", fontWeight: "bold" }}
                        >
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
                        <img src={activity.image} alt="" />
                      </IonAvatar>
                      <IonLabel>
                        <h2 style={{ fontSize: "4.5vw" }}>
                          {activity.subject}
                        </h2>
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
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
      <IonFooter>
        <MainMenu />
      </IonFooter>
    </IonPage>
  );
};

export default Dashboard;
