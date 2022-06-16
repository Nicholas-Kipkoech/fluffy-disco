const mongoose = require("mongoose");

const gifsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl:{
    type: String,
    required:true
  }
});
const Gif = mongoose.model("Gif", gifsSchema);
module.exports = Gif;
