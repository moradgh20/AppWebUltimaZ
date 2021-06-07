import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AulaHistorialHeader = (props) => {

return(
    <div> 
		<thead>
 		<tr>
 			<th><b>Cuenta</b></th>
			<th><b>Fecha</b></th>
			<th><b>Ent/Sal</b></th>
			<th><b>Puesto</b></th>
			<th><b>Estado</b></th>
 		</tr>
 		</thead>
    </div>
);
}

export default AulaHistorialHeader;
