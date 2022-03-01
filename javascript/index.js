let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = salaries =>{
    return salaries.John + salaries.Ann + salaries.Pete
}
console.log("1/")
console.log(sum(salaries))
console.log("2/")
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(obj){
    obj.width *= 2;
    obj.height *= 2;
}
multiplyNumeric(menu)
console.log(menu)
console.log("3/")
function checkEmailId(str){
    if(str.indexOf("@") !== -1 && str.indexOf(".") !== -1){
        if(str.indexOf("@") < str.indexOf(".") && str.indexOf(".") - str.indexOf("@") > 1){
            return true
        }
    }
    return false
}

let email = "h@h.com"
console.log(`testing ${email}: ` + checkEmailId(email))
let email1 = "h@.com"
console.log(`testing ${email1}: ` + checkEmailId(email1))
let email2 = "h.com"
console.log(`testing ${email2}: ` + checkEmailId(email2))
let email3 = "h@com"
console.log(`testing ${email3}: ` + checkEmailId(email3))
let email4 = "hcom"
console.log(`testing ${email4}: ` + checkEmailId(email4))

console.log("4/")

let original = "What I'd like to tell on this topic is:";
console.log(`Original string is ${original}`);
function truncate(str, maxlength){
    return str.substring(0, maxlength) + "...";
}
console.log("After truncated with max length is 20: " + truncate(original, 20))

let list = ["James", "Brennie"]
console.log("5/")
console.log("After 1st operation: " + list)
list.push("Robert")
console.log("After 2nd operation: " + list)
list.splice(Math.floor(list.length / 2) , 1, "Calvin")
console.log("After 3rd operation: " + list)
list.shift()
console.log("After 4th operation: " + list)
list.unshift("Regal")
list.unshift("Rose")
console.log("After 5th operation: " + list)