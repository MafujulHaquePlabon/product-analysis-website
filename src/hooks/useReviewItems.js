import { useEffect, useState } from "react"

const useReviewItems=()=>{
    const [reviewItems,setReviewItems]=useState([]);
    useEffect(()=>{
        fetch('reviewItems.json')
        .then(res=>res.json())
        .then(data=>setReviewItems(data))
    },[])
    return [reviewItems,setReviewItems];
}
export default useReviewItems;