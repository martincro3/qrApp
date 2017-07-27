/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {

    user : { type: 'string' },
    email : { type: 'string' },
    password: { type: 'string'},
    content: {type:'string'},
    isLogged: {type:'boolean',
              defaultsTo:false}, 
    isAdmin: {type:'boolean',
              defaultsTo:false}
    
    

    

  }
};

