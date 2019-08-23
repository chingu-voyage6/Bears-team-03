
let USER_URL;
let EXPENSE_URL;

if ( process.env.NODE_ENV === 'production' ){
    console.log("production figures ", process.env.USER_URL, process.env.USER_URL)
    USER_URL = process.env.USER_URL 
    EXPENSE_URL = process.env.EXPENSE_URL 
}else{
    console.log("not production")
    USER_URL = 'http://localhost:4000/user'
    EXPENSE_URL = 'http://localhost:4000/expense'
}


module.exports = {
    USER_URL,
    EXPENSE_URL,
}