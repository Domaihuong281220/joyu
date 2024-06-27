export const isValidInputCatering = (formData, toast) => {
  // const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  const phoneRegex =
    /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$|^(\+84\s?)?(0?\d{9,10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;

  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.name) {
    toast.error("Name is required!");
    return false;
  }
  if (!formData.phone) {
    toast.error("phone is required!");
    return false;
  }
  if (!phoneRegex.test(formData.phone)) {
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
  const phoneRegex =
    /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$|^(\+84\s?)?(0?\d{9,10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;

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
  if (!phoneRegex.test(formData.mobile)) {
    toast.info("Please enter a unique valid phone number!");
    return false;
  }
  if (!formData.netWorth) {
    toast.error("Net worth is required!");
    return false;
  }

  return true;
};
