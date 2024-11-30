const User = require('./models/user');

const saveUser = async (chatId) => {
    const existingUser = await User.findOne({ chatId });
    if (existingUser) return;
    const user = new User({ chatId });
    await user.save();
};

module.exports = { saveUser };
