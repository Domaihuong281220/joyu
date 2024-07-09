/** @format */

export const isValidInputCatering = (formData, toast) => {
  const regexPhoneNumber = /^\d{10}$/;

  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.name) {
    toast.error("Name is required!");
    return false;
  }
  if (!formData.phone) {
    toast.error("phone is required!");
    return false;
  }
  if (!regexPhoneNumber.test(formData.phone)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }

  if (!formData.email) {
    toast.error("Email is required!");
    return false;
  }
  if (!regxEmail.test(formData.email)) {
    toast.info("Please enter a valid email!");
    return false;
  }
  if (!formData.date) {
    toast.error("Date is required!");
    return false;
  }
  if (!formData.type) {
    toast.error("Type is required!");
    return false;
  }
  if (!formData.location) {
    toast.error("Location is required!");
    return false;
  }

  return true;
};

export const isValidInputsignUpFooter = (formData, toast) => {
  const regxEmail = /\S+@\S+\.\S+/;

  if (!formData.email) {
    toast.error("Email is required!");
    return false;
  }
  if (!regxEmail.test(formData.email)) {
    toast.info("Please enter a valid email!");
    return false;
  }

  return true;
};

export const isValidInputFrachising = (formData, toast) => {
  const regexPhoneNumber = /^\d{10}$/;

  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.firstName) {
    toast.error("First name is required!");
    return false;
  }
  if (!formData.lastName) {
    toast.error("Last name is required!");
    return false;
  }
  if (!formData.address) {
    toast.error("Address is required!");
    return false;
  }
  if (!formData.stateProvince) {
    toast.error("State / Province is required!");
    return false;
  }
  if (!formData.businessBackground) {
    toast.error("Bussiness background is required!");
    return false;
  }
  if (!formData.email) {
    toast.error("Email is required!");
    return false;
  }
  if (!regxEmail.test(formData.email)) {
    toast.info("Please enter a valid email!");
    return false;
  }
  if (!formData.mobile) {
    toast.error("Phone is required!");
    return false;
  }
  if (!regexPhoneNumber.test(formData.mobile)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }
  if (!formData.netWorth) {
    toast.error("Net worth is required!");
    return false;
  }

  return true;
};

export const isValidInputsUser = (formData, toast) => {
  const regexPhoneNumber = /^\d{10}$/;
  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.name) {
    toast.error("name is required");
    return false;
  }

  if (!formData.phone) {
    toast.error("phone is required");
    return false;
  }
  if (!regexPhoneNumber.test(formData.phonenumber)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }
  if (!formData.email) {
    toast.error("email is required");
    return false;
  }
  if (!regxEmail.test(formData.email)) {
    toast.info("please enter a valid email ");
    return false;
  }
  if (!formData.address) {
    toast.error("address is required");
    return false;
  }
  if (!formData.password) {
    toast.error("password is required");
    return false;
  }

  return true;
};
export const isValidInputCategory = (formData, toast) => {
  if (!formData.name) {
    toast.error("name category is required");
    return false;
  }
  return true;
};
export const isValidInputProduct = (formData, toast) => {
  if (!formData.name) {
    toast.error("Name product is required");
    return false;
  }
  if (!formData.description) {
    toast.error("Description is required ");
    return false;
  }

  if (!formData.price) {
    toast.error("Price is required ");
    return false;
  }

  if (!formData.categoryID) {
    toast.error("Category is required ");
    return false;
  }

  return true;
};

export const isValidNews = (formData, toast) => {
  var regxPrice = new RegExp("^[0-9]$");
  if (!formData.name) {
    toast.error("Event name is required");
    return false;
  }

  if (!formData.shortDescription) {
    toast.error("Short description is required");
    return false;
  }
  if (!formData.LongDescription) {
    toast.error("Long Description is required");
    return false;
  }

  return true;
};

export const isValidCreateNewUser = (formData, toast) => {
  const regexPhoneNumber = /^\d{10}$/;
  if (!formData.name) {
    toast.error("Name is required");
    return false;
  }
  if (!formData.username) {
    toast.error("Username is required");
    return false;
  }
  if (!formData.phonenumber) {
    toast.error("Phone is required");
    return false;
  }
  if (!regexPhoneNumber.test(formData.phonenumber)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }

  if (!formData.password) {
    toast.error("password is required");
    return false;
  }

  return true;
};
export const isValidInputCreateLocation = (formData, toast) => {
  const regexPhoneNumber = /^\d{10}$/;
  if (!formData.name) {
    toast.error(" Loaction name is required!");
    return false;
  }
  if (!formData.address) {
    toast.error("Location detail required!");
    return false;
  }
  if (!formData.phone) {
    toast.error("Phone Number is required!");
    return false;
  }
  if (!regexPhoneNumber.test(formData.phone)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }

  return true;
};

export const isValidInputJobs = (formData, toast) => {
  if (!formData.position) {
    toast.error("Name Job is required");
    return false;
  }

  if (!formData.description) {
    toast.error("description is required ");
    return false;
  }

  if (!formData.responsibility) {
    toast.error("responsibility is required ");
    return false;
  }

  return true;
};

export const isValidInputAddress = (formData, toast) => {
  if (!formData.address) {
    toast.error("Address is required");
    return false;
  }

  return true;
};

export const isValidInputNews = (formData, toast) => {
  if (!formData.title) {
    toast.error("Name News is required");
    return false;
  }
  if (!formData.longdescription) {
    toast.error("Long description is required");
    return false;
  }
  if (!formData.shortdescription) {
    toast.error("Short description is required");
    return false;
  }

  return true;
};
