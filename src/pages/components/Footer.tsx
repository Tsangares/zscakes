// eslint-disable-next-line
import { IonFooter,IonHeader,IonToolbar,IonTitle,IonButtons,IonButton } from '@ionic/react';
import React from 'react';

const Toolbar: React.FC = () => {
    return (
        <IonFooter>
          <IonToolbar>
            <IonButtons>
              <IonTitle>Made by Hand.</IonTitle>
              <IonButton href="/">Home</IonButton>
              <IonButton href="/input">New Cake</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
    );
};

export default Toolbar;
