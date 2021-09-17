const mongoose = require("mongoose");

const demoCourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = mongoose.model("democourses", demoCourseSchema);
