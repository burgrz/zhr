const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: String,
  salary: Number,
  hireDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);