import { Link } from "react-router-dom";

import linkedinLogo from '../../assets/logos/icons8-linkedin.svg';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact-form">
      this is the contact form 
      <br />
      Click here to be redirected to <Link to='/'>Home page </Link>
      <img src={linkedinLogo} alt='Redirect to linkedin'/>
    </div>
  )
}

export default Contact;