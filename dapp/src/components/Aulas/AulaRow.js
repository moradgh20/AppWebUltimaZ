import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AulaRow = (props) => {

	return (
				<tr key={"Persona-" + props.i}>
					<td>{props.datosPersona}</td>
					<td>{props.entrada.fecha}</td>
					<td>{props.entrada.ent}-{props.entrada.sal}</td>
					<td>&emsp;{props.entrada.puesto}</td>
					<td>{props.entrada.estado}</td>
				</tr>	
    );
};

export default AulaRow;




		