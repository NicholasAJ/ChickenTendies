import '../App.css';
import '../components/singleReview.css'
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,Link,useNavigate} from "react-router-dom";

const ViewReview = () => {
  console.log("Hello")
  const {id} = useParams();
  const [oneReview, setOneReview] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("hello")
    axios
      .get(`http://localhost:8000/review/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);

  // const HandleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:8000/review/${id}`)
  //     .then ((response) => {
  //       console.log("successful deletion");
  //       console.log(response);
  //       navigate('/chickentinder/dash')
  //     })
  //     .catch((err) => {
  //       console.log("error deleting this review", err);
  //     });
  // };

  return (
    <div>
      <div className='reviewContainer'>
        <div className='reviewTitle'>
          <h1>Your Tender</h1>
        </div>
            <div className='singleReview'>
              <div className='reviewHeader'>
                <p id='restaurantName'>{oneReview.restaurantName}</p>
                <p>Price: {oneReview.price}</p>
              </div>
              <div className='reviewBody'>
                <p>Flavor: {oneReview.flavor}</p>
                <p>Crispiness: {oneReview.crispiness}</p>
                <p>Size: {oneReview.size}</p>
                <p>Comments: {oneReview.comments}</p>
              </div>
            </div>
            <div >
              <Link to={`/chickentinder/edit/${id}`}>
                <button className='button'>Edit your Tender</button>
              </Link>
            </div>
            <div>
              {/* <button onClick={() => HandleDelete()}>
                Delete
              </button> */}
            </div>
      </div>
    </div>
  )
};

export default ViewReview;