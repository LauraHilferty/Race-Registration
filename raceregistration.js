let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 19;
if (runnerAge >=18 && registeredEarly === true){
  raceNumber += 1000;
}

if (runnerAge >18 && registeredEarly === true){
  console.log(`your number is ${raceNumber} and you will run at 9.30 am.`)
} else if (runnerAge >18 && registeredEarly === false){
  console.log(`your number is ${raceNumber} and you will run at 11 am.`)
} else if (runnerAge === 18 ){
  console.log(`Please go see the registration desk.`)
} else {
  console.log(`your number is ${raceNumber} and you will run at 12.30 pm.`)
}
