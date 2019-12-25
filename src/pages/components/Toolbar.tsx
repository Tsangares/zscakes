// eslint-disable-next-line
import { IonHeader,IonToolbar,IonTitle,IonButtons,IonButton } from '@ionic/react';
import React from 'react';

const Toolbar: React.FC = () => {
    return (
	<IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonTitle>Z's Cakes</IonTitle>
              <IonButton href="">Home</IonButton>
              <IonButton href="/home#cakes">Cakes</IonButton>
              <IonButton href="/home#about">About</IonButton>
            </IonButtons>
          </IonToolbar>
	</IonHeader>
    );
};

export default Toolbar;
