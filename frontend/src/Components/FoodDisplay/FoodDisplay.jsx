
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    //using the context api we will get the food list array so that we can get all info about food item
    const { food_list } = useContext(StoreContext);
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    // Make sure to return the FoodItem component for each iteration
                if(category==='All'|| category===item.category){
                   return <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                />
                }

                   
               } )}
            </div>
        </div>
    )
}

export default FoodDisplay

