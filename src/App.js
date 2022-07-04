import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <HelloWorld name='Rick' greeting='Yo' />
        <HelloWorld name='World' />
      </header>
    </div>
  );
}

function HelloWorld({ name, greeting = 'Hello' }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

export default App;
