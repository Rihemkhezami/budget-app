import React, { useState }  from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton, IonIcon, IonInput, IonItem, IonList  } from '@ionic/react';
import { eye, lockClosed,person,mail, phonePortrait, call } from 'ionicons/icons';
import  IonInputPasswordToggle  from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import "./register.css"

const RegisterPage=() =>{

    return(
        <div className="register-page">
      <IonCard className="register-container" >
             <img alt="logo" src="/assets/logo.png" width="150px"  />
             <h1  > Let Us Know You!</h1>

             <IonGrid>
        <IonRow>
          <IonCol>
          <IonItem >
          <IonInput 
          className="register-input"
        labelPlacement="stacked" 
         label="First name" 
       
         >
          <IonIcon slot="start" className="register-icon"
           icon={person} aria-hidden="true"  
             ></IonIcon>
         
        </IonInput>
        </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
          <IonInput 
           className="register-input"

        labelPlacement="stacked" 
         label="Last name" 
       
         >
          <IonIcon slot="start" className="register-icon"
           icon={person} aria-hidden="true"  
            ></IonIcon>
         
        </IonInput>
        </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
              <IonItem>
            <IonInput 
                      className="register-input"
        labelPlacement="stacked" 
         label="Phone" 
         type="tel"
         >
          <IonIcon  className="register-icon" slot="start"
           icon={call} aria-hidden="true"  
      ></IonIcon>
         
        </IonInput>
        </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
            <IonItem>
            <IonInput 
                      className="register-input"

        labelPlacement="stacked" 
         label="Email" 
       
         >
          <IonIcon  className="register-icon" slot="start"
           icon={mail} aria-hidden="true"  
           ></IonIcon>
         
        </IonInput>
        </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
        <IonItem>
        <IonInput 
                  className="register-input"

        labelPlacement="stacked" 
         label="Password" 
       type="password"
         >
          <IonIcon  className="register-icon" slot="start" icon={lockClosed}
           aria-hidden="true"
           ></IonIcon>
         
        </IonInput>
        </IonItem>
        </IonCol>
        </IonRow>
      </IonGrid>

      <IonButton className="register-button" shape="round" >
            Sign Up
        </IonButton>
        <p>Have an account ? <a href="/" >Login</a></p>

      </IonCard>

      </div>
       

    )
}

export default RegisterPage;
