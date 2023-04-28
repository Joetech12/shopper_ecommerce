import nc from 'next-connect';
import bcrypt from 'bcryptjs';

import { validateEmail } from '../../../utils/validation';
import db from '../../../utils/db';
import User from '../../../models/User';
import { createActivationToken } from '../../../utils/token';
import { sendEmail } from '../../../utils/sendEmails';
import { activateEmailTemplate } from '../../../emails/activateEmailTemplate';

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email' });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Password must be atleast 8 characters' });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: cryptedPassword,
    });
    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
      //   name: addedUser.name,
      //   email: addedUser.email,
    });

    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, '', 'Activate your account', activateEmailTemplate);
    await db.disconnectDb();
    res.json({
      message:
        'Registered successfully! Please activate your email to get started',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
