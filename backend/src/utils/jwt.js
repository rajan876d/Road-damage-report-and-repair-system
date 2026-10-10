import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = (data) =>
  jwt.sign({ id: data._id, role: data.role }, config.jwtSecret);

const verifyToken = (token) => jwt.verify(token, config.jwtSecret);

export default { generateToken, verifyToken };