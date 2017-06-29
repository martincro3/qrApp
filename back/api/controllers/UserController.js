/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function (req, res){

        const requestIzpostmana = req.allParams();

        // let username = req.param('user'),
        //     password = req.param('password');

        if (!requestIzpostmana.username){
            return res.badRequest({err:'invalid username'});
        }
        if(!requestIzpostmana.password){
            return res.badRequest({err:'invalid password'});
        }

        User.findOne({user: requestIzpostmana.username})
        .then((userIzModela) => {
            if (!userIzModela) {
                return res.notFound('User not found!');
            }

            if (userIzModela.password === requestIzpostmana.password) return res.ok('User logged in!');

            return res.badRequest('Bad password');
        })
        .catch((err) => {
            return res.serverError('Somebody blew the server!');
        });
    }
};

