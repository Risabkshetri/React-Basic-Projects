import ImageClassifier from './components/ImageClassifier';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My AI-Powered React App</h1>
      </header>
      <main>
        <ImageClassifier />
      </main>
    </div>
  );
};

export default App;