import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Attendance from "./components/Attendance";
import Courses from "./components/Courses";
import Display from "./components/Display";
import FirstPage from "./components/FirstPage";
import Main from "./Main";
import Navi from "./Navi";
import Home2 from "./pages/Home.page";
import Departments from "./components/Departments";
import Examination from "./components/Examination";
import Login from "./pages/LoginPage";
import TeacherPanel from "./pages/TeacherPanel.js"
import StateMiddleware from "./pages/StateMiddleware";
import StudentPanel from "./pages/StudentPanel";
import AdminPanel from "./pages/AdminPanel";
import SignUp from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<StateMiddleware />}>
          <Route path='/teacherPanel' element={<TeacherPanel />} />
          <Route path='/studentPanel' element={<StudentPanel />} />
          <Route path='/adminPanel' element={<AdminPanel/>} />
        </Route>
        <Route path='/' element={<FirstPage />} />
        <Route path='/attendance' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/examination' element={<Examination />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path = '/About' element = {<About/>} />
        <Route path = '/Contact' element = {<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
