import {newContextComponents} from "@drizzle/react-components";

import AulaHistorial from "./AulaHistorial";

const {ContractData} = newContextComponents;

const AulaComponentes = (props) => {
	
let valor = "10/02/2021";

if (props.elementos[6] > 0) { 

	return (
			<ContractData
			drizzle={props.drizzle}
			drizzleState={props.drizzleState}
			contract={"Escuela"}
			method={"aulaPulsada"}
			methodArgs={[props.elementos[6] - 1]}
			render={ pulsada => <ContractData
								drizzle={props.drizzle}
								drizzleState={props.drizzleState}
								contract={"Escuela"}
								method={"personasLength"}
								methodArgs={[pulsada, props.fechaConsulta]}
								render={ longitud => 
								
								  <AulaHistorial drizzle={props.drizzle}
								  drizzleState={props.drizzleState} fechaConsulta={props.fechaConsulta} 
								  elementos={props.elementos} pulsada={pulsada} longitud={longitud}/>
								}/>
			}/>
  );
}
else{
	return (<div></div>);
}

};

export default AulaComponentes;




		