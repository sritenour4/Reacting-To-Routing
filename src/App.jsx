import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import FilmDetails from './pages/FilmDetails';
import PersonDetails from './pages/PersonDetails';
import Locations from './pages/Locations';
import LocationDetails from './pages/LocationDetails';


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmid">
                    <FilmDetails />
                </Route>
                <Route exact path="/people">
                    <People />
                </Route>
                <Route exact path="/people/:personid">
                    <PersonDetails />
                </Route>
                <Route exact path="/locations">
                    <Locations />
                </Route>
                <Route exact path="/locations/:locationid">
                    <LocationDetails />
                </Route>
                <Route exact path="*">
                    {() => <h1>404 Not found</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;