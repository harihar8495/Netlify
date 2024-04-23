import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import { Component } from 'react';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylecomponent from './components/Stylecomponent';
import Inline from './Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';



class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Message></Message> */}

       {/* <Welcome name="Kohli" place="delhi"></Welcome>  */}
       {/* <EventBind/> */}
       {/* <ParentComponent/> */}
       {/* <UserGreeting/> */}
       {/* <NameList/> */}
       {/* <Stylecomponent></Stylecomponent> */}
       {/* <Inline /> */}
       {/* <h1 className='error'>Error</h1> */}
{/* //unlike direct css module method not applies to child which helps css conflicts  */}
       {/* <h1 className={ styles.success}>Success</h1> */}
       <Form />
      </div>
    );
  }
}


export default App;
