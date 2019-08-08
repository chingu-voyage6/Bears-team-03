require('dotenv').config();

const env = process.env.NODE_ENV || "development";


const setConfig = () => {
  switch (env) {
    case "test":
      return {
        port: process.env.PORT || 4000,
        database: process.env.MONGODB_URI,
        jwtSecret: process.env.JWT_SECRET
      };
    case "production":
      return {
        database: process.env.MONGODB_URI,
        jwtSecret: process.env.JWT_SECRET
      }
    default:
      return {
        port: process.env.PORT || 4000,
        database: process.env.MONGODB_URI,
        jwtSecret: process.env.JWT_SECRET
      }
  }
};

module.exports = {
    setConfig,
};
