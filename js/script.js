// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
"use strict"

function calculate() {
  let firstNumber = parseInt(document.getElementById("numberone").value)
  let secondNumber = parseInt(document.getElementById("numbertwo").value)
  let product = 1
  let text = ""

  if (firstNumber > secondNumber) {
    let temp = firstNumber
    firstNumber = secondNumber
    secondNumber = temp
  }

  let temp1 = firstNumber
  while (temp1 >= 2) {
    temp1 = temp1 - 2
  }
  let firstIsEven = temp1 === 0

  let temp2 = secondNumber
  while (temp2 >= 2) {
    temp2 = temp2 - 2
  }
  let secondIsEven = temp2 === 0

  if (firstIsEven && secondIsEven) {
    let currentNumber = firstNumber
    while (currentNumber <= secondNumber) {
      let temp = currentNumber
      while (temp >= 2) {
        temp = temp - 2
      }
      if (temp === 0) {
        product = product * currentNumber
      }
      currentNumber = currentNumber + 1
    }
    text = "Product of even numbers: " + product
  } else if (!firstIsEven && !secondIsEven) {
    let currentNumber = firstNumber
    while (currentNumber <= secondNumber) {
      let temp = currentNumber
      while (temp >= 2) {
        temp = temp - 2
      }
      if (temp !== 0) {
        product = product * currentNumber
      }
      currentNumber = currentNumber + 1
    }
    text = "Product of odd numbers: " + product
  } else {
    text = "Please enter either two even numbers or two odd numbers."
  }

  document.getElementById("results").innerHTML = text
}
