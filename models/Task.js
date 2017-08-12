const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      description: {
       type: String,
       required: true
     },
    assignee: {
      type: String,
      required: true
    },
    actionPlan:{
      type: String,
      required:true
    },
    startDate: {
      type:Date,
      required: true
    },
    endDate: {
       type: Date,
       required: true
    },
    status: {
     type: String,
     default:'ToDo'
    },
    retrospective: {
      type: String,
       required:true
    }

});

module.exports = mongoose.model('Task', TaskSchema);
