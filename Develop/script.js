// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


let dayEl = document.querySelector("#currentDay")


//Containers
let hour9 = document.querySelector("#hour-9");
let hour10 = document.querySelector("#hour-10");
let hour11 = document.querySelector("#hour-11");
let hour12 = document.querySelector("#hour-12");
let hour1 = document.querySelector("#hour-1");
let hour2 = document.querySelector("#hour-2");
let hour3 = document.querySelector("#hour-3");
let hour4 = document.querySelector("#hour-4");
let hour5 = document.querySelector("#hour-5");

//Buttons
let save9 = document.querySelector(".saveBtn");
let save10 = document.querySelector("#btn-10");
let save11 = document.querySelector("#btn-11");
let save12 = document.querySelector("#btn-12");
let save13 = document.querySelector("#btn-13");
let save14 = document.querySelector("#btn-14");
let save15 = document.querySelector("#btn-15");
let save16 = document.querySelector("#btn-16");
let save17 = document.querySelector("#btn-17");

//Text Areas
let text9 = document.querySelector("#text-9")
let text10 = document.querySelector("#text-10")


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  save9.addEventListener("click", function () {
    let entry1 = document.getElementById("text-9").value;
    localStorage.setItem("hour-9", entry1);
  });

  save10.addEventListener("click", function () {
    let entry2 = document.getElementById("text-10").value;
    localStorage.setItem("hour-10", entry2);
  });

  save11.addEventListener("click", function () {
    let entry3 = document.getElementById("text-11").value;
    localStorage.setItem("hour-11", entry3);
  });

  save12.addEventListener("click", function () {
    let entry4 = document.getElementById("text-12").value;
    localStorage.setItem("hour-12", entry4);
  });

  save13.addEventListener("click", function () {
    let entry5 = document.getElementById("text-13").value;
    localStorage.setItem("hour-1", entry5);
  });

  save14.addEventListener("click", function () {
    let entry6 = document.getElementById("text-14").value;
    localStorage.setItem("hour-2", entry6);
  });

  save15.addEventListener("click", function () {
    let entry7 = document.getElementById("text-15").value;
    localStorage.setItem("hour-3", entry7);
  });

  save16.addEventListener("click", function () {
    let entry8 = document.getElementById("text-16").value;
    localStorage.setItem("hour-4", entry8);
  });

  save17.addEventListener("click", function () {
    let entry9 = document.getElementById("text-17").value;
    localStorage.setItem("hour-5", entry9);
  });




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  let currentTime = dayjs().hour();
  console.log(currentTime)


  if (currentTime == 9) {
    hour9.classList.add("present");
    hour10.classList.add("future");
    hour11.classList.add("future");
    hour12.classList.add("future");
    hour1.classList.add("future");
    hour2.classList.add("future");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 10) {
    hour9.classList.add("past");
    hour10.classList.add("present");
    hour11.classList.add("future");
    hour12.classList.add("future");
    hour1.classList.add("future");
    hour2.classList.add("future");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 11) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("present");
    hour12.classList.add("future");
    hour1.classList.add("future");
    hour2.classList.add("future");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 12) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("present");
    hour1.classList.add("future");
    hour2.classList.add("future");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 13) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour1.classList.add("present");
    hour2.classList.add("future");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 14) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour1.classList.add("past");
    hour2.classList.add("present");
    hour3.classList.add("future");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 15) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour1.classList.add("past");
    hour2.classList.add("past");
    hour3.classList.add("present");
    hour4.classList.add("future");
    hour5.classList.add("future");
  } else if (currentTime === 16) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour1.classList.add("past");
    hour2.classList.add("past");
    hour3.classList.add("past");
    hour4.classList.add("present");
    hour5.classList.add("future");
  } else if (currentTime === 17) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour1.classList.add("past");
    hour2.classList.add("past");
    hour3.classList.add("past");
    hour4.classList.add("past");
    hour5.classList.add("present");
  }


  // Local Storage
  var getResponse9 = localStorage.getItem("hour-9");
  text9.textContent = getResponse9;

  var getResponse10 = localStorage.getItem("hour-10");
  text10.textContent = getResponse10;



  //Show Day 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});


