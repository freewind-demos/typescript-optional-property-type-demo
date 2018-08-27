class User {
    email?: string
}

const user = new User()
console.log(typeof(user.email))

user.email = "abc@test.com"
console.log(typeof(user.email))