// module.exports = {


//   friendlyName: 'Register',


//   description: 'Register user.',


//   inputs: {

//     useremail: { type: 'string' ,unique:true},

//     password: { type: 'string' },

//     firstname:{type:'string'},

//     lastname:{type:'string'},
// /* 
//     gender:{type:'string'},

//     DateOfBirth:{type:'string'} */

//   },


//   exits: {

//     success: {
//       statusCode: 201,
//       description: 'New muna user created',
//     },
//     emailAlreadyInUse: {
//       statusCode: 400,
//       description: 'Email address already in use',
//     },
//     error: {
//       description: 'Something went wrong',
//     }

//   },


//   fn: async function (inputs,exits) {

//     try{

//     const newEmailAddress = inputs.useremail.toLowerCase();

//     const token = await sails.helpers.strings.random('url-friendly');
//     // All done.

//     let newUser = await User.create({
//       firstname: inputs.firstname,
//       lastname:inputs.lastname,
//       useremail:newEmailAddress,
//       password:inputs.password,
//       /* gender:inputs.gender,
//       DateOfBirth:inputs.DateOfBirth, */
//       emailProofToken: token,
//       emailProofTokenExpiresAt:
//         Date.now() + sails.config.custom.emailProofTokenTTL,
//     }).fetch();

//     const confirmLink = `${sails.config.custom.baseUrl}/user/confirm?token=${token}`;

//     const useremail = {
//       to: newUser.useremail,
//       subject: 'Confirm Your account',
//       template: 'confirm',
//       context: {
//         name: newUser.firstname,
//         confirmLink: confirmLink,
//       },
//     };
// await sails.helpers.sendMail(useremail);

// return exits.success({
//   message: `An account has been created for ${newUser.useremail} successfully. Check your email to verify`,
// });
//     }

//     catch(error){
//       if (error.code === 'E_UNIQUE') {

//         return exits.emailAlreadyInUse({
//           message: 'Oops :) an error occurred',
//           error: 'This email address already exits',
//         });

        
// }
//  return  exits.error({
//   message: 'Oops :) an error occurred',
//   error: error.message
//     })
//   }

//   }



// };





module.exports = {
  friendlyName: 'Register',

  description: 'Register user.',

  inputs: {
    firstname: {
      type: 'string',
      required: true,
    },
    lastname: {
      type: 'string',
      required: true,
    },
    gender: {
      type:'string',
      
  },

  dateOfBirth:{
    type:'string',
    
          },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },

  },

  exits: {
    success: {
      statusCode: 201,
      description: 'New muna user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'Email address already in use',
    },
    error: {
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {
    // All done.
    try {
      const newEmailAddress = inputs.email.toLowerCase();
      const token = await sails.helpers.strings.random('url-friendly');
      let newUser = await User.create({
        firstname: inputs.firstname,
        lastname:inputs.lastname,
        gender:inputs.gender,
        dateOfBirth:inputs.dateOfBirth,
        email: newEmailAddress,
        password: inputs.password,
        emailProofToken: token,
        emailProofTokenExpiresAt:
          Date.now() + sails.config.custom.emailProofTokenTTL,
      }).fetch();
      const confirmLink = `${sails.config.custom.baseUrl}/user/confirm?token=${token}`;
      const email = {
        to: newUser.email,
        subject: 'Confirm Your account',
        template: 'confirm',
        context: {
          name: newUser.firstname,
          confirmLink: confirmLink,
        },
      };

      await sails.helpers.sendMail(email);

      return exits.success({
        message: `An account has been created for ${newUser.email} successfully. Check your email to verify`,
      });
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return exits.emailAlreadyInUse({
          message: 'Oops :) an error occurred',
          error: 'This email address already exits',
        });
      }
      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  },
};




