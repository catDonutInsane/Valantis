import './App.css';
import { PaginationBar } from './components/pagination/Pagination';
import { MainPage } from './components/mainPage/MainPage';


function App() {
  
  return (
    <div className="App">
      <MainPage/>
     <PaginationBar/>
    </div>
  );
}

export default App;
