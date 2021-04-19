import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBing from './components/EventBing';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParenttoUsePureComponentEx from './components/ParenttoUsePureComponentEx';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <RefsDemo /> */}
      {/* <ParenttoUsePureComponentEx /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.sucess}>Sucess</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBing /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name='Brazil' continentName='South America'>
        <p>This is a children props</p>
      </Greet>
      <Greet name='Jamaica' continentName='Center America'>
        <button>Action</button>
      </Greet>
      <Greet name='Marrocos' continentName='Africa' />
      <Welcome name='Brazil' />
      <Welcome name='Jamaica' />
      <Welcome name='Marrocos' />
      <Hello /> */}
    </div>
  );
}

export default App;
