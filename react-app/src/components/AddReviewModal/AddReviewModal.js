import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as reviewActions from "../../store/reviews";



const AddReviewModal = ({ showModal, setShowModal, animeId }) => {
  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (!showModal) {
        setShowModal(true);
      }
    };
  }, [showModal, setShowModal]);


  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(reviewActions.addNewReview({ content, rating }, animeId));
    if (data) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
    }
  };

  const updateContent = (e) => {
    setContent(e.target.value);
  };

  const updateRating = (e) => {
    setRating(Number(e.target.value));
  };


  return (
    <form id="add-review-form" className='general-form' onSubmit={onSubmit}>
      {errors && errors.length > 0 ? (
        <div className='review-errors-div'>
          <span className='review-error'>Oops!</span>
          {errors.map((error, ind) => (
            <span key={ind} className='review-error'>{error}</span>
          ))}
        </div>
      ) : null}
      <div id="add-review-content-div">
        <div>
          <label>Review</label>
        </div>
        <input
          name="content"
          type="text"
          placeholder="Content"
          value={content}
          onChange={updateContent}
        />
        <div>
          <label>Rating</label>
        </div>
        <input
          name="rating"
          type="text"
          placeholder="Score"
          value={rating}
          onChange={updateRating}
        />
      </div>
      <div id="post-review-div">
        <span onClick={(e) => onSubmit(e)}>Post review</span>
      </div>
    </form>
  );
}

export default AddReviewModal