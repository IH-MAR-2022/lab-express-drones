const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(function (allDrones) {
      res.render("drones/list", { allDrones: allDrones });
    })
    .catch(function (err) {
      console.log("Something went wrong", err.message);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({ ...req.body })
    .then(function (results) {
      res.redirect("/drones");
    })
    .catch(function (error) {
      console.log("FAILED", error.message);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
