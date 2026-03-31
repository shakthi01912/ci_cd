import express from 'express';
import { addtwo } from './routes/addFunction.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(addtwo(2, 3).toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});