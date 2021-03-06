import React from 'react'
import {Switch, Route} from 'react-router';
import {SignIn, ProductEdit, Home, SignUp, Reset} from './templates'
import Auth from './Auth'

const Router = () => {
    return(
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signin/reset"} component={Reset} />
            <Auth>
                <Route exact path={"(/)"} component={Home} />
                <Route exact path={"/product/edit"} component={ProductEdit} />
            </Auth>
        </Switch>
    );
};
export default Router