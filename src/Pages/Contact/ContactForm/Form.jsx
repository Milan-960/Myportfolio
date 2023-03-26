// import React, { useState } from "react";

// import m from "./Contact.module.scss";

// import emailjs from "emailjs-com";
// import Fade from "react-reveal/Fade";

// const DemoForm = () => {
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     comment: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     setInput({ ...input, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (validate()) {
//       console.log(input);

//       sendEmail(event);

//       setInput({
//         name: "",
//         email: "",
//         comment: "",
//       });

//       alert("😎 Thank you for your message 😎");
//     }
//   };

//   const validate = () => {
//     let newErrors = {};
//     let isValid = true;

//     // Validation logic here...

//     setErrors(newErrors);

//     return isValid;
//   };

//   const sendEmail = (event) => {
//     emailjs
//       .sendForm(
//         "service_jt9blkh",
//         "template_yvtmudm",
//         event.target,
//         "user_Svb5pgKvX7J029wvT9Jvs"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     event.target.reset();
//   };

//   return (
//     <div className={m.loginbox}>
//       <Fade right>
//         <form className={m.contactform} onSubmit={handleSubmit}>
//           <h2>Contact Me</h2>
//           <div className={m.userbox}>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={input.name}
//               onChange={handleChange}
//               placeholder="Enter name"
//               id="name"
//             />

//             <div className={m.text_danger}>{errors.name}</div>
//           </div>

//           <div className={m.userbox}>
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="text"
//               name="email"
//               value={input.email}
//               onChange={handleChange}
//               placeholder="Enter email"
//               id="email"
//             />

//             <div className={m.text_danger}>{errors.email}</div>
//           </div>

//           <div className={m.userbox}>
//             <label htmlFor="comment">Message:</label>
//             <input
//               name="comment"
//               value={input.comment}
//               onChange={handleChange}
//               placeholder="Enter Your Message"
//             />

//             <div className={m.text_danger}>{errors.comment}</div>
//           </div>

//           <button>
//             <input
//               type="submit"
//               value="Submit"
//               onSubmit={sendEmail}
//               className={m.btn}
//             />
//           </button>
//         </form>
//       </Fade>
//     </div>
//   );
// };

// export default DemoForm;

import React, { useState } from "react";
import emailjs from "emailjs-com";

import m from "./Contact.module.scss";

import Fade from "react-reveal/Fade";

const DemoForm = () => {
  const [input, setInput] = useState({
    from_name: "",
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInput({
      from_name: "",
      user_name: "",
      user_email: "",
      user_message: "",
    });

    emailjs
      .sendForm(
        "default_service",
        "template_yvtmudm",
        event.target,
        "user_Svb5pgKvX7J029wvT9Jvs"
      )
      .then(
        () => {
          alert("😎 Thank you for your message 😎");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <div className={m.loginbox}>
      <Fade right>
        <form className={m.contactform} id="form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <div className={m.userbox}>
            <label htmlFor="from_name">Subject</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              value={input.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={m.userbox}>
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={input.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={m.userbox}>
            <label htmlFor="user_email">Email</label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              value={input.user_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={m.userbox}>
            <label htmlFor="user_message">Message</label>
            <textarea
              id="user_message"
              name="user_message"
              rows="5"
              cols="33"
              value={input.user_message}
              onChange={handleChange}
              required
            />
          </div>

          <button>
            <input
              className={m.btn}
              type="submit"
              id="button"
              value="Send Email"
            />
          </button>
        </form>
      </Fade>
    </div>
  );
};

export default DemoForm;
