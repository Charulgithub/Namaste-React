import { CDN_URL } from "../utils/constants";

// const RestaurentCard = ({resName, cuisine, rating, deliveryTime}) => {   //...this is destructuring done by js
// const {resName, cuisine, rating, deliveryTime} = props;
   // console.log(props); --->return san object
//            <h3>{resName}</h3>
//            <h4> {cuisine} </h4>
//            <h4> {rating} </h4>
//            <h4> {deliveryTime} </h4>
const RestaurantCard = (props) => {
    const {resData} = props;
   
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime,
        sla // Access sla to get deliveryTime 
        //<h4> {sla.deliveryTime} minutes </h4>
    } = resData?.info;

    return (
        <div className="res-card">
           <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId } 
           />
          <h3> {name} </h3>
          <h4> {cuisines.join(", ")} </h4>
          <h4> {avgRating} stars </h4>
          
        </div>
    )
}

export default RestaurantCard;