const LocalStrategy = require ('passport').Strategy
const bcrypt = require('bcrypt')
function initialize(passport) {
    const authenticateUser = (email,password,done) => {
        const user = getUserByEmail(email)
        if (user == null){
            return done (null,false,{message: 'no user with that email'})
        }
        try{
            if (await bcrypt.compare(passport,user.password)) {
                return done(null, user) 
            }else{
                return done(null, false , {message : 'mauvais mort de pass'})
            }

        }catch (e){
            return done (e)

        }
    }
    passport.use(new LocalStrategy({usernameField:'email'}),
    authenticateUser )
    passport.serializeUser((user,done) => { })
    passport.deserializeUser((id,done) => { })
}
module.exports = initialize