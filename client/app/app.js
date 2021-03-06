'use strict'

require('../scss/app.scss')
import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

// disable redbox-react
delete AppContainer.prototype.unstable_handleError

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>
        ,
        document.getElementById('root')
    );
}

document.addEventListener('DOMContentLoaded', () => render(Root));


if (module.hot) {
    module.hot.accept('./containers/Root', () => { render(Root) })
}
