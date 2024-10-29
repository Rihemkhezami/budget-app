import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import { eye, lockClosed, person, mail, logOutOutline, barChart, wallet, logOut, statsChart, grid } from 'ionicons/icons';
import IonInputPasswordToggle from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { IonBackButton, IonButtons } from '@ionic/react';
import { IonMenu, IonLabel,  } from "@ionic/react";
import { home, people, settings } from "ionicons/icons";


const SideAdmin = () => {
    return (
        <IonCard style={{width:'300px',textAlign:'center',alignItems:'center',alignContent:'center',padding:'10px',height:'550px'}} >

            <IonList>
                    <IonItem  style={{fontSize:'x-large'}} button routerLink="/dashboard"   routerDirection="root">
                        <IonIcon slot="start" icon={grid} />
                        <IonLabel>Dashboard</IonLabel>
                    </IonItem>

                    <IonItem  style={{paddingTop:'25px',fontSize:'x-large'}} button routerLink="/users-management" routerDirection="root" >
                        <IonIcon slot="start" icon={people}  />
                        <IonLabel>Users Management</IonLabel>
                    </IonItem>

                    <IonItem  style={{paddingTop:'25px',fontSize:'x-large'}} button routerLink="/budget-categories" routerDirection="root">
                        <IonIcon slot="start" icon={barChart} />
                        <IonLabel>Budget Categories</IonLabel>
                    </IonItem>

                    <IonItem  style={{paddingTop:'25px',fontSize:'x-large'}} button routerLink="/users" routerDirection="none">
                        <IonIcon slot="start" icon={wallet} />
                        <IonLabel>Transactions</IonLabel>
                    </IonItem>

                {/* Menu Settings */}
                    <IonItem  style={{paddingTop:'25px',fontSize:'x-large'}} button routerLink="/settings" routerDirection="none">
                        <IonIcon slot="start" icon={settings} />
                        <IonLabel>Settings</IonLabel>
                    </IonItem>

                    <IonItem  style={{paddingTop:'25px',fontSize:'x-large'}} button routerLink="/settings" routerDirection="none">
                        <IonIcon slot="start" icon={logOut} />
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
            </IonList>
    </IonCard>


    );
}

export default SideAdmin;
