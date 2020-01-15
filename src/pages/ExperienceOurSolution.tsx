import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonSlides,
  IonSlide
} from "@ionic/react";
import React from "react";

const slides = [
  {
    id: 1,
    title: "Dashboard",
    image1:
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image2:
      "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image3:
      "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    title: "About Us",
    image1:
      "https://images.pexels.com/photos/39629/tiger-tiger-baby-tigerfamile-young-39629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image2:
      "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image3:
      "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    title: "Contact Us",
    image1:
      "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image2:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image3:
      "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const ExperienceOurSolution: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSlides pager={true} options={slideOpts}>
          {slides.map(slide => (
            <IonSlide key={slide.id}>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonImg src={slide.image1} />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonImg src={slide.image2}></IonImg>
                  </IonCol>
                  <IonCol>
                    <IonImg src={slide.image3}></IonImg>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <div className="ion-text-center">
                      <h4>{slide.title}</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi natus eos quibusdam exercitationem veritatis,
                        labore consequuntur! Incidunt, recusandae facilis?
                        Minima ipsam culpa quis, alias odit aut in enim quisquam
                        est.
                      </p>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          ))}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default ExperienceOurSolution;
