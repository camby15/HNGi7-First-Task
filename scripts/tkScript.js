
var fullName = 'Nwankwu Tochukwu'
var HNGID = 'HNG-02704'
var language = 'javascript'
var email = 'tochukwuchinedu21@gmail.com'

let details = {
    fullName,
    HNGID,
    language,
    email
}

const outputFunction = ({fullName, HNGID, language}) => {
    console.log('Hello World, this is ' + fullName + ' with HNGi7 ID ' + HNGID + ' using ' + language + ' for stage 2 task')
}

const outputEmail = ({email}) => {
    console.log(email)
}

outputFunction(details)
outputEmail(details)