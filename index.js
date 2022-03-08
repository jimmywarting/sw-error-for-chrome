import http from 'node:http'

const indexHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    now open chrome devtool, open the application tab, and inspect service worker
    find the start/stop link and press it
    <script>
      navigator.serviceWorker.register('/sw.js', { type: 'module' })
    </script>
  </body>
</html>
`

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.end(indexHtml)
  }
  if (req.url === '/sw.js') {
    // if you remove charset=utf-8, then it can restart the service worker
    res.setHeader('content-type', 'application/javascript; charset=utf-8')
    res.end('')
  }
}).listen(() => {
  console.log('Server is running on port', server.address().port)
  console.log('http://localhost:' + server.address().port)
})
