const convert = require("./main");

test("celcius to celcius", () => {
    expect(convert(20, 'celcius', 'celcius')).toBe(20);
});

test("celcius to reamur", () => {
    expect(convert(20, 'celcius', 'reamur')).toBe(16);
});

test("celcius to fahrenheit", () => {
    expect(convert(20, 'celcius', 'fahrenheit')).toBe(68);
});

test("reamur to celcius", () => {
    expect(convert(20, 'reamur', 'celcius')).toBe(25);
});

test("reamur to reamur", () => {
    expect(convert(20, 'reamur', 'reamur')).toBe(20);
});

test("reamur to fahrenheit", () => {
    expect(convert(20, 'reamur', 'fahrenheit')).toBe(77);
});

test("fahrenheit to celcius", () => {
    expect(convert(50, 'fahrenheit', 'celcius')).toBe(10);
});

test("fahrenheit to reamur", () => {
    expect(convert(50, 'fahrenheit', 'reamur')).toBe(8);
});

test("fahrenheit to fahrenheit", () => {
    expect(convert(50, 'fahrenheit', 'fahrenheit')).toBe(50);
});

