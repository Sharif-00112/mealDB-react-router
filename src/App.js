// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Contact from './components/Contact/Contact'
import MealDetail from './components/MealDetail/MealDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path ='/' element = {<Home/>}/>
          <Route exact path ='/home' element = {<Home/>}/>
          <Route exact path ='/restaurant' element = {<Restaurant/>}/>
          <Route exact path ='/restaurant/meal/:mealId' element = {<MealDetail/>}/>
          <Route exact path ='/contact' element = {<Contact/>}/>
          <Route exact path ='*' element = {<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
