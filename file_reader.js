const { read } = require("fs");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let age, firstName, lastName, hobbies;
fs.readFile("./age.txt", "utf-8")
  .then((data) => {
    age = data;
    return fs.readFile("./firstname.txt", "utf-8");
    // console.log(age);
  })
  .then((firstname) => {
    firstName = firstname;
    return fs.readFile("./lastname.txt", "utf-8");

    console.log(age, firstName);
  })
  .then((lastname) => {
    lastName = lastname;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((hobbies) => {
    hobbies = JSON.parse(hobbies);

    console.log(
      `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  })
  .catch((error) => {
    console.log(error);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readDataFiles() {
  try {
    const age = await fs.readFile("./age.txt", "utf-8");
    const firstName = await fs.readFile("./firstname.txt", "utf-8");
    const lastName = await fs.readFile("./lastname.txt", "utf-8");
    let hobbies = await fs.readFile("./hobbies.txt", "utf-8");
    const newHobbies = JSON.parse(hobbies);
    console.log(
      `${firstName} ${lastName} is ${age} years old and his hobbies are ${newHobbies[0]} and ${newHobbies[1]}`
    );
  } catch (error) {
    console.log(error);
  }
}

readDataFiles();
