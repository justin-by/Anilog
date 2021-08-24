import './ReviewsContent.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import * as reviewActions from "../../store/reviews";
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import AddReviewModal from '../AddReviewModal/AddReviewModal';
import UpdateReviewModal from '../UpdateReviewModal/UpdateReviewModal';

const ReviewsContent = () => {
    const stateReviews = useSelector((state) => state.reviewsReducer["reviews"])
    const sessionUser = useSelector((state) => state.session.user);

    const dispatch = useDispatch();
    const { animeId } = useParams();

    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [typeForm, setTypeForm] = useState("create")
    const [reviewId, setReviewId] = useState()
    const [reviewInfo, setReviewInfo] = useState(null);

    useEffect(() => {
        dispatch(reviewActions.getAnimeReviews(animeId))
    }, [dispatch, animeId])

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

                    {sessionUser && (
                        <div className='anime-review' >
                            <span className='anime-review-content-click' onClick={(e) => {
                                setShowModal(true)
                                setTypeForm('create')
                            }}>Press to create a review!</span>
                        </div>
                    )}

                    {reviews?.map((review) => (
                        <div className='anime-review' >
                            <span className='anime-review-username'>{review.username}:</span>
                            <span className='anime-review-content'>{review.content}</span>
                            <div className='review-extra'>
                                <span className='anime-review-rating'>{review.rating}/10</span>
                                {sessionUser && review.userId === sessionUser.id && (
                                    <>
                                        <i className="fas fa-pencil-alt" onClick={(e) => {
                                            setTypeForm('update')
                                            setReviewId(review.id)
                                            setReviewInfo(review)
                                            setShowModal(true)
                                        }}></i>
                                        <i className="far fa-trash-alt" onClick={(e) => dispatch(reviewActions.deleteAnimeReview(review.id, animeId))}></i>
                                    </>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && typeForm === 'create' &&
                <Modal onClose={onClose}>
                    <AddReviewModal animeId={animeId} showModal={showModal} setShowModal={setShowModal} />
                </Modal>
            }
            {showModal && typeForm === 'update' && reviewInfo &&
                <Modal onClose={onClose}>
                    <UpdateReviewModal animeId={animeId} reviewId={reviewId} reviewInfo={reviewInfo} showModal={showModal} setShowModal={setShowModal} />
                </Modal>
            }
        </>
    )
}

export default ReviewsContent;