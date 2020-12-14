'use strict'

let token;
let user ;
class AuthController {

  configip({view}){
    return view.render("configip",{token,user});
}
conNewAp({view}){
  return view.render("conNewAp",{token,user});
}
status({view}){
  return view.render("status",{token,user});
}
}

module.exports = AuthController
