import React, {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "../App.css"

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/review`)
      .then((res) => {
        console.log(res.data);
        setAllReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }, []);

  const HandleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/review/${id}`)
      .then ((response) => {
        console.log("successful deletion");
        console.log(response);
        const filteredReviews = allReviews.filter((review,index)=> review._id!==id);
        setAllReviews(filteredReviews);
      })
      .catch((err) => {
        console.log("error deleting this review", err);
      });
  };

  return (
    <div>
      <div className="mainDisplay">
        <h1 className="dashHeader">Your Chicken Tenders</h1>
        {allReviews.map((review,index) => {
        return(
          <div className="displayContainer" key={review._id}>
            <div className="displayHeader">
              <Link to={`/chickentinder/tender/${review._id}`}>
              <p>{review.restaurantName}</p>
              </Link>
              <p>Price: {review.price}</p>
            </div>
            <div className="displayBody">
              <p>Flavor: {review.flavor}</p>
              <p>Crispiness: {review.crispiness}</p>
              <p>Size: {review.size}</p>
              <p>Comment: {review.comments}</p>
            </div>
            <div>
              <button onClick={() => HandleDelete(review._id)}>
                Delete Tender
              </button>
            </div>
          </div>)
        })}
        <div>
          <button id="button">
            <Link to={`/chickentinder/new`}>
              Add a Tender
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;