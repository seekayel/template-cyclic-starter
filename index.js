const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found', path: req.path, method: req.method }).end()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
