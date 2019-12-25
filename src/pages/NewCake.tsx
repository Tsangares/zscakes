// eslint-disable-next-line
import { IonInput,IonImg,IonAvatar,IonItemDivider,IonItemGroup,IonNote,IonGrid,IonRow,IonCol,IonButton, IonCard, IonChip, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel,IonButtons,IonSlides,IonSlide, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Footer from './components/Footer';

interface InputProps{
    label: String;
}
const Entry = (props: InputProps) => {
    return (
        <IonItem>
          <IonLabel position="floating">{props.label}</IonLabel>
          <IonInput></IonInput>
        </IonItem>
    )
}
const Home: React.FC = () => {
    return (
	<IonPage>
          <IonContent className="ion-padding">
            <IonGrid>
              
            </IonGrid>
            <IonItemGroup>
              <Entry label="Oven Temp (F):"/>
              <Entry label="Crust Time (minutes):"/>
              <Entry label="Cake Time (minutes):"/>
              <Entry label="Number of Cakes in the Oven:"/>
              <Entry label="Rest Time (minutes):"/>
              <Entry label="Was the cheesecake left in the oven while resting?"/>

            </IonItemGroup>
            <Footer />
          </IonContent>
          
	</IonPage>
    );
};

export default Home;
