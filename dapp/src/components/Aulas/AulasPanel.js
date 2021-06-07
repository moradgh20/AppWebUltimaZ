import {newContextComponents} from "@drizzle/react-components";

import AulaHistorial from "./AulaHistorial";

const {ContractData} = newContextComponents;

const AulasPanel = (props) => {
		 
let rows = [];
let valor = "10/02/2021";	
	for (let i = 0; i < props.longitud ; i++) {
        rows.push(
 			<ContractData
 				drizzle={props.drizzle}
 				drizzleState={props.drizzleState}
 				contract={"Escuela"}
 				method={"aulas"}
				methodArgs={[i]}
 				render={data => 
					<div> 
					 &emsp; &nbsp; [{i}] <b>{data == null ? "" : data.nombre}</b> 
					 <button className="BPanel" type="button" onClick={() => props.visualizacion(0,0,1,0,0,1,i+1)}> 
					  <img className="ImagenVer" src="Boton_ver_historial.png" width="100" height="20"/>
					 </button>
					</div>	
 				}
			/>);			
	} 
      return (<div style={{ display: (props.elementos[4] ? 'block' : 'none') }}>
				<caption className="TituloPanel"><b>Aulas</b></caption>
				<table id="Tabla" className="TablaPanelAulas" >{rows}</table>
			  </div>
			 );
};

export default AulasPanel;
