import {newContextComponents} from "@drizzle/react-components";
import React from 'react';

const {ContractData, ContractForm} = newContextComponents;

export default class BotonesAct extends React.Component {

  render(){

	return ( 

  <div >					 
		   <div id="Volver" className="flex-boton-volver" style={{ display: (this.props.elementos[2] == true ? 'block' : 'none') }}> 
					<button className="BVolver" onClick={() => this.props.visualizacion(1,1,0,1,1,0,0)} >
					 <img src="Boton_volver.png" width="140" height="50"/>
					</button>
			</div>
	
    <div id="BotonesPrincipales" className="flex-botones-admin">
		<div className="CrearAdmin"  style={{ display: (this.props.elementos[0] == true ? 'block' : 'none') }}>
 		 <ContractForm drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
 				contract="Escuela" method="crearAula"
 				render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
 					return <form display="block" onSubmit={handleSubmit}>
					<header>
						{inputs.map((input, index) => (
 								<input className="InputCrear" key={input.name} type={inputTypes[index]} name={input.name} 
 								       value={state[input.name]} placeholder="Nombre del Aula" onChange={handleInputChange}/>
								))}
					</header>			
 						         <button id="CrearAula" className="BCrear" type="button" onClick={handleSubmit}> 						  
                    		      <img src="Boton_crear.png" width="200" height="50"/>
						         </button>
 					        </form>
 				}}
 		 />
		</div>
		<div className="EliminarAdmin" style={{ display: (this.props.elementos[1] ? 'block' : 'none') }}>
		<ContractForm drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
 				contract="Escuela" method="eliminarAula"
 				render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
 					const labels = ["Indice del aula"];
 					return <form onSubmit={handleSubmit}>
					<header>    
						{inputs.map((input, index) => (
 								<input className="InputEliminar" key={input.name} type={inputTypes[index]} name={input.name}
 								       value={state[input.name]} placeholder="Índice del Aula"
 								       onChange={handleInputChange}
								/>))}
						</header>		
 						<button id="EliminarAula" className="BEliminar" type="button" display="block" onClick={handleSubmit}>
						 <img src="Boton_eliminar.png" width="200" height="50"/>
 						</button>
 					</form>
 				}}
 		/>
		</div>
	</div>

  </div>
  
			);
  }

}


