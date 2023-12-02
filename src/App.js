import logo from './logo.svg';
import './css/style.css';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-900 grid place-content-center duration-200">
      <Toggle/>
    </div>
  );
}

export default App;
