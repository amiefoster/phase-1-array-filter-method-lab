// Code your solution here

// * `findMatching`- 
//This function takes an array of drivers' names and a `string` as arguments, and 
//returns the matching list of drivers. The function should be case insensitive.


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(driverNamesArray, inputString) {
    return driverNamesArray.filter(driverName => driverName.toUpperCase() == inputString.toUpperCase())

}

function fuzzyMatch(driverNamesArray, inputString) {
    return driverNamesArray.filter(driverName => driverName.charAt(0) === inputString.charAt(0))
}

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driverNamesArrayObj, inputString) {
    return driverNamesArrayObj.filter(driverName => driverName.name === inputString)
}