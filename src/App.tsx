import './App.css';
import Form from './components/Form';
import { CONTENT } from './content';
import './custom.scss'

function App() {
  const content = CONTENT;

  let [ {one}, {two}, {three}, {four}, {five}] = content;

  return (
    <>
      <div className='wrapper'>
        <section className='one'>
          <div className='content'>
            <h1>{one?.title}</h1>
            <p>{one?.subheading}</p>
          </div>
        </section>
        <section className='two'>
          <div className='content'>
            <h1>{two?.title}</h1>
            <p>{two?.subheading}</p>
            </div>
        </section>
        <section className='three'>
          <div className='content'>
            <h1>{three?.title}</h1>
            <p>{three?.subheading}</p>
            </div>
        </section>
        <section className='four'>
          <div className='content'>
            <h1>{four?.title}</h1>
            <p>{four?.subheading}</p>
            </div>
        </section>
        <section className='five'>
          <div className='content'>
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
    </>
  );
}

export default App;
