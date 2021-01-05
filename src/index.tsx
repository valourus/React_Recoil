import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </div>,
    document.getElementById('root')
);
