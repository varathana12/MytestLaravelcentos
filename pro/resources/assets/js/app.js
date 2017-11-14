
import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/i'
import HomePage from './components/Home'
import Create from './components/Create'
import Login_Auth from './components/Login'
/*if(document.getElementById('root')){
    ReactDom.render(<HomePage/>,
        document.getElementById('root')
    );

}
if(document.getElementById('form'))
{
    ReactDom.render(<Create/>,
        document.getElementById('form')
    );
}
if(document.getElementById('login'))
{
    ReactDom.render(<Login_Auth/>,
        document.getElementById('login')
    );
}*/

export default ()=> <Router/>;


