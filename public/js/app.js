class User {
    constructor(Name, Email, Password, Age, Money) {
        this.name = Name
        this.email = Email
        this.password = Password
        this.age = Age
        this.money = Money
    }
}

let bankDataBase = []
while (true) {
    let lobby = prompt(`hello sir !  
do you have an account or do you want to sign-in
please enter log-in or sign-up`)

    if (lobby == "sign-up") {

        // * name start
        // let userName = prompt(`please enter your full name`)
        // while (userName == "") {
        //     userName = prompt(`please enter your full name`)
        // }
        // let userNameCharacter = userName.split(" ").join("")
        // while (userNameCharacter.length <= 5) {
        //     userName = prompt(`the name should have more than 5 charachter`)
        //     userNameCharacter = userName.split(" ").join("")
        // }

        // let specialcharacter = Boolean(userName.match(/[A-Za-z]$/))

        // while (specialcharacter!=true) {
        //     userName = prompt(`the name shouldn't have a special characters like !@#$%^&*.,<>/\'";:?`)
        //     specialcharacter = Boolean(userName.match(/[A-Za-z]$/))
        // }
        // let modifiedUserName = userName.trim()
        // let modifiedUserName1 = modifiedUserName[0].toUpperCase() + modifiedUserName.slice(1, modifiedUserName.length)
        // let modifiedUserName2 = modifiedUserName1.slice(0, modifiedUserName1.indexOf(" ") + 1) + modifiedUserName1[modifiedUserName1.indexOf(" ") + 1].toUpperCase() + modifiedUserName1.slice(modifiedUserName1.indexOf(" ") + 1 + 1, modifiedUserName.length)
        // console.log(modifiedUserName2);

        while (true) {
            let modifiedUserName2
            function username() {
                while (true) {
                    let userName = prompt(`please enter your full name`)
                    if (userName == "") {
                        alert("you must enter your name")
                        continue
                    }
                    let userNameCharacter = userName.split(" ").join("")
                    if (userNameCharacter.length <= 5) {
                        alert(`the name should have more than 5 charachter`)
                        continue
                    }
                    let specialcharacter = Boolean(userName.match(/[A-Za-z]$/))
                    if (specialcharacter != true) {
                        alert(`the name shouldn't have a special characters like !@#$%^&*.,<>/\'";:?`)
                        continue
                    }
                    let modifiedUserName = userName.trim()
                    let modifiedUserName1 = modifiedUserName[0].toUpperCase() + modifiedUserName.slice(1, modifiedUserName.length)
                    modifiedUserName2 = modifiedUserName1.slice(0, modifiedUserName1.indexOf(" ") + 1) + modifiedUserName1[modifiedUserName1.indexOf(" ") + 1].toUpperCase() + modifiedUserName1.slice(modifiedUserName1.indexOf(" ") + 1 + 1, modifiedUserName.length)
                    console.log(modifiedUserName2);
                    break
                }
            }
            username()
            let user1 = new User(modifiedUserName2)
            console.log(user1);

            // *name end

            // & email start
            // let userEmail = prompt(`enter your email`)
            // let modifiedEmail = userEmail.trim()
            // let spaceChecker = modifiedEmail.indexOf(" ") >= 0
            // while (spaceChecker == true) {
            //     userEmail = prompt(`the email shouldn't have space`)
            //     modifiedEmail = userEmail.trim()
            //     spaceChecker = modifiedEmail.indexOf(" ") >= 0
            // }
            // let emailToLowerCase = modifiedEmail.toLocaleLowerCase()
            // while (emailToLowerCase.length <= 10) {
            //     userEmail = prompt(`the emil should have more 10 charcters`)
            //     modifiedEmail = userEmail.trim()
            //     emailToLowerCase = modifiedEmail.toLocaleLowerCase()
            // }
            // console.log(emailToLowerCase);
            // // let emailspecialcharacter = Boolean(emailToLowerCase.match(/@@/))
            // // console.log(emailspecialcharacter);

            // while (emailspecialcharacter==true) {
            //     userEmail = prompt(`the email should have only one @`)
            // }
            let clientEmail
            function useremail(params) {
                while (true) {
                    let userEmail = prompt(`enter your email`)
                    let modifiedEmail = userEmail.trim()
                    let emailSpaceCheck = modifiedEmail.indexOf(" ") >= 0
                    if (emailSpaceCheck == true) {
                        alert("the email shouldn't have space between characters")
                        continue
                    }
                    let emailToLowerCase = modifiedEmail.toLocaleLowerCase()
                    if (emailToLowerCase.length <= 10) {
                        alert("the email should have more than 10 charcters")
                        continue
                    }
                    let emailspecialcharacter = Boolean(emailToLowerCase.match(/@@/))
                    if (emailspecialcharacter == true) {
                        alert("the email should have only one @")
                        continue
                    }
                    // if (condition) {
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! add the last condition here when u create the bank database to check if the email is used by another user
                    // }
                    clientEmail = emailToLowerCase
                    break
                }
            }
            useremail()
            user1.email = clientEmail
            console.log(user1);

            // & email end

            // todo age start
            let clientAge
            function userage(params) {
                while (true) {
                    let userAge = prompt(`enter your age`)
                    let ageSpaceTrim = userAge.trim()
                    let ageSpaceTrim2 = ageSpaceTrim.split(" ").join("")
                    let numberCheck = Boolean(userAge.match(/[A-Za-z]/))
                    if (numberCheck == true) {
                        alert("enter your age with numbers")
                        continue
                    }
                    if (ageSpaceTrim2.length > 2) {
                        alert("your age should have 2 numbers")
                        continue
                    }
                    clientAge = ageSpaceTrim2
                    break
                }
            }
            userage()
            user1.age = clientAge
            console.log(user1);

            // todo age end

            // ~~ password start
            let clientPassword
            while (true) {
                let userPassword = prompt(`enter a password`)
                let passwordSpaceTrim = userPassword.trim()
                let passwordSpaceCheck = passwordSpaceTrim.indexOf(" ") >= 0
                if (passwordSpaceCheck == true) {
                    alert("the password shouldn't have space between characters")
                    continue
                }
                let passwordSpecialCharacterCheck = Boolean(passwordSpaceTrim.match(/[@ # + _ $ ^ * /]/))
                if (passwordSpecialCharacterCheck == false) {
                    alert("you should add a special charactere to the password")
                    continue
                }
                if (passwordSpaceTrim.length < 7) {
                    alert("the password should have at least 7 characters")
                    continue
                }
                clientPassword = passwordSpaceTrim
                break
            }
            // ~~ password end

            // ^^ account comfirmation start
            let passwordComfirmation = prompt("comfirm your password")
            if (clientPassword == passwordComfirmation) {
                user1.password = passwordComfirmation
                user1.money = 1000
                bankDataBase = [user1]
                console.log(bankDataBase);
                console.log(user1);
            } else {
                continue
            }
            // ^^ account comfirmation end
            break
        }

        continue



        // !!!!!!!! part 2


    } else if (lobby == "log-in") {
        let answer
        let enterEmail = prompt(`welcome back
        enter your email`)
        let userMoney
        for (let index = 0; index < bankDataBase.length; index++) {
            const element = bankDataBase[index];
            userMoney = element.money
            if (enterEmail == element.email) {
                alert(`welcome back ${element.name}`)
            } else {
                answer = false
            }
        }
        if (answer == false) {
            continue
        }
        let enterPassword = prompt(`enter your password please`)
        for (let index = 0; index < bankDataBase.length; index++) {
            const element = bankDataBase[index];
            if (enterPassword == element.password) {
                alert(`welcome back ${element.name}`)
            } else {
                answer = false
            }
        }
        if (answer == false) {
            continue
        }
        let connect = []
        connect++
        for (let index = 0; index < connect.length; index++) {
            const element = connect[index];
            console.log(element);
            console.log(connect);
        }
        let userChoice = prompt(`wanna somthing else
        options : log-out / change password `)
        if (userChoice == "change password") {
            let enterYourEmail = prompt("enter your previous email")
            for (let index = 0; index < bankDataBase.length; index++) {
                const element = bankDataBase[index];
                if (enterYourEmail == element.email) {
                    let newPassword
                    while (true) {
                        let userPassword = prompt(`enter your new password`)
                        let passwordSpaceTrim = userPassword.trim()
                        let passwordSpaceCheck = passwordSpaceTrim.indexOf(" ") >= 0
                        if (passwordSpaceCheck == true) {
                            alert("the password shouldn't have space between characters")
                            continue
                        }
                        let passwordSpecialCharacterCheck = Boolean(passwordSpaceTrim.match(/[@ # + _ $ ^ * /]/))
                        if (passwordSpecialCharacterCheck == false) {
                            alert("you should add a special charactere to the password")
                            continue
                        }
                        if (passwordSpaceTrim.length < 7) {
                            alert("the password should have at least 7 characters")
                            continue
                        }
                        newPassword = passwordSpaceTrim
                        break
                    }
                    element.password = newPassword
                    console.log(element);
                }
            }
        } else if (userChoice == "log-out") {
            continue
        }
        alert(`this is your money ${userMoney}`)
        let history = []
        while (true) {
            let withdraw = parseInt(prompt(`how much do u want to withdraw`))
            userMoney -= withdraw
            console.log(userMoney);
            history.push(`the user withdrawn ${withdraw}`)
            alert(`you have ${userMoney} right now`);
            if (withdraw > userMoney) {
                alert(`you can't withdraw this amount`)
                continue
            }
            break
        }
        while (true) {
            let deposit = parseInt(prompt(`how much do u want to deposit 
        (you cant deposit more than 1000)`))
            userMoney += deposit
            console.log(userMoney);
            history.push(`the user added ${deposit} to his account`)
            alert(`you have ${userMoney} right now`);
            if (deposit > 1000) {
                alert(`you can't deposit this amount`)
                continue
            }
            break
        }
        while (true) {
            let loan = parseInt(prompt(`how much do you want 
            (you can take up to 20% of your money)`))
            userMoney += loan
            console.log(userMoney);
            history.push(`the user toke a loan of ${loan} `)
            if (loan < userMoney * 0.2) {
                alert(`you can't get this amount`)
                continue
            }
            break
        }
        console.log(history);
    }
    break
}


















