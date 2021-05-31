import User from "../models/User.js";
import bcrypt from "bcrypt";

const postRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: [{ msg: "email already registered" }] });
    }

    user = new User({ ...req.body });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json(user);
    
  } catch (error) {
    res.send("ufa");
  }
};

export default postRegister;
