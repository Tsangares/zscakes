// eslint-disable-next-line
import { IonItem,IonChip,IonLabel,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonAvatar,IonCardTitle,IonCardContent,IonItemGroup } from '@ionic/react';
import React from 'react';

interface Props{
    name: String;
    image: String;
    description: String;
    tags: Array<String>;
}
const Profile = (props:Props) => {
    var tags=props.tags.map(name=>(
        <IonChip>
          <IonLabel>{name}</IonLabel>
        </IonChip>
    ));
    return (
        <IonGrid>
          <IonRow>
            <IonCol offset-lg="3" size-lg={"6"} size-xs={"12"}>
              <IonCard>
                <IonCardHeader class="ion-text-center">
                  <IonAvatar class="image-center">
                    <img alt={`${props.name}`} src={`/img/${props.image}`}/>
                  </IonAvatar>
                  <IonCardTitle>
                    {props.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{props.description}</p>
                  <IonItemGroup class="ion-text-center">
                      {tags}
                  </IonItemGroup>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
    );
};

export default Profile;
