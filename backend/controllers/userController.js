import asyncHandler from "express-async-handler";

// Auth user/set token
// route POST /api/users/auth
// @acess Public
const authUser = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "Auth Test" });
});

// Register a new user
// route POST /api/users
// @acess Public
const registerUser = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "Register User" });
});

// Logout User
// route POST /api/users/logout
// @acess Public
const logoutUser = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "Logout User" });
});

// Get user Profile
// route GET /api/users/profile
// @acess Private
const getUserProfile = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "User Profile" });
});

// Update User profile
// route PUT /api/users/profile
// @acess Private
const updateUserProfile = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
