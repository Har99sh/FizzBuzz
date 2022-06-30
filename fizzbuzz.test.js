const fizzbuzz = require("./fizzBuzz.js");

describe ("fizbuzz", () => {

    test("init test", () => {
        expect(true).toBe(true);
    });

    test("It must return 0 if input is 0", () =>{
        const expected = 0;
        const result = fizzbuzz(0);
        expect(expected).toBe(result);
    });

    test("It must return 1 if input is 1", () =>{
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("It must return 2 if input is 2", () =>{
        const expected = 2;
        const result = fizzbuzz(2);
        expect(expected).toBe(result);
    });

    test("It must return fizz if input is 3", () =>{
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("It must return fizz if input is 9", () =>{
        const expected = "fizz";
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test("It must return fizz if input is 12", () => {
        const expected = "fizz";
        const result = fizzbuzz(12);
        expect(expected).toBe(result);
    });

    test("It must return buzz if input is 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test("It must return buzz if input is 20", () => {
        const expected = "buzz";
        const result = fizzbuzz(20);
        expect(expected).toBe(result);
    });

    test("It must return buzz if input is 25", () => {
        const expected = "buzz";
        const result = fizzbuzz(25);
        expect(expected).toBe(result);
    });

    test("It must return fizzbuzz if input is 15", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });

    test("It must return fizzbuzz if input is 30", () => { 
        const expected = "fizzbuzz";
        const result = fizzbuzz(30);
        expect(expected).toBe(result);
    });

    test("It must return fizzbuzz if input is 45", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(45);
        expect(expected).toBe(result);
    });

    test("It must return error if input is a string", () =>{
        const expected = "error";
        const result = fizzbuzz("hello");
        expect(expected).toBe(result);
    });

    test("It must return fizz if input has 3 in it", () => { 
        const expected = "fizz";
        const result = fizzbuzz(43);
        expect(expected).toBe(result);
    });
    
    test("It must return fizzbuzz if input has 15 in it", () => { 
        const expected = "fizzbuzz";
        const result = fizzbuzz(100153);
        expect(expected).toBe(result);
    });

    test("It must return fizz if input has 3 in it", () => { 
        const expected = "fizz";
        const result = fizzbuzz(37);
        expect(expected).toBe(result);
    });

    test("It must return buzz if input has 5 in it", () => { 
        const expected = "buzz";
        const result = fizzbuzz(1105);
        expect(expected).toBe(result);
    });

    test("It must return buzz if input has 5 in it", () => { 
        const expected = "buzz";
        const result = fizzbuzz(110105);
        expect(expected).toBe(result);
    });
    
})

