const GeographicalAspectRatio = require('../index');
const {BBoxError} = require('../index');

const TEST_SQUARE_BBOX = [-5.877686, 38.745515, -4.949341, 39.537940];
const TEST_RECTANGULAR_BBOX = [-6.230965, 39.283294, -5.971756, 39.353945];

const WRONG_BBOX = [3.949585, 40.225024, -3.372803];

test('Incorrect BBox should throw error', () => {
  expect(() => {
    const calculator = new GeographicalAspectRatio(WRONG_BBOX);
    return calculator.aspectRatio;
    }).toThrow(BBoxError);
});

test('Correct BBox should not throw error', () => {
  expect(() => {
    const calculator = new GeographicalAspectRatio(TEST_SQUARE_BBOX);
    return calculator.aspectRatio;
    }).not.toThrow(BBoxError);
});

test('Square-like BBox should be close to 1', () => {
  const calculator = new GeographicalAspectRatio(TEST_SQUARE_BBOX);
  expect(Math.round(calculator.aspectRatio)).toEqual(1);
});

test('Rectangular-like BBox should be greater than 0', () => {
  const calculator = new GeographicalAspectRatio(TEST_RECTANGULAR_BBOX);
  expect(Math.round(calculator.aspectRatio)).toBeGreaterThan(0);
});
