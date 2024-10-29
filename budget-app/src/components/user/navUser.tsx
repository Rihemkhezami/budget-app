import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink } from '@ionic/react';
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import { eye, lockClosed, person, mail, logOutOutline } from 'ionicons/icons';
import IonInputPasswordToggle from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { IonBackButton, IonButtons } from '@ionic/react';
import { useHistory } from "react-router";

const NavUser = () => {

  


    return (
        <IonPage style={{padding:'20px'}}>
        <IonHeader >
            <IonToolbar>
            <IonButtons slot="start">
                <img alt="logo" src="/assets/logo.png" width="70px" style={{ padding: '5px' }}  />
            </IonButtons>

            <div style={{ flex: 1, display: 'flex',justifyContent:'space-around' }}>
                <IonSearchbar placeholder="Search..." style={{ width: '50%' }} />
                <div style={{display:'flex', color:'black'}}>
                <IonButtons >
                    <IonButton routerLink="/home"   routerDirection="root" >Home</IonButton>
                 </IonButtons>
                <IonButtons >
                    <IonButton routerLink="/categories-expenses"   routerDirection="root" >Categories Expenses</IonButton>
                </IonButtons>

                <IonButtons >
                    <IonButton routerLink="/reports"   routerDirection="root"  >Reports</IonButton>
                </IonButtons>
                </div>
                
            </div>

            

            <IonButtons slot="end" style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
                <IonIcon icon={personCircle} style={{ width: "60px", fontSize: "xxx-large", marginRight: '10px' }} />
                <IonIcon icon={logOutOutline} style={{ width: "60px", fontSize: "xxx-large" }} />
            </IonButtons>
            </IonToolbar>
        </IonHeader>
        </IonPage>
    );
}

export default NavUser;
