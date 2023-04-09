const User = require("./../models/userModel");
const sendMail = require("./../utils/email");

exports.userSignup = async (req, res) => {
  try {
    const user = await User.create(req.body);

    // await sendMail({
    //   toEmail: req.body.email,
    //   subject: "Signup Alerts",
    //   text: "You are successfully created your buddyblog account!",
    // });

    res.status(200).json({
      status: "success",
      msg: "User has been created successfully",
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};
