import react from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import FlatButtons from '../Button';
import HomePage from '../Home';
<BrowserRouter>

    <Route  patch={'/come'} component={FlatButtons} />
    <Route  patch={'/love'} component={HomePage} />
</BrowserRouter>
