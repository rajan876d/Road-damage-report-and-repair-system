import User from "../models/User.js";
import bcrypt from "bcryptjs";

const publicUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
});

const login = async (input) => {
  const user = await User.findOne({ email: input.email });

  // same message for both cases, so nobody can find which emails exist
  if (!user) throw new Error("Wrong email or password");

  const isMatch = await bcrypt.compare(input.password, user.password);
  if (!isMatch) throw new Error("Wrong email or password");

  return publicUser(user);
};


const register = async (input) => {
  const exists = await User.findOne({ email: input.email });
  if (exists) throw new Error("Email already used");

  const hashPassword = await bcrypt.hash(input.password, 10);

  const user = await User.create({
    name: input.name,
    email: input.email,
    password: hashPassword,
  });

  return publicUser(user);
};

const getMe = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return publicUser(user);
}; 

export default { login, register, getMe };