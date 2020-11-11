const test = require("ava");
const readBits = require("./read-bits");

const nums = [];
for (let i = 0; i < 100; i++) nums.push(i);
const data = Uint8Array.from(nums);

test("reading first byte", t => {
  const { bits, bitLength, byteEnd, byteStart } = readBits({
    data,
    start: 0,
    end: 7
  });
  t.is(bitLength, 8);
  t.is(byteStart, 0);
  t.is(byteEnd, 0);
  t.is(bits, "00000000");
});

test("reading second byte", t => {
  const { bits, bitLength, byteEnd, byteStart } = readBits({
    data,
    start: 8,
    end: 15
  });
  t.is(bitLength, 8);
  t.is(byteStart, 1);
  t.is(byteEnd, 1);
  t.is(bits, "00000001");
});

test("reading half of second and third bytes", t => {
  const { bits, bitLength, byteEnd, byteStart } = readBits({
    data,
    start: 12,
    end: 19
  });
  t.is(bitLength, 8);
  t.is(byteStart, 1);
  t.is(byteEnd, 2);
  t.is(bits, "00010000");
});
