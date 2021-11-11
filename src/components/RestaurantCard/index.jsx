import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';
import {Restaurant, RestaurantInfo, RestaurantPhoto, Title, Addres} from './styles';
import Skeleton from '../Skeleton'

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#ffd700"/>
                <Addres>{restaurant.vicinity || restaurant.formatted_address }</Addres>
            </RestaurantInfo>
            <RestaurantPhoto 
            imageLoaded={imageLoaded}
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
            onLoad={() => setImageLoaded(true)}
            alt={restaurant.name} 
            />
            {!imageLoaded && <Skeleton width='100px' height='100px'/>}
        </Restaurant>
    )
}

export default RestaurantCard