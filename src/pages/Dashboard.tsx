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
  IonFooter
} from "@ionic/react";
import React from "react";
import { beer, football, paw, snow } from "ionicons/icons";
import MainMenu from "../components/MainMenu";
import MainToolbar from "../components/MainToolbar";
import ActivityItem from "../components/Activity/ActivityItem";
import InboxItem from "../components/Inbox/InboxItem";

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
      image: "https://image.flaticon.com/icons/svg/2399/2399630.svg",
      rounterLink: "/e-approval"
    },
    {
      id: 2,
      name: "Steelaris Transporter",
      image: "https://image.flaticon.com/icons/svg/685/685842.svg",
      rounterLink: "/e-approval"
    },
    {
      id: 3,
      name: "EMM Wipro Unza",
      image: "https://image.flaticon.com/icons/svg/2144/2144314.svg",
      rounterLink: "/e-approval"
    },
    {
      id: 4,
      name: "ESFA Wipro Unza",
      image: "https://image.flaticon.com/icons/svg/2432/2432908.svg",
      rounterLink: "/e-approval"
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
                    <IonItem
                      lines="none"
                      style={{ display: "flex" }}
                      routerLink={app.rounterLink}
                    >
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
              <InboxItem />
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
              <ActivityItem />
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
