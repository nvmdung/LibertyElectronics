import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'message') setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) {
      newErrors['username'] = 'Please enter your username.';
    }
    // Perform email validation logic here

    if (!email) {
      newErrors['email'] = 'Please enter your email.';
    }
    // Perform other validations if necessary

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with handling the contact form submission
      const formData = { username, email, message };
      console.log(formData);
      alert("Thank you for send us message, we will contact you soon !");

      // Reset form fields after submission
      setUsername('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  // const [message, setMessage] = useState('');
  // const [messageSent, setMessageSent] = useState(false);

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  const sendMessage = () => {
    // Gửi tin nhắn ở đây (có thể làm qua API hoặc các xử lý khác)
    // Ví dụ: 
    // sendFunction(message)
    //   .then(() => {
    //     setMessageSent(true);
    //   })
    //   .catch((error) => {
    //     console.error('Gửi tin nhắn không thành công:', error);
    //   });

    // Trong ví dụ này, mình sẽ chỉ đặt trạng thái thành đã gửi thành công sau 2 giây
    setTimeout(() => {
      setMessageSent(false);
    }, 2000);
  };
  };

  return (
    <section>
      <div>
        <h3>Contact</h3>
        <form className="form" onSubmit={handleSubmit}>
          <table className="contact">
            <h2>Contact Us</h2>
            <tr>
              <td>
                <input
                  className="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                />
                {errors.username && <div className="text-danger">{errors.username}</div>}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  className="textarea"
                  value={message}
                  placeholder="Tell us something"
                  onChange={handleChange}
                  name="message"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button" type="submit" >Send</button>
                {messageSent && <p>Tin nhắn đã được gửi thành công!</p>}
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class ="google">
        <h3>Location</h3>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2662594211056!2d106.6798453104622!3d10.790907689314379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702018999327!5m2!1svi!2s" title="Google Map"
          width="1200"
          height="1000"
          loading="lazy"
          allowFullScreen
          ></iframe>
      </div>
    </section>
  );
}

export default Contact;
