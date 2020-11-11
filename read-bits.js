const getByte = require("get-byte");

const readBits = ({ data, debug, start, end }) => {
  const bitLength = end - start + 1;
  if (debug) console.log("[read-bits] bitLength:", bitLength);
  const byteStart = Math.floor(start / 8);
  if (debug) console.log("[read-bits] byteStart:", byteStart);
  const byteEnd = Math.floor(end / 8);
  if (debug) console.log("[read-bits] byteEnd:", byteEnd);
  let bits = "";
  for (let byteOffset = byteStart; byteOffset <= byteEnd; byteOffset++) {
    bits += getByte(data, byteOffset).toString(2).padStart(8, "0");
  }
  if (debug) console.log("[read-bits] bits:", bits);
  const result = bits.substr(start % 8, end - start + 1);
  if (debug) console.log("[read-bits] results:", result);
  return { bitLength, byteStart, byteEnd, bits: result };
};

module.exports = readBits;

if (typeof window !== "undefined") window.readBits = readBits;
if (typeof self !== "undefined") self.readBits = readBits;
