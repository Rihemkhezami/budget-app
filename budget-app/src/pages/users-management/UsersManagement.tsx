import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonPage, IonButton, IonIcon } from '@ionic/react';
import NavAdmin from '../../components/admin/navbar/navAdmin';
import SideAdmin from '../../components/admin/sidebar/SideAdmin';
import "./UsersManagement.css"
import { pencil, trash } from 'ionicons/icons';


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

const UsersManagement= () => {
  return (

    <IonPage className='page-container' >
        <NavAdmin />

    <div className="users-container"  >
       <SideAdmin/>

        <div className="users-content" >
            <h1  >Users List</h1>
    <IonCard>
      <IonCardContent>
        <IonGrid>
          <IonRow style={{color:'black'}}>
            <IonCol><strong>First Name</strong></IonCol>
            <IonCol><strong>Last Name</strong></IonCol>
            <IonCol><strong>Phone</strong></IonCol>
            <IonCol><strong>Email</strong></IonCol>
            <IonCol><strong>Actions</strong></IonCol>
          </IonRow>
          {users.map((user, index) => (
            <IonRow key={index}>
              <IonCol>{user.firstName}</IonCol>
              <IonCol>{user.lastName}</IonCol>
              <IonCol>{user.phone}</IonCol>
              <IonCol>{user.email}</IonCol>
              <IonCol>
                <IonButton><IonIcon icon={pencil} />
                </IonButton><IonButton><IonIcon icon={trash} /></IonButton></IonCol>

            </IonRow>
          ))}
        </IonGrid>
      </IonCardContent>
    </IonCard>
    </div>
    </div>
    </IonPage>
  );
};

export default UsersManagement;
