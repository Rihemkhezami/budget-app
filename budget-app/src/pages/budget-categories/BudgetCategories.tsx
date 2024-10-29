import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonPage, IonIcon, IonButton, IonButtons } from '@ionic/react';
import NavAdmin from '../../components/admin/navbar/navAdmin';
import SideAdmin from '../../components/admin/sidebar/SideAdmin';

import "./budgetCategories.css";
import { americanFootballOutline, briefcaseOutline, car, carOutline, fastFood, fitnessOutline, homeOutline, pencil, restaurantOutline, trash } from 'ionicons/icons';

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const users: User[] = [
  { firstName: 'John', lastName: 'Doe', phone: '123456789', email: 'john.doe@example.com' },
  { firstName: 'Jane', lastName: 'Smith', phone: '987654321', email: 'jane.smith@example.com' },
  { firstName: 'Bob', lastName: 'Johnson', phone: '456123789', email: 'bob.johnson@example.com' }
];

const BudgetCategories= () => {
  return (

    <IonPage >
        <NavAdmin />

    <div className="budget-categories-container"  >
       <SideAdmin/>

        <div className="budget-categories-content" >
            <div className='add-category-section'>
            <h1  >Categories List</h1>
            <IonButton className='button-add-category'>Add Category</IonButton>
            </div>
            <IonGrid  >
                    <IonRow>
                        <IonCol size="4">
                            <IonCard  className='budget-category-item' >
                                <IonCardContent  className='category-item-content' >
                                <IonIcon className='category-item-icon' slot="start" icon={restaurantOutline}  />
                                <div>
                                <h1>Food</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                            <IonCard className='budget-category-item' >
                                <IonCardContent className='category-item-content' >
                                <IonIcon className='category-item-icon' slot="start" icon={carOutline}  />
                                <div>
                                <h1>Transport</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="4">
                            <IonCard className='budget-category-item'>
                                <IonCardContent className='category-item-content'>
                                <IonIcon className='category-item-icon' slot="start" icon={americanFootballOutline}  />
                                <div>
                                <h1>Leisure</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                            <IonCard  className='budget-category-item' >
                                <IonCardContent className='category-item-content' >
                                <IonIcon className='category-item-icon' slot="start" icon={fitnessOutline}  />
                                <div>
                                <h1>Health</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="4">
                            <IonCard  className='budget-category-item' >
                                <IonCardContent className='category-item-content' >
                                <IonIcon className='category-item-icon' slot="start" icon={briefcaseOutline}  />
                                <div>
                                <h1>Education</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="4">
                            <IonCard className='budget-category-item' >
                                <IonCardContent className='category-item-content'>
                                <IonIcon  className='category-item-icon' slot="start" icon={homeOutline}  />
                                <div>
                                <h1>Home</h1>
                                <IonButtons>
                                    <IonButton><IonIcon className='update-button' icon={pencil} /></IonButton>
                                    <IonButton><IonIcon className='delete-button' icon={trash}/></IonButton>
                                </IonButtons>
                                </div>
                               
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        </IonRow>
                        </IonGrid>

                        
                        

    </div>
    </div>
    </IonPage>
  );
};

export default BudgetCategories;
