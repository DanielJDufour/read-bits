# read-bits
Read Bits (1s and 0s) from Buffers, Array Buffers, Data Views, and Uint8Array with One Universal Function

# install
```bash
npm install -S read-bits
```

# usage
The readBits function has the following parameters:
- data: a Buffer, ArrayBuffer, DataView or Uint8Array
- start: the zero-based index of the first bit to read
- end: the zero-based index of the last bit to read

```js
const readBits = require("read-bits");

// the zero-based index of the last bit to read
const start = 0;

// the zero-based index of the last bit to read
const end = 5;

// you will read 6 bits, from the first (index 0) to the 6th (index 5)

const { bits } = readBits({ data: buffer, start, end });
// bits are 011011

const { bits } = readBits({ data: arrayBuffer, start, end });
// bits are 011011

const { bits } = readBits({ data: dataView, start, end });
// bits are 011011

const { bits } = readBits({ data: uint8Array, start, end });
// bits are 011011
```

You can also specify a length or number of bits to read
```js
const { bits } = readBits({ data: buffer, start: 0, length: 6 });
```
