import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonInput label="Solid input" label-placement="floating" fill="solid" placeholder="Enter text"></IonInput>

<br />

        <IonInput label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text"></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
