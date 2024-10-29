import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonPage, IonIcon, IonInput, IonButton, IonLabel, IonItem } from '@ionic/react';
import "./categoriesExpenses.css";
import { briefcaseOutline, carOutline, fastFoodOutline, fitnessOutline, homeOutline, restaurantOutline } from 'ionicons/icons';
import NavUser from '../../components/user/navUser';



interface Expense {
  amount: number;
  date: string;
}

interface Category {
  name: string;
  expenses: Expense[];
}

const CategoriesExpenses = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: 'food',
      expenses: [] 
    }
  ]);  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number | ''>(''); 

  const handleAddCategory = () => {
    if (category) {
      const newCategory: Category = {
        name: category,
        expenses: []
      };
      setCategories([...categories, newCategory]); 
      setCategory(''); 
    }
  };

  const handleAddExpense = (categoryName: string) => {
    if (amount !== '') {
      const newExpense: Expense = {
        amount: Number(amount), 
        date: new Date().toLocaleDateString()
      };
      setCategories(categories.map(cat => {
        if (cat.name === categoryName) {
          return { ...cat, expenses: [...cat.expenses, newExpense] };
        }
        return cat;
      }));
      setAmount('');
    }
  };

  const iconMapping: { [key: string]: any } = {
    food: restaurantOutline,
    transport: carOutline,
    leisure: fastFoodOutline,
    health: fitnessOutline,
    education: briefcaseOutline,
    home: homeOutline,
  };

  return (
    <IonPage  >
      <NavUser />


      <div className='add-category-content'  >
      <IonCard className='card-add-category'>
          <h1>Add new Category</h1>
          <IonItem>
              <IonLabel position="floating">Category</IonLabel>
              <IonInput value={category} onIonChange={e => setCategory(e.detail.value!)} />
          </IonItem>
          <IonButton style={{marginTop:'25px'}} onClick={handleAddCategory}>Add Category</IonButton>
        </IonCard>
      </div>
        
          

          <IonGrid>
              <IonRow >
              {categories.map(cat => (

                <IonCol key={cat.name} size="4">
                  <IonCard className='card-category-item' >
                    <IonCardContent className='category-item-content'>
                      <IonIcon className='category-item-icon' slot="start" icon={iconMapping[cat.name]}   />
                      <div >
                        <h1>{cat.name}</h1>
                        {cat.expenses.map((expense, index) => (
                          <div key={index}>
                            <p>{expense.amount}$ - {expense.date}</p>
                          </div>
                        ))}
                        <IonItem>
                          <IonLabel position="floating">Amount</IonLabel>
                          <IonInput type="number" value={amount} onIonChange={e => setAmount(e.detail.value !== '' ? Number(e.detail.value) : '')} />
                        </IonItem>
                        <IonButton className='button-add-expense' onClick={() => handleAddExpense(cat.name)}>Add Expense</IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                   ))}


              </IonRow>
         
          </IonGrid>

    </IonPage>
  );
};

export default CategoriesExpenses;
