import './ReviewsContent.css'
import { useDispatch, useSelector } from "react-redux";

const ReviewsContent = () => {
    const reviews = useSelector( (state) => Object.values(state.reviewsReducer.animeReviews))

    return (
        <>
            <div className='reviews-content'>
                <div className='reviews-container'>
                    {reviews.map((review) => (
                        <div className='anime-review'>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReviewsContent;