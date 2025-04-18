import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-content'>
        <h1>React + Webpack template </h1>
        <p>Add your code</p>
      </div>
    </div>
  );
};

export default App;
