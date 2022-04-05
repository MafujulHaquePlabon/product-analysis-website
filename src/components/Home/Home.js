import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useReviewItems from '../../hooks/useReviewItems';
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [reviewItems,setReviewItems]=useReviewItems();
    const img='https://imgs.search.brave.com/zZo4KacY5-he9v-FdxRo8ECfzpC5aWAcyOJjYm0qut0/rs:fit:772:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/Zmc3ZXU3RDlxVUUy/LW9jZDFRMmRRSGFF/aiZwaWQ9QXBp'
    const navigate=useNavigate();
    const seeAllReviews=()=>{
      navigate('/reviews');
    }
    
    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-40 my-20'>
            <div className='mb-5' >
            <h1 className='text-5xl font-bold'>Your Next Laptop</h1>
            <h1 className='text-green-600 text-5xl font-bold'>Your best Laptop</h1>
            <p className='pt-6 pb-10'>HP is one of the biggest Laptop brands in the world. Owned by Hewlett-Packard which is now called HP Inc. HP is known for its premium quality laptop and Notebook PCs. HP was founded in 1939 in Palo Alto, California as a small electronic measurement and test equipment manufacturer. The garage is now a digital museum with a plaque calling it the birthplace of Silicon Valley.</p>
           <button className='bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded' type="submit">Live Demo</button>
            </div>
            <div className=' mx-8 ' >
                <img className='w-screen' src={img} alt="" />
            </div>
            </div>

            <div>
            <h1 className='text-4xl font-semibold'>Customer Reviews({reviewItems.length})</h1>
                {
                   reviewItems.slice(0,3).map(reviewItem =><ReviewItem key={reviewItem.id} reviewItem={reviewItem} ></ReviewItem> ) 
                }
                 <button onClick={seeAllReviews} className='bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded mb-20' type="submit">See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;