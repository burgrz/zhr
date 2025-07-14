require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const Employee = require('./models/Employee');

app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.send(employee);
});

app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

app.get('/', (req, res) => res.send('ZHR API'));

app.listen(3000, () => console.log('Server on 3000'));