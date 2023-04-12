const moment = require('moment');

const lib = {


    resData: (status, message, resDate, data)=>{
      return {status, message, resDate, data}
    },


    isEmpty(value){
      if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
        return true;
      }else{
        return false;
      }
    },

  };

  module.exports = lib;
