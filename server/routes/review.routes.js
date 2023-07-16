const ReviewController = require('../controllers/review.controller');

module.exports = (app) => {
  app.post('/review', ReviewController.createReview);
  app.get('/review', ReviewController.getAllReviews);
  app.get('/review/:id', ReviewController.getOneReview);
  app.put('/review', ReviewController.updateReview);
  app.delete('/review', ReviewController.deleteReview);
}