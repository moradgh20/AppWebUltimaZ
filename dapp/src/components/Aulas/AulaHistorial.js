import {newContextComponents} from "@drizzle/react-components";
import AulaHistorialHeader from "./AulaHistorialHeader";
import AulaHistorialBody from "./AulaHistorialBody";

const {ContractData, ContractForm} = newContextComponents;

const AulaHistorial = (props) => {

let valor = "10/02/2021";
let rows = [];
		
	return(<div style={{ display: (props.elementos[5] ? 'block' : 'none') }}>
		<caption className="TituloTablaHistorial"><b>Historial Aula {props.pulsada}</b></caption>
 		<table className="TablaHistorial" >
					<AulaHistorialHeader drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>

					<tbody>		
						<ContractData
						drizzle={props.drizzle}
						drizzleState={props.drizzleState}
						contract={"Escuela"}
						method={"guardarEntradasAula"}
						methodArgs={[props.pulsada, props.fechaConsulta]}
						render={entradas =>
						  <AulaHistorialBody drizzle={props.drizzle}
						  drizzleState={props.drizzleState} entradasLongitud={props.longitud} 
						  fecha={props.fechaConsulta} nombreAula={props.pulsada} entradas={entradas}/>
						}/>
					</tbody>
		</table>
			</div>
	);	
}

export default AulaHistorial;




						

				
					
					
				