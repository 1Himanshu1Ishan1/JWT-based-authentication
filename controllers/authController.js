const User = require('../models/User');
const createToken = require('../utils/createToken');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });

    const token = createToken(user._id);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
