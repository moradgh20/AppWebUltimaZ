module.exports = async callback => {

    try {
       const Escuela = artifacts.require("./Escuela.sol");
	const Datos = artifacts.require("./Datos.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }
	
    let escuela = await Escuela.deployed();
	let datos = await Datos.deployed();
	let administrador = await escuela.administrador();
    console.log("Cuenta del administrador =", administrador);
    // let evaAccount = accounts[1];
    //  let pepeAccount = accounts[2];
	let lidiaAccount = accounts[2];

	let cond = await datos.elegirPantalla({from: lidiaAccount});
	if(!(cond)){
	await datos.autoregistro({from: lidiaAccount});
	}
	await escuela.guardarEntrada("AULA4", "11:20", "19/5/2021", "23", 4, {from: administrador});
	//await escuela.estadoPositivo("15/02/2021", {from: lidiaAccount});
	
	entradasReg = await escuela.guardarEntradasAula( "AULA4",  "19/5/2021", {from: administrador});
	//entradas = await datos.obtenerDatosPersona(administrador);
	//console.log("Datos Persona:");
	//console.log(entradas);
    console.log("Entradas:");
	console.log(entradasReg);
	
    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};
