import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonPage } from '@ionic/react';
import NavUser from '../../components/user/navUser';


const Reports= () => {
  return (

    <IonPage style={{maxHeight:'100%'}}>
        <NavUser />
        <h1>Reports</h1>

    </IonPage>
  );
};

export default Reports;
