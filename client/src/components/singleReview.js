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

  const HandleDelete = () => {
    console.log(`This review is being deleted {}`)
    axios
      .delete(`http://localhost:8000/review`)
      .then ((res) => {
        console.log("successful deletion");
        console.log(res);
      })
      .catch((err) => {
        console.log("error deleting store", err);
      });
  };

  return (
    <div>
      <div>
        <h1>Your Tender</h1>
      </div>
          <div key={oneReview.username}>
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
          <div>
            <button onClick={() => HandleDelete()}>
              Delete
            </button>
          </div>
    </div>
  )
};

export default ViewReview;