// /* /**
//  * User.js
//  *
//  * @description :: A model definition represents a database table/collection.
//  * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
//  */

// module.exports = {
//   tableName:"user",

//   attributes: {

//     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
//     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
//     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

//     useremail: { type: 'string' ,unique:true},

//     password: { type: 'string' },

//     firstname:{type:'string'},

//     lastname:{type:'string'},

//     gender:{type:'string'},

//     DateOfBirth:{type:'string'},

//     emailStatus: {
//       type: 'string',
//       isIn: ['unconfirmed', 'confirmed'],
//       defaultsTo: 'unconfirmed',
//       columnName: 'email_status'
//     },
//     emailProofToken: {
//       type: 'string',
//       description: 'This will be used in the account verification email',
//       columnName: 'email_proof_token'
//     },

//     emailProofTokenExpiresAt: {
//       type: 'number',
//       description: 'time in milliseconds representing when the emailProofToken will expire',
//       columnName: 'email_proof_token_expires_at'
//     },

//     passwordResetToken: {
//       type: 'string',
//       description:
//         'A unique token used to verify the user\'s identity when recovering a password.',
//       columnName: 'password_reset_token',
//     },
//     passwordResetTokenExpiresAt: {
//       type: 'number',
//       description:
//         'A timestamp representing the moment when this user\'s `passwordResetToken` will expire (or 0 if the user currently has no such token).',
//       example: 1508944074211,
//       columnName: 'password_reset_token_expires_at',
//     },

//     tasklist: {
//       collection: 'TaskList',
//       via: 'user'
//   }

//     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
//     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
//     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


//     //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
//     //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
//     //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

//   },

//   customToJSON: function () {
//     return _.omit(this, ["password"]);
//   },

//   // LIFE CYCLE
// beforeCreate: async function (values, proceed) {
//   // Hash password
//   const hashedPassword = await sails.helpers.passwords.hashPassword(
//     values.password
//   );
//   values.password = hashedPassword;
//   return proceed();
// },

// };

 

module.exports = {
  tableName: 'user',
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    firstname: {
      type: 'string',
      required: true,
      columnName: 'firstname',
    },

     lastname: {
      type: 'string',
      required: true,
      columnName: 'lastname',
    }, 
    gender: {
      type:'string',
      columnName:'gender'
  },

  dateOfBirth:{
    type:'string',
    columnName:'dateOfBirth'
          },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    emailStatus: {
      type: 'string',
      isIn: ['unconfirmed', 'confirmed'],
      defaultsTo: 'unconfirmed',
      columnName: 'email_status',
    },
    emailProofToken: {
      type: 'string',
      description: 'This will be used in the account verification email',
      columnName: 'email_proof_token',
    },
    emailProofTokenExpiresAt: {
      type: 'number',
      description:
        'time in milliseconds representing when the emailProofToken will expire',
      columnName: 'email_proof_token_expires_at',
    },
    password: {
      type: 'string',
      required: true,
    },
    passwordResetToken: {
      type: 'string',
      description:
        'A unique token used to verify the user\'s identity when recovering a password.',
      columnName: 'password_reset_token',
    },

    passwordResetTokenExpiresAt: {
      type: 'number',
      description:
        'A timestamp representing the moment when this user\'s `passwordResetToken` will expire (or 0 if the user currently has no such token).',
      example: 1508944074211,
      columnName: 'password_reset_token_expires_at',
    },
    tasklist: {
        collection: 'TaskList',
        via: 'user'
       },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  // LIFE CYCLE
  beforeCreate: async function (values, proceed) {
    // Hash password
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;
    return proceed();
  },
};
