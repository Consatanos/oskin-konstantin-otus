import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import CityList from './components/CityList';
import { CityAction, CityState, DispatchType } from './models/city.model';
import reducer from './store/reducer';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import City from './components/City';

const store: Store<CityState, CityAction> & {
    dispatch: DispatchType
} = createStore(reducer)

const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/">
                            <CityList />
                        </Route>
                        <Route path="/:id" children={<City />} />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
