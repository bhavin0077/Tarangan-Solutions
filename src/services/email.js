import { send, init } from "emailjs-com";

const serviceId = "service_d79wou8";
const templateId = "template_1t8khw5";
const userID = "9VxDaVNtj0dI7F2De";

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: content.from_name,
    // to_name: content.to_name,
    to_email: content.to_email,
    message: content.message,
    pages: content.pages,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line
export default {sendEmail} ;