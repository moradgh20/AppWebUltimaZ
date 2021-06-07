import {newContextComponents} from "@drizzle/react-components";

import AulaHistorial from "./AulaHistorial";
import AulaComponentes from "./AulaComponentes";
import AulasPanel from "./AulasPanel";
import AulaHistorialBody from "./AulaHistorialBody";

const {ContractData, ContractForm} = newContextComponents;

const Aulas = (props) => {

let numero = props.elementos[6] - 1 ;
	return(
		<div>
    		 <div id="FechaCon" className="FechaConsulta" style={{ display: (props.elementos[3] ? 'block' : 'none') }}>
				<header className="TituloFecha">Introducir fecha de consulta:</header>
				<input id="Fecha" className="FechaConsultaBorde" type="text" 
				onChange={() => props.obtenerFecha(document.getElementById("Fecha").value)} 
				placeholder="      Dia/Mes/Año">
				</input>
			 </div>
			
			<div className="PanelHistorial">  
			<ContractData
 				drizzle={props.drizzle}
 				drizzleState={props.drizzleState}
 				contract={"Escuela"}
 				method={"aulasLength"}
				render={aulen =>  

				<div id="Panel" className="Historial">
				 <AulasPanel drizzle={props.drizzle}
			     drizzleState={props.drizzleState}
			     longitud={aulen} elementos={props.elementos} 
			     visualizacion={props.visualizacion}/>
						
				 <AulaComponentes drizzle={props.drizzle}
				 drizzleState={props.drizzleState} fechaConsulta={props.fecha} 
				 elementos={props.elementos}/>
				</div> 	
			}
 			/>
			</div>  

 		</div>
	);
	
};

export default Aulas;


