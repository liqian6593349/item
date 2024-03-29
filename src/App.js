import React, {Component,Fragment} from 'react';
import renderRoutes from "./utils/renderRoutes"
import {baseConfigRoutes} from "./router"
import {Switch,Redirect} from "react-router-dom"
import layout from "./hoc/layout"

 class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {renderRoutes(baseConfigRoutes)}
                    <Redirect from="/" to="/home"/>
                </Switch>
            </Fragment>
        );
    }
}
export default layout(App);