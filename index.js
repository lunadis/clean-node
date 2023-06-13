const app = require('express')()

app.get('/', (req, res) => {
  res.status(200).send('ahoy');
})

app.listen(3333, () => {
  console.log('its live!')
})