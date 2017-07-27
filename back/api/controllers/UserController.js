/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function (req, res) {

        const request = req.allParams();

        // let username = req.param('user'),
        //     password = req.param('password');

        if (!request.username) {
            return res.badRequest({ err: 'invalid username' });
        }
        if (!request.password) {
            return res.badRequest({ err: 'invalid password' });
        }


       

        User.update({ user: request.username }, { isLogged: true })
            .exec(function (err, updatedUser) {
                if (err) return res.negotiate(err);
                if (!updatedUser) return res.notFound('User not found!');
                return res.json({
                    // isAdmin: updatedUser.isAdmin,
                    // isLogged: updatedUser.isLogged
                    updatedUser
                });
            })
       

    }
};

