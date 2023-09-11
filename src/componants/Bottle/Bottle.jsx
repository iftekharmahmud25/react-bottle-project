import './Bottle.css'

const Bottle = ({bottle,handleAddTocart}) => {
    const {name,img,price} = bottle;
    return (
        <div className="bottle">
            <h4>bottle : {name}</h4>
            <img src={img} alt="" />
            <h5>price : ${price}</h5>
            <button className='button' onClick={()=>handleAddTocart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;