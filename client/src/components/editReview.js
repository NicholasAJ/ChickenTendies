import '../App.css';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const EditReview = (props) => {
  const {} = useParams();
  const navigate = useNavigate();
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [crispiness, setCrispiness] = useState("");
  const [size, setSize] = useState("");
  const [comment, setComment] = useState("");
  const [errors,setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/review/$`)
    .then((res) => {
      setRestaurantName(res.data.restaurantName);
      setPrice(res.data.price);
      setFlavor(res.data.flavor);
      setCrispiness(res.data.crispiness);
      setSize(res.data.size);
      setComment(res.data.comment);
    })
    .catch((err) => {
      // setReviewNotFound('Review not found');
      console.log(err)
    })
  }, []); // [username]

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/review`, {
        restaurantName,
        price,
        size,
        crispiness,
        flavor,
        comment
      })
      .then((res) => {
        console.log(res.data)
        navigate("/");
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
      <div>
        <p>Create your Tender Review</p>
      </div>
      <div className='reviewContainer'>
      <form onSubmit={submitHandler}>
          <div className='inputContainer'>
            <lable>Restaurant Name</lable>
            {errors.restaurantName ? <p>{errors.restaurantName.message}</p> : null}
            <input
              type='text'
              name='restaurantName'
              onChange={(e) => setRestaurantName(e.target.value)}
              value={(restaurantName)}
            />
          </div>
          <div className='radiobutton'>
            <lable>Crispiness</lable>
            {errors.crispiness ? <p>{errors.crispiness.message}</p>: null}
            <div className='radioButton'>
              <input type='radio' value='1' name='crispiness'/> 1
              <input type='radio' value='2' name='crispiness'/> 2
              <input type='radio' value='3' name='crispiness'/> 3
              <input type='radio' value='4' name='crispiness'/> 4
              <input type='radio' value='5' name='crispiness'/> 5
            </div>
          </div>
          <div className='radiobutton'>
            <label>Flavor</label>
            {errors.flavor ? <p>{errors.flavor.message}</p>: null}
            <div className='radioButton' onChange={this.onChangeValue}>
              <input type='radio' value='1' name='flavor'/> 1
              <input type='radio' value='2' name='flavor'/> 2
              <input type='radio' value='3' name='flavor'/> 3
              <input type='radio' value='4' name='flavor'/> 4
              <input type='radio' value='5' name='flavor'/> 5
            </div>
          </div>
          <div className='radiobutton' onChange={this.onChangeValue}>
            <label>Size</label>
            {errors.size ? <p>{errors.size.message}</p>: null}
            <div className='radioButton'>
              <input type='radio' value='1' name='size'/> 1
              <input type='radio' value='2' name='size'/> 2
              <input type='radio' value='3' name='size'/> 3
              <input type='radio' value='4' name='size'/> 4
              <input type='radio' value='5' name='size'/> 5
            </div>
          </div>
          <div className='reviewContainer' onChange={this.onChangeValue}>
            <lable>Price</lable>
            {errors.price ? <p>{errors.price.message}</p>: null}
            <input type='text'
              name='price'
              onChange={(e) => setPrice(e.target.value)}
              value={(price)}
            />
          </div>
          <div className='commentContainer'>
            <label>comments</label>
            <input type='text'
              name='comment'
              onChange={(e) => setComment(e.target.value)}
              value={(comment)}
            />
          </div>
          <button type='submit'>Add your Tender</button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;