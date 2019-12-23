import { IonItemGroup,IonGrid,IonRow,IonCol,IonButton, IonCard, IonChip, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel,IonButtons,IonImg,IonSlides,IonSlide, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
    return (
	<IonPage>
	  <IonHeader>
            <IonToolbar>
              <IonButtons>
                <IonTitle>Z's Cakes</IonTitle>
                <IonButton>About</IonButton>
              </IonButtons>
            </IonToolbar>
	  </IonHeader>
	  <IonContent className="ion-padding">
            <IonItem>
              <IonTitle>Family recipe, made by Jews.</IonTitle><br/>
              <IonLabel>You will never guess what the secret ingredient is...</IonLabel>
            </IonItem>
            <IonGrid>
              <IonRow responsive-md>
                <IonCol>
                  <IonCard>
                    <img src="/img/cheesecake1.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>Apple Cider</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      It is good and has a hint of apple cider in the cake.
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <img src="/img/cheesecake2.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>Oreo</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      The worsd one we make. Filled and covered in orgeo crusts or something with gagooun.
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow responsive-md>
                <IonCol>
                  <IonCard>
                    <img src="/img/cheesecake3.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>The Regular</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      With potatoes in the center, our classic overalls make a great fit for mining gold in the mines. 
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <img src="/img/cheesecake4.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>Brown Sugar</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      The title is fucking obvious. There is some god damn brown sugarin the cakes. Get over it and just simply buy it you pice of shit. 
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonItemGroup>
              
            </IonItemGroup>
          </IonContent>
	</IonPage>
    );
};

export default Home;
