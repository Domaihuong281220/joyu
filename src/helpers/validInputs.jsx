/** @format */

export const isValidInputsUser = (formData, toast) => {
  const vietnamPhoneNumberRegex = /^0\d{9,10}$/;
  const usPhoneNumberRegex = /^(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}$/;
  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.name) {
    toast.error("name is required");
    return false;
  }

  if (!formData.phone) {
    toast.error("phone is required");
    return false;
  }
  if (
   !vietnamPhoneNumberRegex.test(formData.phonenumber) ||
    !usPhoneNumberRegex.test(formData.phonenumber)
  ) {
    toast.info(
      "please enter a unique valid phone number and must be more than 9 characters and less than 15 characters"
    );
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
  var regxPrice = new RegExp("^[0-9]$");
  if (!formData.name) {
    toast.error("name category is required");
    return false;
  }

  if (!formData.price) {
    toast.error("price is required ");
    return false;
  }
  if (!regxPrice.test(formData.price)) {
    toast.info("please enter price only number");
    return false;
  }
  if (!formData.description) {
    toast.error("description is required ");
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
  const vietnamPhoneNumberRegex = /^0\d{9,10}$/;
  const usPhoneNumberRegex = /^(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}$/;

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
  if (
    !vietnamPhoneNumberRegex.test(formData.phonenumber) ||
    !usPhoneNumberRegex.test(formData.phonenumber)
  ) {
    toast.info(
      "please enter a unique valid phone number and must be more than 9 characters and less than 15 characters"
    );
    return false;
  }

  if (!formData.password) {
    toast.error("password is required");
    return false;
  }

  return true;
};
export const isValidInputCreateLocation = (formData, toast) => {
  const vietnamPhoneNumberRegex = /^0\d{9,10}$/;
  const usPhoneNumberRegex = /^(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}$/;
  // regexPhoneNumber = /^(0\d{9,10}|(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4})$/;
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
  if (
    !vietnamPhoneNumberRegex.test(formData.phone) ||
    !usPhoneNumberRegex.test(formData.phone)
  ) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }

  return true;
};
