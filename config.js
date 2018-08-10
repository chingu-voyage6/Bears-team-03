let env = process.env.NODE_ENV || 'development';


if(env === 'development'){
    process.env.PORT = 4000
    process.env.MONGODB_URI = 'mongodb://localhost:27017/ExpenseApp'
}else if(env == 'test'){
    process.env.PORT = 4000
    process.env.MONGODB_URI = 'mongodb://localhost:27017/ExpenseAppTest'
}else if(env == 'production'){
  process.env.MONGODB_URI = 'mongodb://<dbuser>:<dbpassword>@ds219432.mlab.com:19432/expenseapp'
}