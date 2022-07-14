const { Schema, model } = require("mongoose");

const assignmentSchema = new Schema(
  {
    assignmentname: { type: String, required: true },
    teachername: { type: String, required: true },
    stream:{ type: String, required: true },
    date: { type: String, required: true },

    time: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("assignments", assignmentSchema);
