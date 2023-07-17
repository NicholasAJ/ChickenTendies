import '../App.css';
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,Link} from "react-router-dom";

const ViewReview = (props) => {
  const {username} = useParams();
  const {id} = useParams();
  const [oneReview, setOneReview] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/review/${username}/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username],[id]);

  return (
    <div>
      <div>
        <h2>{oneReview.restaurantName}</h2>
        <p>{oneReview.flavor}</p>
        <p>{oneReview.crispiness}</p>
        <p>{oneReview.size}</p>
        <p>{oneReview.price}</p>
        <p>{oneReview.comment}</p>
      </div>
      <div>
        <Link to={`/review/${username}/${id}`}>
          <button>Edit your Tender</button>
        </Link>
      </div>
    </div>
  )
};

export default ViewReview;