import React, { useState, useEffect } from 'react';
import './style.css';
import Table from '../components/Table';
import MiniTable from '../components/MiniTable';
// import Data from '../data/data.js'



export default function Dash() {
    const [data, setData] = useState([]);
    const [topFive, setTopFive] = useState([]);
    
    useEffect(()=> {
    
        getDados();
    }, []);
    
    
    function rechargeData() {
        const sorted = data.sort((a,b) => {
            return b.point - a.point;
        })
        setTopFive(sorted);

        const alphabet = sorted.sort((a,b) => {
            return a.name.localeCompare(b.name);
        })

        setData(alphabet);
    }


    function getDados() {
        const NewArray = [];
       fetch('https://cervelandia-684b8-default-rtdb.firebaseio.com/ranking.json')
       .then(res => res.json())
       .then(res => {
           for(var key in res) {
               NewArray.push({name:key, point:res[key]})
            }
        })
        
        setData(NewArray);
        rechargeData();  
        
    }


    

  return (
    <div className="main">
        <div className="graf1">
            <div className="graf2">
                <h2>Top Five</h2>
                <MiniTable items={topFive} />
            </div>
            <div className="graf3">
                <button onClick={() => getDados()} >Recarregar</button>
                <a href="https://jogodozumbi.netlify.app" target="_blank" rel="noopener noreferrer">Jogar</a>
            </div>        
        </div>
        <div className="Classif">
            <h2>Classificação</h2>
            <Table items={data} />
        </div>
    </div>


  )
}

