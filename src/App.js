import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersConatiner";

const App = () => {
    return (
        <BrowserRouter>
            <div className={`app-wrapper`}>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                        <Route path={"/users"} element={<UsersContainer/>}/>
                        <Route path={"/news"} element={<News/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/settings"} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
