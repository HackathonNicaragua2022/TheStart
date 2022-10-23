const { Schema, model } = require("mongoose");

const WorkingSchema = new Schema({
  name: String,
  status: String,
  Image: String,
  Designation: String,
  Country: String,
  HireDate: Date,
  reportsTo: String,

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  task: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

WorkingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Working = model("Working", WorkingSchema);

module.exports = Working;