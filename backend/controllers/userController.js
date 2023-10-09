import asyncHandler from "express-async-handler";

// Auth user/set token
// route POST /api/users/auth
// @acess Public
const authUser = asyncHandler(async (req, res) => {
  //envolver a logica com metodo assincrono é melhor que usar try catch, é preciso usar pois o mongoose retorna uma pronise
  res.status(200).json({ message: "Auth Test" });
});

export { authUser };
