// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
"use strict"

// This function adds up the natural numbers
function calculate() {
  let numberValue = parseFloat(document.getElementById("number").value)
  let text = ""
  let number = 0

  // input
  for (let naturalNumber = 1; naturalNumber <= numberValue; naturalNumber++) {
    number += naturalNumber
  }
  // output
  text += "The sum of natural numbers is " + number + "<br>"
  document.getElementById("results").innerHTML = text
}
