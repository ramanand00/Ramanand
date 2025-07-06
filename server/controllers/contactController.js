const Contact = require('../models/Contact');

exports.submitMessage = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Message saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

