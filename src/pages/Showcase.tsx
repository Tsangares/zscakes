import { IonButton,IonButtons,IonImg,IonSlides,IonSlide } from '@ionic/react';
import React from 'react';

const Showcase: React.FC = () => {
    return (
            <IonSlides>
              <IonSlide><img src='/img/cheesecake1.jpg'/></IonSlide>
              <IonSlide><img src='/img/cheesecake2.jpg'/></IonSlide>
              <IonSlide><img src='/img/cheesecake3.jpg'/></IonSlide>
              <IonSlide><img src='/img/cheesecake4.jpg'/></IonSlide>
            </IonSlides>
    );
};

export default Showcase;
