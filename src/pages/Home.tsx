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
            </IonItemGroup>
            <CakeDisplay />
            <a id="about"><Profile name="Jake Zwiebach" image="zwiebach.jpg" description="Hi im a jew and I make the cheesecake from my Jesus. The secret recipe for these cheesecakes has been past down in my family for generations. Our twicebaked cheesecakes become the center of celebrations at potlucks and dinners - always eaten first. Our last name, Zwiebach, actually means twice baked, just like our cheesecakes." tags={['Owner','Sinner','Anarchist']}/></a>
            <Footer />
          </IonContent>
          
	</IonPage>
    );
};

export default Home;
