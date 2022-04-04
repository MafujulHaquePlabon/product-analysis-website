import React from 'react';
import { StarIcon, UserIcon } from '@heroicons/react/solid'
import "./ReviewItem.css"


const ReviewItem = ({reviewItem}) => {
    console.log(reviewItem)
    return (
       
        <div className=' Shadow mx-8 my-6  '>
        <UserIcon className=' w-8 h-10 mr-auto '></UserIcon>
      <div >
      <h3 className='text-xl font-semibold'>Name: <span className='text-2xl text-yellow-600 '> {reviewItem.name}</span> </h3>
      <p>Review by: {reviewItem.comment}</p>
      <div className='flex justify-center align-middle '>
      <p className='flex justify-center alignCenter '>Rating: {reviewItem.rating} <StarIcon class="h-5 w-5 text-yellow-500"></StarIcon>
      </p>
      </div>
      </div>
     
   </div>
        
    );
};

export default ReviewItem;