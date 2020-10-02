const isEmpty = (data) => {
  return data.trim() === "";
};

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regEx);
};

exports.validSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }

  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (isEmpty(data.handle)) errors.handle = "Must not be empty";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Password must match";

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

exports.validLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not be empty";

  if (isEmpty(data.password)) errors.password = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

exports.reduceUserInfo = (data) => {
  const userDetails = {};
  if (!isEmpty(data.bio)) userDetails.bio = data.bio;

  if (!isEmpty(data.location)) userDetails.location = data.location;

  if (!isEmpty(data.website)) {
    if (data.website.trim().substring(0, 4) == "http") {
      userDetails.website = data.website;
    } else {
      userDetails.website = `http://${data.website.trim()}`;
    }
  }
  return userDetails;
};
