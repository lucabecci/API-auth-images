import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt'
import config from '../config/config'
import User from '../models/User'

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWTsecret
}

export default new Strategy(opts, async(payload, done) => {
    try{
        const user = await User.findById(payload.id)
        if(user){
            return done(null, user.id)
        }
        return done(null, false)
    }
    catch(e){
        console.log(e)
    }
})