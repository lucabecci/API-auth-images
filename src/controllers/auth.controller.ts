import { Request, Response, Handler } from "express";
import User, { IUser } from '../models/User'
import jwt from 'jsonwebtoken'
import { v4 as uuidV4 } from "uuid";
import config from '../config/config'
import Check from '../helpers/checks'

class AuthController {
  _check: Check
  constructor(){
    this._check = new Check 
  }
  
  public createToken = (user: IUser): string => {
    return jwt.sign({id: user.id}, config.JWTsecret, {
      expiresIn: 86400
    })
  }
  
  public login: Handler = async(req: Request, res: Response): Promise<Response> => {
    const {email, password} = req.body
    if(!email || !password){
      return res.status(400).json({
        success: false,
        msg: 'Please send email and password'
      })
    }
    const user = await User.findOne({email: email})
    if(!user){
      return res.status(400).json({
        success: false,
        msg: 'Email doesnt exists'
      })
    }
    const passwordMatch = await user.comparePassword(password)
    if(passwordMatch){
      return res.status(200).json({
        success: true,
        token: this.createToken(user)
      })
    }

    return res.status(400).json({
      success: false,
      msg: 'Password incorrect, please insert a valid password'
    })
  };
  
  public register: Handler = async(req: Request, res: Response): Promise<Response> => {
    const {name, username, email, password, age, from} = req.body
    const campsChecked = this._check.registerCheck(name, username, email, password, age, from)
    if(campsChecked){
      return res.status(400).json({
        success: false,
        msg: 'Please send all camps'
      })
    }
    const userChecked = await User.findOne({email: email})
    if(userChecked){
      return res.status(400).json({
        success: false,
        msg: 'Email already exists, try again with your correct email'
      })
    }
    const newUser = new User({
      name, 
      username, 
      email, 
      password, 
      age, 
      from,
      idImages: uuidV4()
    })
    const userSaved = await newUser.save()
    return res.status(200).json({
      success: true,
      userSaved
    })
  };
}
  
  export default AuthController;
  