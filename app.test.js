
const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond with Hello, Docker with Node.js!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Docker with Node.js!');
    expect(response.statusCode).toBe(200);
  });
});

// Basic operations tests
describe('Basic operations', () => {
  test('Addition of 2 + 2 equals 4', () => {
    expect(2 + 2).toBe(4);
  });

  test('Subtraction of 5 - 3 equals 2', () => {
    expect(5 - 3).toBe(2);
  });

  test('Multiplication of 3 * 4 equals 12', () => {
    expect(3 * 4).toBe(12);
  });

  test('Division of 10 / 2 equals 5', () => {
    expect(10 / 2).toBe(5);
  });

  test('Modulus of 10 % 3 equals 1', () => {
    expect(10 % 3).toBe(1);
  });
});
