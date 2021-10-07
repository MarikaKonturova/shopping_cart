import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

export const Rating = ({rating, onClick=()=>{}, style}: RatingType)=>{
    return <>
        {[...Array(5)].map((_,i)=>(
            <span key={i} onClick={()=>onClick(i)}style={style}>
                {rating>i?(
                    <AiFillStar fontSize={'15px'}/>
                ): (
                    <AiOutlineStar fontSize={'15px'}/>
                )}
            </span>
        ))}

    </>
}
type RatingType = {
    rating: number
    onClick?: (rate: number)=>void
    style?: {[key:string]: string}
}
