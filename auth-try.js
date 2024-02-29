const bcrypt = require("bcrypt");

function signUpOld(username, email, password) {
  bcrypt.hash(password, 10, function (err, hash) {
    console.log({ hash });

    let data = {
      username: username,
      email,
      password: hash,
    };

    console.log(data);
  });
}

function loginOld(username, email, password) {
  let hash = "$2b$10$2atdEZ8YTrVYLU3tgLpy/.ptdTnzrY7Vq9NTtda3ejLRD4NtfwTx6";
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      console.log("login success");
    } else {
      console.log("invalid....");
    }
  });
}
signUpOld("ram", "ram@gmail.com", "ram123");

loginOld("ram", "ram@gmail.com", "ram123");

/* common js */
/* default export : only one default export per module:js page*/
// module.exports = signUp; this will replace above code

//named export

const login = () => {
  console.log("login");
};
const signup = () => {
  console.log("sigup");
};

module.exports = {
  login: login,
  signup: signup,
};
