// eslint-disable-next-line
import { IonImg,IonAvatar,IonItemDivider,IonItemGroup,IonNote,IonGrid,IonRow,IonCol,IonButton, IonCard, IonChip, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel,IonButtons,IonSlides,IonSlide, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import CakeDisplay from './components/CakeDisplay';
import Profile from './components/Profile';
const Home: React.FC = () => {
    return (
	<IonPage>
          <Toolbar/>
          <IonContent className="ion-padding">
            <CakeDisplay />
            <div id="about"><Profile /></div>
            <Footer />
          </IonContent>
          
	</IonPage>
    );
};

export default Home;
