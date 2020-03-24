// SetTimeOut : method calls a function or evaluates an expression after a specified number of milliseconds. !! one time

//setInterval :method calls a function or evaluates an expression at specified intervals
//1s= 1000ms
// setTimeout(sayHi, 1000)

// function sayHi() {
//     document.write("Guten morgen <br>")
// }
// function sayHello(name) {
//     document.write("Guten morgen " + name + "<br>")
// }
// setTimeout(sayHello("anass"), 1000)/// false
// setTimeout(sayHello, 1000, "anass")

// // setTimeout(referenceFunction,time,arg1,arg2...)

// function describe(name, age, address) {
//     document.write(`Hallo! Ich bin ${name}! Ich bin ${age} Jahre alt und wohne in ${address}! <br>`)

// function sayHey(name, age, adresse) {
//     //console.log(sayHi)
//     document.write("Hey, my is " + name + " and I'm " + age + " years old and live in " + adresse)
// }
// setTimeout(describe, 1000, "superman", 22, "NY City")
// //setTimeout(sayHey, 2000, "Batman", 30, "Gotham")

// setTimeout('describe("superman",22,"NY City")', 1000)

// setTimeout(() => describe("Ironman", 40, "LA"), 1000)

//Abbrechnen mit clearTimeout

// let timeId = setTimeout(() => {
//     document.write("never happens")
// }, 2000)

// clearTimeout(timeId)

//setInterval
// let i = 0
// let timeId1 = setInterval(() => {
//     document.write(i + "<br>")
//     i++;
//     if (i == 10) {
//         clearInterval(timeId1)
//     }
// }, 1000)

// ------------------------------------------------------------------------


// let i = 100
// let x = 100
// function move(x) {
//     document.getElementById("img").style.paddingLeft = `${x}px`;
// }
// let timeId2 = setInterval(() => {
//     move(i)
//     i += 100;
//     if (i == 1000) {
//         clearInterval(timeId2)
//     }
// }, 2000)


// ---------------------------------------------------------------CodeFlow Übung lev1_2: setTimeout setInterval

// let j = 100;
// document.getElementById("btn").addEventListener("click", () => {
//     let zeit = document.getElementsByClassName("zeit")[0].innerHTML;
//     if (zeit == "100%") {
//         let timeId3 = setInterval(() => {
//             j--;
//             document.getElementsByClassName("zeit")[0].innerHTML = `${j}%`;
//             if (j == 0) {
//                 clearInterval(timeId3)
//             }
//         }, 50)
//     }
//     if (zeit == "0%") {
//         let timeId3 = setInterval(() => {
//             j++;
//             document.getElementsByClassName("zeit")[0].innerHTML = `${j}%`;
//             if (j == 100) {
//                 clearInterval(timeId3)
//             }
//         }, 50)
//     }
// })


// ---------------------------------------------------------------CodeFlow Übung lev2_1: BOM Meldung


// let count = 10
// document.querySelector("body > div.message").addEventListener("load", show())
// function show() {
// let timeId4 = setInterval(() => {
//     count--;
//     document.getElementById("count").innerHTML = `${count}`;
//     if (count == 0) {
//         clearInterval(timeId4)
//         document.querySelector("body > div.message").style.display = "none"
//     }
// }, 1000)
// }


// ---------------------------------------------------------------CodeFlow Übung lev2_2: Countdown


let timeId;
let min = 0;
let sec = 0;
function startMinCountdown() {
    min = document.getElementById("minutes").value;
    sec = 0;
    timeId = setInterval(() => {
        if (sec == 0) {
            min--;
            sec = 59
            document.getElementById("time").innerText = `${min} : ${sec}`;
        } else {
            sec--;
            document.getElementById("time").innerHTML = `${min} : ${sec}`;
        }
        if (min == 0 && sec == 0) {
            clearInterval(timeId);
        }
    }, 1000);
    console.log(min)
}
function pauseMinCountdown() {
    clearInterval(timeId);
}
function restartMinCountdown() {
    timeId = setInterval(() => {
        if (sec == 0) {
            min--;
            sec = 59
            document.getElementById("time").innerText = `${min} : ${sec}`;
        } else {
            sec--;
            document.getElementById("time").innerHTML = `${min} : ${sec}`;
        }
        if (min == 0 && sec == 0) {
            clearInterval(timeId);
        }
    }, 1000);
}