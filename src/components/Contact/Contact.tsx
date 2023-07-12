import { RefObject, useRef } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form: RefObject<HTMLFormElement> | any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_cqljpuv', 'template_ecm6u8b', form.current, 'kiD2Ftq0L-8yP1hfr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
    <form ref={form} onSubmit={sendEmail}>
      <div className="htmlForm-group">
        <label htmlFor="exampleInputEmail1">Adresse E-mail:</label>
        <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name={'email'} />
        <small id="emailHelp" className="htmlForm-text text-muted">Nous ne partagerons pas votre adresse e-mail.</small>
      </div>
      <div className="htmlForm-group">
        <label htmlFor="exampleInputPassword1">Contenu</label>
        <input type="text" className="htmlForm-control" id="exampleInputPassword1" placeholder="Password" name={'subject'} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Contact;