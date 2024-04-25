// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => arr.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x) => (num) => x * num;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, fn) => fn(drivers);