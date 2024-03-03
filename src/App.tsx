import './App.css';
import { PaginationBar } from './components/pagination/Pagination';
import { MainPage } from './components/mainPage/MainPage';
import { ScrollUpBtn } from './components/scrollUpButton/ScrollUpButton';


function App() {
  
  return (
    <div className="App">
      <MainPage/>
     <PaginationBar/>
     <ScrollUpBtn/>
    </div>
  );
}

export default App;
