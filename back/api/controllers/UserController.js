/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function (req, res){

        const postmanRequest = req.allParams();

        // let username = req.param('user'),
        //     password = req.param('password');

        if (!postmanRequest.username){
            return res.badRequest({err:'invalid username'});
        }
        if(!postmanRequest.password){
            return res.badRequest({err:'invalid password'});
        }

        User.findOne({user: postmanRequest.username})
        .then((userIzModela) => {
            if (!userIzModela) {
                return res.notFound('User not found!');
            }

            if (userIzModela.password === postmanRequest.password) return res.ok('User logged in!');

            return res.badRequest('Bad password');
        })
        .catch((err) => {
            return res.serverError('Somebody blew the server!');
        });
    }
};

