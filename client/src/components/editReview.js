import '../App.css';
import '../components/singleReview.css'
import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditReview = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [crispiness, setCrispiness] = useState("");
  const [size, setSize] = useState("");
  const [comments, setComment] = useState("");
  const [errors,setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/review/${id}`)
    .then((res) => {
      setRestaurantName(res.data.restaurantName);
      setPrice(res.data.price);
      setFlavor(res.data.flavor);
      setCrispiness(res.data.crispiness);
      setSize(res.data.size);
      setComment(res.data.comment);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/review`, {
        restaurantName,
        price,
        size,
        crispiness,
        flavor,
        comments
      })
      .then((res) => {
        console.log(res.data)
        navigate("/chickentinder/dash");
      })
      .catch ((err) => {
        console.log(err);
        console.log("update handler clientside");
        setErrors(err.response.data.errors);
        console.log(errors);
      });
  };

  return(
    <div>
      <div className='reviewContainer'>
      <div className='reviewTitle'>
        <p>Edit your Tender Review</p>
      </div>
      <div className='editReview'>
        <form onSubmit={submitHandler}>
          <div className='reviewHeader'>
            <lable>Restaurant Name</lable>
            {errors.restaurantName ? <p>{errors.restaurantName.message}</p> : null}
            <input
              type='text'
              name='restaurantName'
              onChange={(e) => setRestaurantName(e.target.value)}
              value={restaurantName}
            />
            <lable>Price</lable>
            {errors.price ? <p>{errors.price.message}</p>: null}
            <input type='text'
              name='price'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id='price'
            />
          </div>
          <div className='radiobutton'>
            <lable>Crispiness</lable>
            {errors.crispiness ? <p>{errors.crispiness.message}</p>: null}
            <div className='radioButton'>
              <select
                  name="crispiness"
                  onChange={(e) => setCrispiness(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
            </div>
            </div>
            <div className='radiobutton'>
              <label>Flavor</label>
              {errors.flavor ? <p>{errors.flavor.message}</p>: null}
              <div className='radioButton' >
                <select
                    name="crispiness"
                    onChange={(e) => setCrispiness(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
              </div>
            </div>
            <div className='radiobutton' >
              <label>Size</label>
              {errors.size ? <p>{errors.size.message}</p>: null}
              <div className='radioButton'>
                <select
                    name="crispiness"
                    onChange={(e) => setCrispiness(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
              </div>
            </div>
            <div className='commentContainer'>
              <label>comments</label>
              <input type='text'
                name='comment'
                onChange={(e) => setComment(e.target.value)}
                value={comments}
              />
            </div>
            <div>
              <button type='submit'>Edit your Tender</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;