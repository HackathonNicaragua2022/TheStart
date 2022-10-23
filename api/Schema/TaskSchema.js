const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  status:Number,
  title: String,
  text: String,
  kanbans:{
    type: Schema.Types.ObjectId,
    ref: "Kanban",
  },
  workings:{
    type: Schema.Types.ObjectId,
    ref: "Working",
  },
});

TaskSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = model("Task", TaskSchema);

module.exports = Task;
