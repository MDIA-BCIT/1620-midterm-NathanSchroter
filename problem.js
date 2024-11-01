/*


// Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

// - If the user's input matches the password exactly, log out "Access Granted!"
// - If the user's input does not match, log out "Access Denied!"
// - If the user's input is "forgot", log out "Here is a hint"
// - If the user's input is "reset", log out "Let's reset your account"

// Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

// CHALLENGE
// - If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
// - If the password is less than 5 characters, log out "Your password is too short!".

/**
 * so what i did is make a function called checkPassword as the function name and made parameters password and userinput to check the passowrd and parameter forgot or reset if they had to reset or had forgotten their password
 * What my equation is saying if the user inpput === the password the password works if not than else statment to denie access to the user
 * I made 2 parameter to make it easier formyself off forgot and reset. if the user input is forgot they get a message is to log out and "here is a hint"
 * if the user input is == to reset the user will get a message log out and "lets reset your account"
 * Challenge, so if the user input is either reset, or forgot and not password works they will also recieve a message "This password you set should not be used because it glitches the system"
 * i intilized password to 5 because when a user types in characters 5 or less they will recieve a message saying : "your password is too short"
 * after all that i call the function checkPassword and put in a user input to see if will accept my function
 */

let password = 6;
function checkPassword(password,userInput,forgot,reset) {
    if (userInput.length === password){
         console.log("Password Works")
    } else {
        console.log("Access Denied")
} if (userInput === forgot){
    console.log("Log out" + "Here is a hint")
} if (userInput === reset){
    console.log("Log out" + "Let's reset your account")
} if(password === forgot && reset){
 console.log("This password you set should not be used because it glitches the system")
} if (password <= 5){
    console.log("log out" + "your password is too short")
}
checkPassword("nathan99")

}
