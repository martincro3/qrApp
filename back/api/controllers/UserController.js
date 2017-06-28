/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function (req, res){

        const data = req.body;

        // let username = req.param('user'),
        //     password = req.param('password');

        if (!data.username){
            return res.badRequest({err:'invalid username'});
        }
        if(!data.password){
            return res.badRequest({err:'invalid password'});
        }

        User.findOne({user: data.username})
        .then((user) => {
            if (!user) {
                return res.notFound('User not found!');
            }
            return res.ok('User logged in!');
        })
        .catch((err) => {
            return res.serverError('Somebody blew the server!');
        });
    }
};

