// eslint-disable-next-line
import { IonItem,IonChip,IonLabel,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonAvatar,IonCardTitle,IonCardContent,IonItemGroup } from '@ionic/react';
import React,{useState,useEffect} from 'react';

interface Tag{
    label: String;
}
interface Props{
    name: String;
    image_url: String;
    bio: String;
    tags: Array<Tag>;
};
const getPerson = (props: Props)=>{
    var tags=props.tags.map((name,i)=>(
        <IonChip key={i}>
          <IonLabel>{name.label}</IonLabel>
        </IonChip>
    ));
    return (
        <IonCol offset-lg="3" size-lg={"6"} size-xs={"12"}>
          <IonCard>
            <IonCardHeader class="ion-text-center">
              <IonAvatar class="image-center">
                <img alt={`${props.name}`} src={`/img/${props.image_url}`}/>
              </IonAvatar>
              <IonCardTitle>
                {props.name}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{props.bio}</p>
              <IonItemGroup class="ion-text-center">
                {tags}
              </IonItemGroup>
            </IonCardContent>
          </IonCard>
        </IonCol>
    );
}


const Profile = () => {
    var empty_profile={
        name: "bitch",
        image_url: "arst",
        bio: "desc",
        tags: [
            {
                label: "armor",
            },
        ],
    };
    const [profile,setProfile] = useState(getPerson(empty_profile));
    useEffect(()=>{
        fetch('https://z.nitza.space/people/?format=json')
            .then(response=>response.json())
            .then(response=>{
                setProfile(getPerson(response[0]));
            });
    });
    
    return (
        <IonGrid>
          <IonRow>
            {profile}
          </IonRow>
        </IonGrid>
    );
};

export default Profile;
