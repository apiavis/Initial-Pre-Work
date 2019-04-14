/*Author: Alicia Piavis
  Title: Profile Lookup
  Date: 4/14/2019
  Project: Techtonic Pre-Work
  Summary: I learned how to implement a JS for loop along with if/else
    statements to build a small program that looks up information about contacts
    from an array. The program can return the value of a property or say that a
    contact or property does not exist.*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
