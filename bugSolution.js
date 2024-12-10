const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  //Proper Error Handling
  if (!user || !user.name) {
    return res.status(400).send({ error: 'Missing required user information' });
  }
  console.log(user.name);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));