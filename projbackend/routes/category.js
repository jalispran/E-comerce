const express = require("express");
const router = express.Router();

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category")
const {isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

// params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

// actual routes goes here

// create routes

router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin ,createCategory);

// read
router.get("/category/:categoryId",getCategory);
router.get("/categories", getAllCategory);

// update

router.put("/category/:categoryId/:userId", isSignedIn, isAdmin, isAuthenticated, updateCategory);

// delete
router.delete("/category/:categoryId/:userId", isSignedIn, isAdmin, isAuthenticated, removeCategory);

module.exports = router;