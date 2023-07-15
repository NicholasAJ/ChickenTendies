const ReviewController = require('../controllers/review.controller');

module.exports = (app) => {
  app.put('/review/create', ReviewController.createReview);
  app.get('/reviews/getall', ReviewController.getAllReviews);
  app.get('/review/getone', ReviewController.getOneReview);
  app.put('/review/update', ReviewController.updateReview);
  app.delete('/review/delete', ReviewController.deleteReview);
}