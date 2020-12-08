const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  resource: String,
  user_id: String,
  topic: String,
  application_id: String,
  attempts: String,
  sent: String,
  received: String  
});

module.exports = mongoose.model('tasks', TaskSchema);
