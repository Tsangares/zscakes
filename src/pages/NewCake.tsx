// eslint-disable-next-line
import { IonFab,IonFabButton,IonSelect, IonSelectOption,IonInput,IonImg,IonAvatar,IonItemDivider,IonItemGroup,IonNote,IonGrid,IonRow,IonCol,IonButton, IonCard, IonChip, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel,IonButtons,IonSlides,IonSlide, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';
import Footer from './components/Footer';

interface InputProps{
    label: String;
}
const Entry = (props: InputProps) => {
    return (
        <IonItem>
          <IonLabel position="floating">{props.label}</IonLabel>
          <IonInput type="number"  ></IonInput>
        </IonItem>
    );
};
/*
const submitSurvey = ()=>{
    fetch()
}
*/
const NewCake: React.FC = () => {
    // eslint-disable-next-line  
    const [state, setState] = useState(0);
    return (
	<IonPage>
          <IonHeader>
            <IonToolbar>      
              <IonButtons>
                <IonTitle>Record the baking of a cheesecake</IonTitle>
                <a href="/"><IonButton>Home</IonButton></a>
                <IonButton>Add New Recipe</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol size-xs="12" size-lg="6" offset-lg="3">
                  <IonItemGroup >
                    <IonItem>
                      <IonLabel>Unique Name:</IonLabel>
                      <IonLabel id="unique-name">Fred</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel >What cheesecake recipe is this?</IonLabel>
                      <IonSelect>
                        <IonSelectOption value="apple_cider">Apple Cider</IonSelectOption>
                        <IonSelectOption value="brown_sugar">Brown Sugar</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <Entry label="Oven Temperature (F):"/>
                    <Entry label="Crust Cooking Duration (minutes):"/>
                    <Entry label="Cake Cooking Duration (minutes):"/>
                    <Entry label="Number of Cakes in the Oven While Cooking:"/>
                    <Entry label="Cooling Duration outside fridge (minutes):"/>
                    <Entry label="Cooling Duration inside fridge (minutes):"/>
                    <IonItem>
                      <IonLabel >Was the cheesecake left in the oven while cooling?</IonLabel>
                      <IonSelect>
                        <IonSelectOption value="yes">Yes</IonSelectOption>
                        <IonSelectOption value="no">No</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonItemGroup>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol offset-lg="8" offset-xs="9">
                  <IonButton >Submit</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <Footer />
          </IonContent>
	</IonPage>
    );
};

export default NewCake;
