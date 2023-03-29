# Run external file with args

## Usage

```js
const run = require('@maurosala/run-args')

run(filePath, args)
```

- filePath: path to the file to run
- args: object with key-value to pass to the file

## Example (check the example folder)

```js
const run = require('@maurosala/run-args')

run(join(__dirname, 'brand-service.js'), { PORT: BRAND_SERVICE_PORT })
```

### Note

> ARGS: Must be an object key-value
