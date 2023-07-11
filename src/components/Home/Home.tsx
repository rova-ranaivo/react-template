import { CONTENT } from "../../content";
import Form from "../Form/Form";
import './home.scss';
import angularimg from './../../assets/images/angular.png';

const Home = () => {
  const content = CONTENT;
  let [{ one }, { two }, { three }, { four }, { five }] = content;

  return (
    <div className="wrapper col-12">
      <section className="one">
        <div className="content col-sm-8 col-8">
          <h1 className="main-title">{one?.title}</h1>
          <p>{one?.subheading}</p>
        </div>
      </section>
      <section className="two row">
        <div className="content col-md-5 d-md-block d-lg-block d-xl-block col-sm-8 col-8">
          <h2>{two?.title}</h2>
          <p>{two?.subheading}</p>
        </div>
        <div className="content col-md-5 d-none d-md-block d-lg-block d-xl-block col-8">
          <h2>{two?.title}</h2>
          <p>{two?.subheading}</p>
        </div>
      </section>
      <section className="three">
        <div className="content col-sm-8 col-8">
          <h2>{three?.title}</h2>
          <p className="loading-text">{three?.subheading}</p>
          <img src={angularimg} alt="Mobile only" style={{ border: '1px solid black' }} className="col-md-none" />
          <img src={angularimg+'m'} alt="Desktop only" style={{ border: '1px solid black' }} className="d-none col-md-3" />
        </div>
      </section>
      <section className="four">
        <div className="content col-sm-8 col-8">
          <h2>{four?.title}</h2>
          <p>{four?.subheading}</p>
        </div>
      </section>
      <section className="five">
        <div className="content col-sm-8 col-8">
          <div className="left-content">
            <h2>{five?.title}</h2>
            <p>{five?.subheading}</p>
          </div>
          <div className="right-content">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;