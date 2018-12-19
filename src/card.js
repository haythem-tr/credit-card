import React from 'react';
import './card.css';
import visa from './img/cc.PNG'
import puce from './img/gr.PNG'; 

const Card  = () =>{
   return( 
      <div  className="credit-card">
      <div>
      <h1 className="titel" >credit card</h1>
   <img className="puce" src ={puce}/>
   </div>
   <span className="number"> 7253 3256 7895 1245  </span>

   <div >
     
  <div className="second">
  <div className="cardholder">
  <span className="hold"> 5222</span>
  <span className="hold">CARDHOLDER</span>
  </div>
 <div className="bloc-date">
   <div className="valid">
  <div className="thru">
    <span className="month">VALID</span>
    <span className="month">THRU </span>
    </div>
  <div className="date">
   <span className="month">MONTH/YEAR</span>
   <span className="year" >11/50</span>
   </div>
   </div>
   </div>

   <img className="visa" src={visa}/>


   </div>
   </div>

     </div>
   )
}

















export default Card





