import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import './App.css';
import { UserContextProvider } from './UserContext';
import CreatePost from './main/createpost';
import Home from'./Home';
import MyBlog from './main/MyBlog';
import OwnBlog from './main/OwnBlog';
import Subscribe from './main/Subscribe';
import Profile from './main/Profile';
import Contact from './main/Contact';
 

const App = () => {
  return (
    <UserContextProvider>
    <Router>
      <div>
        <Routes>
          
          <Route path='/' element={<IndexPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/' element={<IndexPage/>}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/MyBlog" element={<MyBlog/>}></Route>
          <Route path='/ownblog' element={<OwnBlog/>}></Route>
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
    </UserContextProvider>
  );
};

export default App;


// Runtime error vantha sir send panna code ah src kulla 
// oru file UserContext.js nu create panni Paste pannanum
// App.js la import pannikanum
// import { UserContextProvider } from './UserContext';

// <UserContextProvider>
//    main div varanum
// </UserContextProvider>

// import {createContext, useState} from "react";
// export const UserContext = createContext({});
// export function UserContextProvider({children}) {
//   const [userInfo,setUserInfo] = useState({});
//   return (
//     <UserContext.Provider value={{userInfo,setUserInfo}}>
//       {children}
//     </UserContext.Provider>
//   );
// }