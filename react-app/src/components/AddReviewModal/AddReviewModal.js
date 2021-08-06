import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <form id="add-review-form" onSubmit={onSubmit}>
      {errors && errors.length > 0 ? (
        <div className='review-errors-div'>
          <a className='review-error'>Oops!</a>
          {errors.map((error, ind) => (
            <a key={ind} className='review-error'>{error}</a>
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
        <a onClick={(e) => onSubmit(e)}>Post review</a>
      </div>
    </form>
  );
}

export default AddReviewModal