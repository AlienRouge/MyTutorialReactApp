import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={`app-wrapper`}>
                <Header/>
                <NavBar state={props.state.sidebarData}/>
                <div className='app-wrapper-content'>

                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               state={props.state.dialogsData}
                               dispatch={props.dispatch}
                           />}/>

                    <Route path={"/profile"}
                           render={() => <Profile
                               state={props.state.profileData}
                               dispatch={props.dispatch}
                           />}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
