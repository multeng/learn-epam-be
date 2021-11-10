import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  res.send('its work');
});

app.listen(PORT, () => {
  console.log(`App is running now, http://localhost:${PORT}`);
});