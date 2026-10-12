
import jwtUtils from "../utils/jwt.js";

const auth =  (req, res, next) => {
  console.log(req.user);
  const cookie =req.headers.cookie;
  console.log(cookie);
  const token = cookie?.split("=")[1];  
  
  try {
    const data = jwtUtils.verifyToken(token);   // { id, role }
    req.user = data;    
    console.log(req.user);
    next();
  } catch {
    res.status(401).json({ message: "Session expired, login again" });
  }
};
export default auth;