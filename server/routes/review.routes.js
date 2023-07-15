const ReviewController = require('../controllers/review.controller');

module.exports = (app) => {
  app.put('/review', ReviewController.createReview);
  app.get('/review', ReviewController.getAllReviews);
  app.get('/review/:reviewId', ReviewController.getOneReview);
  app.put('/review', ReviewController.updateReview);
  app.delete('/review', ReviewController.deleteReview);
}