import React from 'react';
import './App.css';
import RTL from "./components/RTL";
import {BoxStatus} from "./components/BoxStatus";
import {Status} from "./models/status";

const App = () => {
    return (
        <RTL>
            <BoxStatus displayName='ש"י 2' status={Status.STOPPED} operationsCount={1230}/>
        </RTL>
    );
}

export default App;
