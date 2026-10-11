import authServices from "../services/auth.services.js";
import jwtUtils from "../utils/jwt.js";


const login = async (req, res) => {
  try {
    const data = await authServices.login(req.body);
    const token = jwtUtils.generateToken(data);
    res.cookie("authToken", token, {maxAge: 86400 * 1000,});
    res.json(data);

      console.log(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};

const register = async (req, res) => {
  try {
    const data = await authServices.register(req.body);
    const token = jwtUtils.generateToken(data);
    res.cookie("authToken", token, {maxAge: 86400 * 1000,});
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const me = async (req, res) => {
  try {
    res.json(await authServices.getMe(req.user.id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("authToken");
  res.json({ message: "Logged out" });
};

export default { login, register, me, logout };