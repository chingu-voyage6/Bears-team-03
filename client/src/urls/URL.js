import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV

const envs = {
    'production': {
        USER_URL: process.env.USER_URL,
        EXPENSE_URL: process.env.EXPENSE_URL,
    },
    'others': {
        USER_URL: 'http://localhost:4000/user',
        EXPENSE_URL: 'http://localhost:4000/expense'
    }
}


export function returnUrls(){
      if (env !== 'production') {
        return envs.others
      }else{
        return envs.production
      }  
}