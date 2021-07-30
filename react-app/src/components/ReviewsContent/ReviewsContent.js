import './ReviewsContent.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import * as reviewActions from "../../store/reviews";
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import AddReviewModal from '../AddReviewModal/AddReviewModal';

const ReviewsContent = () => {
    const stateReviews = useSelector( (state) => state.reviewsReducer["reviews"])
    const sessionUser = useSelector((state) => state.session.user);

    const dispatch = useDispatch();
    const {animeId } = useParams();

    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(reviewActions.getAnimeReviews(animeId))
    }, [dispatch])

    useEffect(() => {
        setReviews(stateReviews);
    }, [stateReviews])

    const onClose = () => {
        setShowModal(false);
      };
    

    return (
        <>
            <div className='reviews-content'>
                <div className='reviews-container'>
                    <div className='anime-review' >
                        <a className='anime-review-content' onClick={(e) => (
                            <Modal onClose={onClose}>
                                <AddReviewModal setShowModal={setShowModal}/>
                            </Modal>
                        )}>Press to create a review!</a>
                    </div>
                    {reviews?.map((review) => (
                        <div className='anime-review'>
                            <a className='anime-review-content'>{review.content}</a>
                            <div className='review-extra'>
                                <a className='anime-review-rating'>{review.rating}/10</a>
                                {sessionUser && review.userId === sessionUser.id && (
                                    <>
                                        <i className="fas fa-pencil-alt" onClick={(e) => dispatch(reviewActions.deleteAnimeReview(review.id, animeId))}></i>
                                        <i className="far fa-trash-alt"></i>
                                    </>
                                )} 
   
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReviewsContent;