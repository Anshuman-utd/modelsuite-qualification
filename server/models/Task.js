const mongoose = require('mongoose');

const nonEmptyStringValidator = {
  validator: function (value) {
    return typeof value === 'string' && value.trim().length > 0;
  },
  message: 'Field cannot be empty',
};

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      validate: {
        ...nonEmptyStringValidator,
        message: 'Title cannot be empty',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      validate: {
        ...nonEmptyStringValidator,
        message: 'Description cannot be empty',
      },
    },
    status: {
      type: String,
      enum: ['Open', 'Claimed', 'Submitted', 'Approved', 'Rejected'],
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    dueDate: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);