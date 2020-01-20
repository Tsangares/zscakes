// eslint-disable-next-line
import { IonFooter,IonHeader,IonToolbar,IonTitle,IonButtons,IonButton } from '@ionic/react';
import React from 'react';

const Toolbar: React.FC = () => {
    return (
        <IonFooter>
          <IonToolbar>
            <IonButtons>
              <IonTitle>Made by Hand.</IonTitle>
              <IonButton href="https://z.nitza.space/admin">editor</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
    );
};

export default Toolbar;
