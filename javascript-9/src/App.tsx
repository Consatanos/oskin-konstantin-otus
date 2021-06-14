import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import CityList from './components/city-list';
import { CityAction, CityState, DispatchType } from './models/city.model';
import reducer from './store/reducer';

const store: Store<CityState, CityAction> & {
    dispatch: DispatchType
} = createStore(reducer)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CityList />
            </div>
        </Provider>
    );
}

export default App;
