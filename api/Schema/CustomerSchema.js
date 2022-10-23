const { Schema, model } = require("mongoose");

const CustomerSchema = new Schema({
  name: String,
  status: String,
  Week: Number,
  Butget: Number,
  Location: String,
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

CustomerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;
