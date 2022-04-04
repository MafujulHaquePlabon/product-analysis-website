import React from 'react';
import useReviewItems from '../../hooks/useReviewItems';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviewItems,setReviewItems]=useReviewItems();
    return (
        <div>
           {
            reviewItems.map(reviewItem=><ReviewItem 
            key={reviewItem.id}
            reviewItem={reviewItem}
            ></ReviewItem>)   
           }
        </div>
    );
};

export default Reviews;