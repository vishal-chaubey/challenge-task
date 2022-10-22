const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/user-agent') return respondUserAgent(req, res)
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
}
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
}

console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
