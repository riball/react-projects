import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function Starrating({noOfStars = 5}){
    

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentId){
        setRating(getCurrentId)

    }
    function handleMouseEnter(getCurrentId){
        setHover(getCurrentId)

    }
    function handleMouseLeave(){
        setHover(rating)

    }

    
    return <div className='starRatin'>
        {
        
        [...Array(noOfStars)].map((_,index) =>{
            index += 1;
            return <FaStar
            key = {index}
            className = {index<=(hover||rating) ? 'active' : 'passive'}
            onClick={() => handleClick(index)}
            onMouseEnter = {()=> handleMouseEnter(index)}
            onMouseLeave = {()=>handleMouseLeave}
            size = {100}
            />

        }
    )
    }



    </div>
}