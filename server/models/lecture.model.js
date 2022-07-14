const { Schema, model } = require("mongoose");

const lectureSchema = new Schema(
  {
    lecturename: { type: String, required: true },
    teachername: { type: String, required: true },
    date: { type: String, required: true },

    time: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("lecture", lectureSchema);
