// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'

function factorEquation() {

 // input
  let firstNumber = parseFloat(document.getElementById("numberone").value)
 

  // process
  while (firstNumber >= 1) {
    answer = answer + secondNumber
  firstNumber = firstNumber - 1;
  }
  // output
  document.getElementById("results").innerHTML =
  'The number is: ' + answer
}
