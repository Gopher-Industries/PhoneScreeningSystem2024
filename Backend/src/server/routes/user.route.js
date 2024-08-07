const express = require("express");

const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../../controllers/user.controller.js");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", createUser);

// update a product
router.put("/:id", updateUser);

// delete a product
router.delete("/:id", deleteUser);

module.exports = router;
