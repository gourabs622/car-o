import React from 'react'

export let User_DB_passenger = [
  {
    name: "Pankaj",
    email : "pankaj123@gmail.com",
    password : "Yota123", 
  },
  {
    name: "Gourab",
    email : "gourab123@gmail.com",
    password : "Gourab123@", 
  },
  {
    name: "Pranesh",
    email : "pranesh123@gmail.com",
    password : "Pranesh123@", 
  },
  

]



export const addPassenger = (name, email, password)=>{
  let newpass = User_DB_passenger;
  this.User_DB_passenger = [...newpass, {
    name : name,
    email :  email,
    password : password
  }]
}