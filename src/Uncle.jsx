import React from 'react';
import Cousin from './components/Cousin/Cousin';
import { useContext } from 'react';
import { MoneyContext } from './components/Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] =useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa money: {money} </small></p>
            <button onClick={()=> setMoney(money + 1000)}>sent 1000tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;