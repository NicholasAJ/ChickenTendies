import React, {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/review/$`)
      .then((res) => {
        console.log(res.data);
        setAllReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <p>Your Chicken Tenders</p>
      {allReviews.map((review,index) => {
        return(
          <div key={review._id}>
            <p>{review.restarauntName}</p>
            <p>{review.price}</p>
            <p>{review.flavor}</p>
            <p>{review.crispiness}</p>
            <p>{review.size}</p>
            <p>{review.comment}</p>
          </div>
        )
      })}
      <div>
        <button>
          <Link to={`/review`}>
            Add a Tender
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DisplayAll;