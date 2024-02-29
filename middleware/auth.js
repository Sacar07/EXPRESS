let LoggedIn = true;
let hasValidRole = true;

function checkAuthentication(req, res, next) {
  if (!LoggedIn) {
    return res.status(401).send();
  }
  next(); //next upcoming valid middleware
  console.log("checkAuthentication");
}

function checkValidRole(req, res, next) {
  if (!hasValidRole) {
    return res.status(403).send();
  }
  next();
}

module.exports = {
  checkAuthentication,
  checkValidRole,
};
