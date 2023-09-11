import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'



const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([]);

      useEffect(()=>{
            fetch('Bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
      },[])
   
      const handleAddTocart = bottle =>{
          const newCart = [...cart,bottle]
          setCart(newCart)
      }


    return (
        <div>
            <h2>Bottles Availale :{bottles.length}</h2>
            <h3>Cart : {cart.length}</h3>
             <div className="bottles-container">
             {
                 bottles.map(bottle => <Bottle 
                 bottle ={bottle} key={bottle.name}
                 handleAddTocart ={handleAddTocart}
                 >


                 </Bottle>)
             }
             </div>

        </div>
    );
};

export default Bottles;