import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonInput,
  IonButton,
  InputChangeEventDetail,
  IonThumbnail,
  IonIcon,
} from '@ionic/react';
import NavUser from '../../components/user/navUser';
import { cashOutline, clipboardSharp, heartCircleOutline, helpCircleOutline, helpCircleSharp, readerOutline, removeCircleOutline, sendOutline, walletOutline, warningOutline } from 'ionicons/icons';
import "./home.css"

interface ExpenseSummary {
  [key: string]: number; 
}

interface Expense {
  category: string;
  amount: number;
}



const Home = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenseSummary, setExpenseSummary] = useState<ExpenseSummary>({}); // Initialisation avec un type
  const [graphData, setGraphData] = useState([]);

  const expenses = [
    { category: 'Food', amount: 100 },
    { category: 'Transport', amount: 50 },
    { category: 'Entertainment', amount: 75 },
  ];

  const calculateExpenses = () => {
    let total = 0;
    const summary: ExpenseSummary = {};

    expenses.forEach(expense => {
      total += expense.amount;
      summary[expense.category] = (summary[expense.category] || 0) + expense.amount;
    });

    setTotalExpenses(total);
    setExpenseSummary(summary);
  };

  useEffect(() => {
    calculateExpenses();
  }, []);

  useEffect(() => {
    const data = Object.keys(expenseSummary).map(cat => ({
      category: cat,
      amount: expenseSummary[cat],
    }));
  }, [expenseSummary]);


  
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState('');

  const handleBudgetChange = (e: CustomEvent<InputChangeEventDetail>) => {
    setBudgetInput(e.detail.value!);
  };

  const handleAddBudget = () => {
    const budget = parseFloat(budgetInput);
    if (!isNaN(budget) && budget > 0) {
      setTotalBudget(budget);
      setBudgetInput('');
    } else {
      alert('Please enter a valid budget amount.');
    }
  };


  
  return (
    <IonPage className='home-page'>
      <NavUser/>

      <IonGrid className='home-container' >
      <h1 >Welcome to Your Budget Tracker</h1>

      <IonRow>
        <IonCol size="4" >
        <IonCard className='card-add-budget'  >
          <h1>Add Your Total Budget</h1>
          <IonItem>
          <IonLabel position="floating">Total Budget</IonLabel>
          <IonInput
            type="number"
            value={budgetInput}
            onIonChange={handleBudgetChange}
          />
        </IonItem>
          <IonButton className='button-add-budget' onClick={handleAddBudget}>Set Budget</IonButton>
        </IonCard>
        </IonCol>
  

          <IonCol size='3' offset="1" >
            <IonCard className='card-overview'  >
              <div  className='card-overview-title'>
              <IonIcon className='icon-overview' slot="start" icon={readerOutline} />
                <IonCardTitle>Overview</IonCardTitle>
              </div>
              <IonCardContent className='card-overview-content' >

              <div >
              <IonIcon className='icon-item' slot="start" icon={cashOutline} />
              <h2>Total Budget : {totalBudget} $</h2>
              </div>

              <div >
              <IonIcon className='icon-item' slot="start" icon={walletOutline}  />
              <h2>Total Expenses : 0 $</h2>
              </div>

              <div >
              <IonIcon className='icon-item' slot="start" icon={removeCircleOutline} />
              <h2>Remaining Budget : {totalBudget} $</h2>
              </div>
              
               

              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol offset="1" >
            <div className='card-financial-insights'>
                <h2> <IonIcon color='warning' className='icon-title'  slot="start" icon={heartCircleOutline}/>
                Financial Insights<IonIcon  className='icon-title' slot="start" icon={heartCircleOutline} color='warning' /></h2>
                <p> <IonIcon className='icon-subtitle' slot="start" icon={sendOutline}/>  Consider saving more on entertainment this month!</p>
                <p> <IonIcon className='icon-subtitle'  slot="start" icon={sendOutline}/>  Budget limit reached for Food category!</p>

            </div>
          
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
          </IonCol>
        </IonRow>

        <IonRow >
          <IonCol  size='5' >
            <IonCard className='card-usage-tips' >
            <div className='card-usage-tips-title'  >
              <IonIcon  slot="start" icon={warningOutline} className='icon-usage-tips'  />
                <IonCardTitle className='title-usage-tips' >Usage Tips</IonCardTitle>
              </div>
              <IonCardContent>
                <p>1. Craft a Budget and Stick to It.</p>
                <p>2. Keep a Close Eye on Your Daily Spending.</p>
                <p>3. Steer Clear of Impulse Purchases.</p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default Home;
