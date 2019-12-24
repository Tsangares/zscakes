// eslint-disable-next-line
import { IonItemGroup,IonLabel,IonGrid,IonRow,IonCol,IonCardHeader,IonCardContent,IonCardTitle,IonCard} from '@ionic/react';
import React from 'react';

const CakeDisplay: React.FC = () => {
    return (
        <IonItemGroup>
          <a id="cakes"><IonLabel color="dark" class="ion-margin ion-padding-top big-text ion-text-center">Cheesecakes</IonLabel></a>
          <IonGrid>
            <IonRow responsive-md>
              <IonCol size-xs={"12"} size-lg={"6"}>
                <IonCard>
                  <img alt="cheesecake" src="/img/cheesecake1.jpg" />
                  <IonCardHeader>
                    <IonCardTitle>Apple Cider</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    It is good and has a hint of apple cider in the cake.
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size-xs={"12"} size-lg={"6"}>
                <IonCard>
                  <img alt="cheesecake" src="/img/cheesecake2.jpg" />
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
              <IonCol size-xs={"12"} size-lg={"6"}>
                <IonCard>
                  <img alt="cheesecake" src="/img/cheesecake3.jpg" />
                  <IonCardHeader>
                    <IonCardTitle>The Regular</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    With potatoes in the center, our classic overalls make a great fit for mining gold in the mines. 
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size-xs={"12"} size-lg={"6"}>
                <IonCard>
                  <img alt="cheesecake" src="/img/cheesecake4.jpg" />
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
        </IonItemGroup>
    );
};

export default CakeDisplay;
