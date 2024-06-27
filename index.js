// // code your solution here
// // function razzle(name) {
// //   return `${name} You've been razzeled!`;
// // }
// // console.log(razzle("Osir"));

// function razzle(lawyer = "Billy", target = "'em") {
//   console.log(`${lawyer} razzle-dazzles ${target}!`);
// }

// razzle();
// razzle("philip", "otieno");

// function saturdayFun(activity = "roller-skate") {
//   return `This Saturday, I want to ${activity}!`
// }


// function saturdayFun(activity = "roller-skate") {
//   if (typeof activity === "string") {
//     return `This Saturday, I want to ${activity}!`;
//   } else {
//     return `This Saturday, I want to roller-skate!`
//   }
// }

// function saturdayFun(activity = "roller-skate") {
//   return `This Saturday, I want to ${activity}!`;
// }

// function saturdayFun(activity = "roller-skate") {
//   if (typeof activity === "string") {
//     return `This Saturday, I want to ${activity}!`
//   } 
// }
// console.log(saturdayFun())

// function mondayWork(activity = 'go to the office') {
//   return `This Monday, I will ${activity}.`;
// }

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = "*") {
  return function(pr = "special") {
    return `You are ${flair}${pr}${flair}!`
  }
}
// console.log(wrapAdjective()("a programmer"))
// // "You are *a hard worker*!
