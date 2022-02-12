const fullName = (name,email) => {
  return `${name} mail ${email}`;
};

const mail = (mail) => {
  return `Your mail id : ${mail}`;
};
exports.arrnum = (mess) => {
  return mess;
};
  
module.exports ={
  fullName,
  mail,
};