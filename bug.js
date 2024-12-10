const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing crucial error handling if 'user' is undefined or missing properties
  console.log(user.name); // Error if 'user' or 'user.name' is undefined
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));