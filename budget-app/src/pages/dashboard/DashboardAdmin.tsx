import React, { useState }  from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFooter } from '@ionic/react';
import { IonButton, IonIcon, IonInput, IonItem, IonList  } from '@ionic/react';
import { eye, lockClosed,person,mail, clipboardOutline, clipboardSharp, cashSharp, cardSharp } from 'ionicons/icons';
import  IonInputPasswordToggle  from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NavAdmin from "../../components/admin/navbar/navAdmin"
import SideAdmin from "../../components/admin/sidebar/SideAdmin";
import {  IonButtons, IonMenuButton } from "@ionic/react";
import {  IonGrid, IonRow, IonCol } from "@ionic/react";
import { Pie, Bar } from "react-chartjs-2"; // Assurez-vous d'avoir installé react-chartjs-2
import "chart.js/auto"; // Nécessaire pour chart.js
import "./DashboardAdmin.css";
import '../../App.css'
import { home, people, settings } from "ionicons/icons";

const DashboardAdmin=() =>{
     // Données pour le graphique des transactions par mois
     const transactionsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Transactions",
                data: [400, 600, 700, 800, 500, 1000, 900, 1200, 1400, 1300, 1500, 1100], // Exemple de données
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            }
        ]
    };

    const categoriesData = {
        labels: ["Food", "Transport", "Leisure", "Health", "Education"],
        datasets: [
            {
                data: [30, 20, 25, 15, 10], // Pourcentage ou montant en fonction des catégories
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
            }
        ]
    };

    return(
        <IonPage className="app">
            <NavAdmin />
            
        <div className="dashboard-container"  >
           <SideAdmin/>

            <div className="dashboard-content" >
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonCard className="card-widget-container" >
                                <IonCardContent className="card-widget-content" >
                                <IonIcon id="users" className="card-widget-icon" slot="start" icon={people} />
                                <div>
                                <h2>Total Users</h2>
                                <p>50 Users</p> 
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                            <IonCard className="card-widget-container">
                                <IonCardContent className="card-widget-content" >
                                <IonIcon id="categories"  className="card-widget-icon" slot="start" icon={clipboardSharp} />
                                <div>
                                <h2>Total Categories</h2>
                                <p>50 categories</p> 
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="4">
                            <IonCard className="card-widget-container">
                                <IonCardContent className="card-widget-content">
                                <IonIcon id="transactions" className="card-widget-icon" slot="start" icon={cardSharp}  />
                                <div>
                                <h2>Total Transactions</h2>
                                <p>50 transactions</p> 
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="6">
                            <IonCard >
                                <IonCardContent>
                                    <h3>Transactions by Month</h3>
                                    <Bar data={transactionsData} />
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol  size="5" >
                            <IonCard >
                                <IonCardContent>
                                    <h3>Categories with the Highest Budgets</h3>
                                    <Pie data={categoriesData} />
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                    </IonRow>

                    
                </IonGrid>

            </div>
        </div>
        


    </IonPage>

    )
}

export default DashboardAdmin;



{/*
            
    */}
