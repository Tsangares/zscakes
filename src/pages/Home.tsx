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
            <IonItemGroup>
              <IonItemDivider>
                <IonLabel>Family recipe, made by Jews.</IonLabel>
                <IonNote slot="end">You will never guess what the secret ingredient is</IonNote>
              </IonItemDivider>
              <h1 class="ion-text-center">Cheesecakes</h1>
            </IonItemGroup>
            <CakeDisplay />
            <Profile name="Jake Zwiebach" image="zwiebach.jpg" description="Hi im a jew and I make the cheesecake from my Jesus. The secret recipe for these cheesecakes has been past down for generations. Our twicebaked cheesecakes have been the product of celebration our family, the Zwiebachs. Our last name, Zwiebach, actually means twice baked, just like our cheesecakes." tags={['Owner','Sinner','Anarchist']}/>
            <Footer />
          </IonContent>
          
	</IonPage>
    );
};

export default Home;
