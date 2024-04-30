// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let noBonus = []
  let bonus4 = []
  let bonus6 = []
  let bonus10 = []

  let bonusExtra5 = []

  let downBonus = []

for (let  i =0; i < employee.length; i++){
  // console.log(employee[i].reviewRating)
if (employee[i].reviewRating <= 2  ){
  noBonus.push(employee[i].reviewRating)
  console.log('no bonus', noBonus)
}
else if (employee[i].reviewRating === 3 ){
  bonus4.push(employee[i].reviewRating)
  console.log('bonus 4', bonus4)
}

else if (employee[i].reviewRating === 4 ){
  bonus6.push(employee[i].reviewRating)
  console.log('bonus 6', bonus6)
}

else if (employee[i].reviewRating === 5){
  bonus10.push(employee[i].reviewRating, employee[i].name)
  console.log('bonus 10',bonus10)

}

if (employee[i].employeeNumber.length === 4){
  bonusExtra5.push(employee[i].employeeNumber,)
  console.log('extra bonus is',bonusExtra5)

}
  
// else if (employee[i].annualSalary > 65000){
//   employee[i].no

}
  
  // return new object with bonus results

}

calculateIndividualEmployeeBonus(employees)


/**
 * console.log("no bonus",noBonus)
  bonus4.push('bonus 4',employee[i].reviewRating)
  console.log(bonus4)
  bonus6.push('bonus 6',employee[i].reviewRating)
  bonus10.push('bonus 10',employee[i].reviewRating)
 */