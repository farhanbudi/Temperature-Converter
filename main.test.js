const convert = require("./main");

test("celcius to celcius", () => {
    expect(convert(20, 'celcius', 'celcius')).toBe(20);
});

test("celcius to reamur", () => {
    expect(convert(20, 'celcius', 'reamur')).toBe(16);
});

test("celcius to farenheit", () => {
    expect(convert(20, 'celcius', 'farenheit')).toBe(68);
});

test("reamur to celcius", () => {
    expect(convert(20, 'reamur', 'celcius')).toBe(25);
});

test("reamur to reamur", () => {
    expect(convert(20, 'reamur', 'reamur')).toBe(20);
});

test("reamur to farenheit", () => {
    expect(convert(20, 'reamur', 'farenheit')).toBe(68);
});

test("farenheit to celcius", () => {
    expect(convert(50, 'farenheit', 'celcius')).toBe(10);
});

test("farenheit to reamur", () => {
    expect(convert(50, 'farenheit', 'reamur')).toBe(8);
});

test("farenheit to farenheit", () => {
    expect(convert(50, 'farenheit', 'farenheit')).toBe(50);
});

