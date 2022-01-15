import {BrouserRouter, Switch, Route} from "react-router-dom";

import home from "./páginas/home";
import teste from "./páginas/teste";

function Routes() {
    return (
        <BrouserRouter>
            <Switch>
                <Route path="/home" component={home}/>
                <Route path="/teste" component={teste}/>
            </Switch>
        </BrouserRouter>
    )
}

export default Routes;