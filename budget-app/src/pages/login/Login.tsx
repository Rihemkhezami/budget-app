import React, { useState }  from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton, IonIcon, IonInput, IonItem, IonList  } from '@ionic/react';
import { eye, lockClosed,person,mail } from 'ionicons/icons';
import  IonInputPasswordToggle  from '@ionic/react';
import './login.css'

const LoginPage=() =>{

    return(
        <div className="login-page" >
      <IonCard className="login-card"   >
             <img className="login-logo" alt="logo" src="/assets/logo.png" width="150px" />
             <h1 > Welcome Back!</h1>

        <div>
        <IonList>
      <IonItem >
        <IonInput
        className="login-input" 
        labelPlacement="stacked" 
         label="Email" 
       
         >
          <IonIcon className="login-icon" slot="start"
           icon={mail} aria-hidden="true" ></IonIcon>
         
        </IonInput>
        </IonItem>

        <IonItem>

        <IonInput 
        className="login-input" 
        labelPlacement="stacked" 
         label="Password" 
       type="password"
         >
          <IonIcon className="login-icon" slot="start" icon={lockClosed}
           aria-hidden="true"
            ></IonIcon>
         
        </IonInput>
        </IonItem>

        <IonButton className="login-button" shape="round" >
            Sign In
        </IonButton>

        <p>Forget your password ? <a href="#" >Click Here</a></p>
        <p>Don&apos;t have an account ? <a href="/register" >Register</a></p>

    </IonList>
        </div>


      </IonCard>

      </div>
       

    )
}

export default LoginPage;
