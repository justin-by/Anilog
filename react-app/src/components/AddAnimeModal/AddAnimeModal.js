import { useState } from "react";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import * as animeListActions from "../../store/listanime";
import * as animeStatusActions from "../../store/animestatus";

import './AddAnimeModal.css'

const AddAnimeModal = ({ showModal, setShowModal, animeId }) => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("WATCHING");
  const [rating, setRating] = useState('');
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
    const data = await dispatch(animeListActions.addNewAnime({
        'status': status,
        'rating': (rating === '' ? 0 : rating)
    }, animeId, status));
    dispatch(animeStatusActions.updateAnimeStatus(animeId, status, {status}))
    if (data) {
      setErrors(data.errors);
    } else {
      setShowModal(false);
    }
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const updateRating = (e) => {
    setRating(Number(e.target.value));
  };


  return (
    <form id="add-anime-form" className='general-form' onSubmit={onSubmit}>
      {errors && errors.length > 0 ? (
        <div className='anime-errors-div'>
          <span className='anime-error'>Oops!</span>
          {errors.map((error, ind) => (
            <span key={ind} className='review-error'>{error}</span>
          ))}
        </div>
      ) : null}
      <div id="add-anime-content-div">
        <div>
          <label>Status</label>
        </div>
        <select
          name="status"
          type="text"
          placeholder="Status"
          value={status}
          onChange={updateStatus}
          >
            <option value='WATCHED' onClick={(e) => updateStatus(e)}>Complete</option>
            <option value='WATCHING' onClick={(e) => updateStatus(e)}>Watching</option>
            <option value='PLANNING' onClick={(e) => updateStatus(e)}>Planning</option>
        </select>
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
        <span onClick={(e) => onSubmit(e)}>Add to List</span>
      </div>
    </form>
  );
}

export default AddAnimeModal