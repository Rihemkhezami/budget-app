import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import DashboardAdmin from './pages/dashboard/DashboardAdmin';
import UsersManagement from './pages/users-management/UsersManagement';
import BudgetCategories from './pages/budget-categories/BudgetCategories';
import Home from './pages/home/Home';
import CategoriesExpenses from './pages/categories-expenses/CategoriesExpenses';
import Reports from './pages/reports/Reports';
import './App.css'


setupIonicReact();

const App: React.FC = () => (
  <IonApp className='app' >
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardAdmin />
        </Route>
        <Route exact path="/users-management">
          <UsersManagement />
        </Route>
        <Route exact path="/budget-categories">
          <BudgetCategories />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/categories-expenses">
          <CategoriesExpenses />
        </Route>
        <Route exact path="/reports">
          <Reports />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
