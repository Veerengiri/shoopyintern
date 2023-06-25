import React, { useState } from 'react'
import '../css/Activity.css';
function Activity() {
    let alltra = [
        {
            name:'Name.com Inc.',
            date:'jun 22',
            amount: '-$9.89',
            type:'automatic payment',
            status:'completed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 21',
            amount: '-$10.8',
            type:'manualy payment',
            status:'completed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 20',
            amount: '-$1.2',
            type:'automatic payment',
            status:'failed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 19',
            amount: '-$7.9',
            type:'manualy payment',
            status:'failed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 18',
            amount: '-$8.9',
            type:'manualy payment',
            status:'completed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 18',
            amount: '-$8.9',
            type:'automatic payment',
            status:'failed',
        },
        {
            name:'Name.com Inc.',
            date:'jun 18',
            amount: '-$8.9',
            type:'manualy payment',
            status:'completed',
        },
        
        
    ]
    const [Transactions,setTransactions]=useState(alltra);
    const [filter,setFilter]=useState(0);
    const [title,setTitle]=useState("");
    const applyfilter = (n)=>{
        if(n==0){
            setFilter(1);
            const newtra = alltra.filter((t)=>{
                return t.type=="manualy payment";
            })
            setTransactions(newtra);
            setTitle("manualy payment");
        }else if(n==1){
            setFilter(1);
            const newtra = alltra.filter((t)=>{
                return t.type=="automatic payment";
            })
            setTransactions(newtra);
            setTitle("automatic payment");
        }else if(n==2){
            setFilter(2);
            const newtra = alltra.filter((t)=>{
                return t.status=="completed";
            })
            setTransactions(newtra);
            setTitle("completed");
        }else if(n==3){
            setFilter(2);
            const newtra = alltra.filter((t)=>{
                return t.status=="failed";
            })
            setTransactions(newtra);
            setTitle("failed");
        }else if(n==-1){
            setFilter(0);
            setTransactions(alltra);
            setTitle("");
        }
    }
  return (
    <div className='activity'>
        <div className='activitymain'>
            <div className='search'>
                <div className='psearch'>
                    <img className='searchLogo' src="https://cdn-icons-png.flaticon.com/128/49/49116.png" />
                    <input placeholder='Search by name or email'  className='searchinput' type="search" />
                </div>
                <div className='download'>
                    <img className='searchLogo'  src="https://cdn-icons-png.flaticon.com/128/724/724933.png"/>
                </div>
            </div>
            <p style={{fontWeight:'500'}}>Filter by</p>
            <div className='filter' >
                <p className={filter==0?"hover":""} onClick={()=>{applyfilter(-1)}}>Date: Last 90 days</p>
                <p id='types' className={filter==1?"hover":""}>Type</p>
                <div id='t1' className={`typeOption`}>
                    <span onClick={()=>{applyfilter(0)}}>manualy payment</span>
                    <span onClick={()=>{applyfilter(1)}}>automatic payment</span>
                </div>
                <p id='status'  className={filter==2?"hover":""}>Status</p>
                <div id='t2' className='typeOption'>
                    <span onClick={()=>{applyfilter(2)}}>Completed</span>
                    <span onClick={()=>{applyfilter(3)}}>failed</span>
                </div>
            </div>
            { title!="" &&<p style={{fontWeight:'bold'}}>{title}</p>}
            <p>This week</p>
            {Transactions.map((t)=>{
                return <div className='pTra'>
                    <div className='pimg'>
                        <div className='profileLogo'>
                            <span style={{fontWeight:'bold'}}>Name</span><span style={{color:'brown'}}>.com</span>
                        </div>
                        <div>
                            <p className='pname'>{t.name}</p>
                            <p className='pdate'>{t.date} {t.type}</p>
                        </div>
                    </div>
                    <p>{t.amount}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Activity