import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hellow from "./components/Hellow";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinder from "./components/EventBinder";
import ParentCombonent from "./components/ParentCombonent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
    <Form />
    {/*<StyleSheet primary={true}/>*/}
    {/*<NameList/>*/}
    {/*<UserGreeting />*/}
{  /*  <ParentCombonent />*/}
  {/*  <EventBinder />*/}
    {/* <FunctionClick />
    <ClassClick />*/}
     {/*<Counter />*/}
      {/* <Message />*/}
      {/* <Greet name = 'test'/>
       <Welcome name = 'Sebin'/> */}
     {/* <Greet /> */}
      {/*<Welcome />*/}
      {/* <Hellow /> */}
    </div> 
  );
}

export default App;
