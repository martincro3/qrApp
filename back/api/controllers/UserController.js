/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function (req, res){

        const requestIzPostmana = req.allParams();

        // let username = req.param('user'),
        //     password = req.param('password');

        if (!requestIzPostmana.username){
            return res.badRequest({err:'invalid username'});
        }
        if(!requestIzPostmana.password){
            return res.badRequest({err:'invalid password'});
        }

        User.findOne({user: requestIzPostmana.username})
        .then((userIzModela) => {
            if (!userIzModela) {
                return res.notFound('User not found!');
            }

            if (userIzModela.password === requestIzPostmana.password && userIzModela.user === requestIzPostmana.username ){
                    
                    return res.json({
                        isAdmin:userIzModela.isAdmin, username:userIzModela.user
                    })
                
            }

            else{
                return res.badRequest('Bad password');
            }
        })
        .catch((err) => {
            return res.serverError('Somebody blew the server!');
        });
    }
};