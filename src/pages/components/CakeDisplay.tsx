// eslint-disable-next-line
import { IonItemGroup,IonLabel,IonGrid,IonRow,IonCol,IonCardHeader,IonCardContent,IonCardTitle,IonCard} from '@ionic/react';
import React,{useState,useEffect} from 'react';

interface CakeProps{
    title: String;
    description: String;
    image_url: String;
};
const Cake = (props: CakeProps)=>{
    return (<IonCard>
              <img alt="cheesecake" src={`/img/${props.image_url}`} />
              <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{props.description}</IonCardContent>
            </IonCard>);
 };

const getDisplay = (cake: CakeProps, i: number)=>{
    return (<IonCol key={i} size-xs={"12"} size-lg={"6"}>
            <Cake title={cake.title} image_url={cake.image_url} description={cake.description} />
    </IonCol>);
};


const CakeDisplay: React.FC = () => {
    var cakes=[{
        image_url: 'cheesecake5.jpg',
        title: 'cheesecake',
        description: 'You can eat'
    },];
    const [display, setDisplay] = useState(cakes.map((cake,i)=>getDisplay(cake,i)));
    useEffect(()=>{
        fetch('https://z.nitza.space/cakes/?format=json')
            .then(response=>response.json())
            .then(response=>{
                setDisplay(response.map((cake: any,i: number)=>getDisplay(cake,i)));
            });
    },[]);
    return (
        <IonItemGroup>
          <div id="cakes"><IonLabel color="dark" class="ion-margin ion-padding-top big-text ion-text-center">Cheesecakes</IonLabel></div>
          <IonGrid>
            <IonRow>
              {display}
            </IonRow>
          </IonGrid>
        </IonItemGroup>
    );
};

export default CakeDisplay;
