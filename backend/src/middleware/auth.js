import jwtUtils from "../utils/jwt.js";

export default (req, res, next) => {
  const token = req.cookies?.authToken;
  if (!token)
     return res.status(401).json({ message: "Please login" });

  try {
    req.user = jwtUtils.verifyToken(token);   // { id, role }
    next();
  } catch {
    res.status(401).json({ message: "Session expired, login again" });
  }
};