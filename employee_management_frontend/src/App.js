import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeContainer from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// const App = () => { return (); }
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<ListEmployeeContainer />}></Route>
            <Route exact path='/employees' element={<ListEmployeeContainer />}></Route>
            <Route exact path='/add-employee' element={<CreateEmployeeComponent />}></Route>
            <Route exact path='/update-employee/:id' element={<UpdateEmployeeComponent />}></Route>
            <Route exact path='/view-employee/:id' element={<ViewEmployeeComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
