import {DrizzleContext} from "@drizzle/react-plugin";
import React from 'react';
import '../css/App.css';

import AppVisual from "./AppVisual";

function App() {
    return (
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;
                if (!initialized) {return (<main><h1>⚙️ Cargando dapp...</h1></main>);}
                return (<main>
							<AppVisual drizzle={drizzle} drizzleState={drizzleState}/>
						</main> 
				);
             }}
        </DrizzleContext.Consumer>
    );
}

export default App;
