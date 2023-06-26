const express = require("express");
const studentRoute = express.Router();

// Student model
let studentModel = require("../models/Student");

// Get all data
studentRoute.route("/").get((req, res, next) => {
  studentModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      return next(err);
    });
});

// Create student data
studentRoute.route("/create-student").post((req, res, next) => {
  // studentModel.create(req.body, (err, data) => {
  //   if (err) return next(err);
  //   res.json(data);
  // });
  studentModel
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Edit student data
studentRoute.route("/edit-student/:id").get((req, res, next) => {
  // studentModel.findById(req.params.id, (err, data) => {
  //   if (err) return next(err);
  //   res.json(data);
  // });
  studentModel
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      return next(err);
    });
});

// Update student data
studentRoute.route("/update-student/:id").put((req, res, next) => {
  // studentModel.findByIdAndUpdate(
  //   req.params.id,
  //   {
  //     $set: req.body,
  //   },
  //   (err, data) => {
  //     if (err) return next(err);
  //     res.json(data);
  //     console.log("Student successfully updated");
  //   }
  // );
  studentModel
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((data) => {
      res.json(data);
      console.log("Student successfully updated");
    })
    .catch((err) => {
      return next(err);
    });
});

// Delete student data
studentRoute.route("/delete-student/:id").delete((req, res, next) => {
  // studentModel.findByIdAndDelete(req.params.id, (err, data) => {
  //   if (err) return next(err);
  //   res.status(200).json({
  //     msg: data,
  //   });
  // });
  studentModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({
        msg: data,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = studentRoute;
