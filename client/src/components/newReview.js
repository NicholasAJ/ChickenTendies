import '../App.css';
import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

//   <CreateReview currentUser=user />

//   {
//     restaurant: 'Wen',
//     crispiness: 4,
//     createdBy: user.username,
//   }

const CreateReview = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [crispiness, setCrispiness] = useState("");
  const [size, setSize] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/review",
      {restaurantName, price, flavor, crispiness, size, comment})
      .then ((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        console.log('Catch Create Clientside REVIEW')
        setErrors(err.response.data.errors)
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
            <label>Restaurant Name</label>
            {errors.restaurantName ? <p>{errors.restaurantName.message}</p> : null}
            <input
              type='text'
              name='restaurantName'
              onChange={(e) => setRestaurantName(e.target.value)}
              value={(restaurantName)}
            />
          </div>
          <div className='radiobutton'>
            <label>Crispiness</label>
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
            <label>Price</label>
            {errors.price ? <p>{errors.price.message}</p>: null}
            <input 
              type='text'
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

export default CreateReview;