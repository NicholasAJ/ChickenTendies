import '../App.css';
import '../components/singleReview.css'
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateReview = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [crispiness, setCrispiness] = useState("");
  const [size, setSize] = useState("");
  const [comments, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/review",
      {restaurantName,
        price, flavor,
        crispiness,
        size,
        comments})
      .then ((res) => {
        console.log(res.data);
        navigate('/chickentinder/dash');
      })
      .catch((err) => {
        console.log(err);
        console.log('Catch Create Clientside REVIEW')
        setErrors(err.response.data.errors)
      });
  };

  return(
    <div>
      <div className='reviewContainer'>
        <div className='reviewTitle'>
          <p>Create your Tender Review</p>
        </div>
        <div className='editReview'>
          <form onSubmit={submitHandler}>
            <div className='reviewHeader'>
              <label>Restaurant Name</label>
              {errors.restaurantName ? <p>{errors.restaurantName.message}</p> : null}
              <input
                type='text'
                name='restaurantName'
                onChange={(e) => setRestaurantName(e.target.value)}
                // value={(restaurantName)}
              />
              <label>Price</label>
              {errors.price ? <p>{errors.price.message}</p>: null}
              <input 
                type='text'
                name='price'
                onChange={(e) => setPrice(e.target.value)}
                value={(price)}
              />
            </div>
            <div className='radiobutton'>
              <label>Crispiness</label>
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
                  name="flavor"
                  onChange={(e) => setFlavor(e.target.value)}
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
                  name="flavor"
                  onChange={(e) => setSize(e.target.value)}
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
                name='comments'
                onChange={(e) => setComment(e.target.value)}
                value={(comments)}
              />
            </div>
            <button type='submit'>Add your Tender</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReview;