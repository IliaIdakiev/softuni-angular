const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const limit = +req.query.limit;
    const { id } = req.params;

    if (limit) {
      models.Causes.find().populate('author').sort({ _id: -1 }).limit(limit)
        .then((causes) => res.send(causes))
        .catch(next);
      return;
    }
    models.Causes.find(id ? { _id: id } : {}).populate('author')
      .then((causes) => res.send(causes))
      .catch(next);
  },

  post: (req, res, next) => {
    const { cause, neededAmount, description, imageUrl } = req.body;
    const { _id } = req.user;

    models.Causes.create({ author: _id, cause, neededAmount, description, imageUrl })
      .then((createdCause) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { causes: createdCause } }),
          models.Causes.findOne({ _id: createdCause._id })
        ]);
      })
      .then(([modifiedObj, causeObj]) => {
        res.send(causeObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { _id } = req.user;

    const { donatedAmount } = req.body;
    models.Causes.updateOne({ _id: id }, { $inc: { collectedAmount: donatedAmount } })
      .then((updatedCause) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { donatedTo: id } }),
          models.Causes.findOne({ _id: updatedCause._id })
        ])
      })
      .then(([modifiedObj, causeObj]) => {
        res.send(causeObj);
      })
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Causes.deleteOne({ _id: id })
      .then((removedCause) => res.send(removedCause))
      .catch(next)
  }
};