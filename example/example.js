const got = require('got')
const express = require('express')
const { join } = require('path')

const { BRAND_SERVICE_PORT = 3334 } = process.env

const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`

const run = require('@maurosala/run-args')
run(join(__dirname, 'brand-service.js'), { PORT: BRAND_SERVICE_PORT })

const app = express()

app.get('/', async (req, res) => {
  const brand = await got(brandSrv + '/1', {
    timeout: { request: 1250 },
    retry: { limit: 0 }
  }).json()
  res.status(200).json(brand)
})

app.listen(3000)
