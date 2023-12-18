import './App.css';
import Button from './components/button';
import Button2 from './components/button2';
import Img1 from './components/img1';
import Img2 from './components/img2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Button label="Benvenuto1" />
        </div>

        <div>
        <Img1 src="img/akira.jpeg" />
        </div>
        
        <div>
          <Img2 />
        </div>
        
        <div>
        <Button2 label="Benvenuto2" />
        </div>
      </header>
    </div>
  );
}

export default App;
