/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */

import { Router, Scene } from 'react-native-router-flux'
import Welcome from './home/Welcome'


const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Welcome} title="Welcome to Bounce" initial={true} />
        </Scene>
    </Router>
)
export default Routes