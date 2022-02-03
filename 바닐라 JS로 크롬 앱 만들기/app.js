/**
 * isNaN = Not a Number 숫자가 아니라면 true를 리턴, 숫자이면 false를 리턴
 */
const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("Please write a number");
}
else {
    console.log("Thank you for writing your age.");
}