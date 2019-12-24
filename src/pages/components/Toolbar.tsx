// eslint-disable-next-line
import { IonHeader,IonToolbar,IonTitle,IonButtons,IonButton } from '@ionic/react';
import React from 'react';

const Toolbar: React.FC = () => {
    return (
	<IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonTitle>Z's Cakes</IonTitle>
              <a href="/home#cakes"><IonButton>Cakes</IonButton></a>
              <a href="/home#about"><IonButton>About</IonButton></a>
            </IonButtons>
          </IonToolbar>
	</IonHeader>
    );
};

export default Toolbar;
