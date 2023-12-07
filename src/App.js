import './App.css';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  const name = "Eldar"
  return (
    <div className="App">
      <WelcomeMessage name={name}/>
    </div>
  );
}

export default App;
