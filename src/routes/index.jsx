import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import Skills from "../pages/skills";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>

            <Route path='/profile'>
                <Profile/>
            </Route>

            <Route path='/projects'>
                <Projects/>
            </Route>

            <Route path="/contact">
                <Contact/>
            </Route>

            <Route path="/skills">
                <Skills/>
            </Route>
        </Switch>
    )
}

export default Routes