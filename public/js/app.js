class User {
    constructor(Name, Email, Password, Age, Money) {
        this.name = Name
        this.email = Email
        this.password = Password
        this.age = Age
        this.money = Money
    }
}

let home = prompt(`hello sir !  
do you have an account or do you want to sign-in
please enter log-in or sign-up`)
// while (home != "log-in" && home != "sign-up") {
//     home = prompt(`please enter log-in or sign-up`)
// }

if (home == "sign-up") {
    let userName = prompt(`please enter your full name`)
    while (userName == "") {
        userName = prompt(`please enter your full name`)
    }
    let userNameCharacter = userName.split(" ").join("")
    while (userNameCharacter.length <= 5) {
        userName = prompt(`the name should have more than 5 charachter`)
        userNameCharacter = userName.split(" ").join("")
    }
    
    let specialcharacter = Boolean(userName.match(/[A-Za-z]$/))

    while (specialcharacter!=true) {
        userName = prompt(`the name shouldn't have a special characters like !@#$%^&*.,<>/\'";:?`)
        specialcharacter = Boolean(userName.match(/[A-Za-z]$/))
    }
    let modifiedUserName = userName.trim()
    let modifiedUserName1 = modifiedUserName[0].toUpperCase() + modifiedUserName.slice(1, modifiedUserName.length)
    let modifiedUserName2 = modifiedUserName1.slice(0, modifiedUserName1.indexOf(" ") + 1) + modifiedUserName1[modifiedUserName1.indexOf(" ") + 1].toUpperCase() + modifiedUserName1.slice(modifiedUserName1.indexOf(" ") + 1 + 1, modifiedUserName.length)
    console.log(modifiedUserName2);








} else if (home == "log-in") {

}


















