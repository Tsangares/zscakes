// eslint-disable-next-line
import { IonFooter,IonHeader,IonToolbar,IonTitle,IonButtons,IonButton } from '@ionic/react';
import React from 'react';

const Toolbar: React.FC = () => {
    return (
        <IonFooter>
          <IonToolbar>
            <IonTitle>Made by Hand.</IonTitle>
          </IonToolbar>
        </IonFooter>
    );
};

export default Toolbar;
