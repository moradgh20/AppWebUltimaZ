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
		
		//let cond = await datos.elegirPantalla({from: "0x4a16F74FD31BD58a7e677fECE1F3F8122a6A8c40"});
		//console.log("condicion: " + cond);
			//entradas = await datos.estaRegistrado(administrador);
	//console.log("Datos Persona:");
	//console.log(entradas);
	
	

	
	/*	
		await datos.autoregistro({from: administrador});
	await escuela.guardarEntrada("AULA4", "10:20", "10/5/2021", "23", 7, {from: administrador});


	await escuela.estadoPositivo("10/07/2022", {from: administrador});
	console.log("Positivos registrados");

	entradasReg = await escuela.guardarEntradasAula( "AULA4",  "10/5/2021", {from: administrador});
	entradas = await datos.obtenerDatosPersona(administrador);
	console.log("Datos Persona:");
	console.log(entradas);
    console.log("Entradas:");
	console.log(entradasReg);
	*/	
		//const newAccount = await web3.eth.personal.newAccount('test');
		//console.log("newAccount: ", newAccount);
		
		//const {address, privateKey} = web3.eth.accounts.create();
		
		//web3.eth.accounts.wallet.add(privateKey);
		
		//console.log(web3.eth.accounts.wallet);
		
		//web3.eth.accounts.wallet.save('test');
		
	
		
		
	/*
	let num_cuentas = await datos.registradosLength();
	
		
	if(num_cuentas > 0){
		
		for(){
			
			
		}
		
		
	}
		
		
	let existe = await datos.estaRegistrado(address)
		

	const {address, privateKey} = web3.eth.accounts.create();
	
	web3.eth.defaultAccount = address;
	console.log("Por defecto:" + web3.eth.defaultAccount);
	
  const newAccount = await web3.eth.personal.newAccount('test');
  console.log("newAccount", newAccount);
  await web3.eth.personal.unlockAccount(newAccount, 'test', 0);
  await web3.eth.getBalance(accounts[0], (err, bal) => { console.log("Ganache balance", bal); } );
  await web3.eth.sendTransaction({to:newAccount, from:accounts[0], value:web3.utils.toWei("10", "ether")});
  await web3.eth.getBalance(newAccount, (err, bal) => { console.log("New Account balance", bal); } );
	
	
	console.log("Cuentas" + accounts);
	
	await datos.autoregistro({from: address});
	await escuela.guardarEntrada("AULA4", "10:20", "8/5/2021", "23", 4, {from: address});
	
	entradas = await datos.obtenerDatosPersona(administrador);
	console.log("Datos Persona:");
	console.log(entradas);
	entradasReg = await escuela.guardarEntradasAula( "AULA4",  "8/5/2021", {from: administrador});
	 console.log("Entradas:");
	console.log(entradasReg);
	
	
	*/
	
		//entradasReg = await escuela.guardarEntradasAula( "AULA4",  "7/5/2021", {from: administrador});

        //Identificar al administrador:
       // let administrador = await escuela.administrador();
        //console.log("Cuenta del administrador =", administrador);

      //  console.log("Creando dos aulas:");
        //await escuela.crearAula("B10");
        //await escuela.crearAula("B40");
	//console.log("Aulas Creadas");
        //console.log("Registrando a tres personas:");
       // let evaAccount = accounts[1];
      //  let pepeAccount = accounts[2];
	let lidiaAccount = accounts[9];
	//let yonAccount = accounts[4];
	//let saraAccount = accounts[5];

	//await datos.resetearCuenta({from: administrador});

	
	//await datos.autoregistro({from: lidiaAccount});
	await escuela.guardarEntrada("AULA4", "11:20", "13/5/2021", "23", 8, {from: lidiaAccount});
	await escuela.estadoPositivo("10/02/2021", {from: lidiaAccount});
	
	let t = await escuela.alertas("0xd4cf0091e81b65b2B2f5243D07f27b6221656EAe");
	console.log("alertas: " + t);
	/*
	await datos.autoregistro({from: pepeAccount});
	await datos.autoregistro({from: lidiaAccount});
	await datos.autoregistro({from: yonAccount});
	await datos.autoregistro({from: saraAccount});
	console.log("Personas registradas");

	console.log("Guardando tres entradas en un aula y dos en otra");
	await escuela.guardarEntrada("B10", "10:20", "10/02/2021", "23", 4, {from: evaAccount});
	await escuela.guardarEntrada("B10", "10:22", "10/02/2021", "24", 4, {from: pepeAccount});
	await escuela.guardarEntrada("B10", "10:25", "10/02/2021", "25", 4,{from: lidiaAccount});
	await escuela.guardarEntrada("B40", "09:20", "15/07/2022", "26", 4,{from: yonAccount});
	await escuela.guardarEntrada("B40", "09:30", "15/07/2022", "27", 4,{from: saraAccount});
	console.log("Entradas Guardadas");
	await escuela.nuevoTurno("B10", "10/02/2021", 4, {from: administrador, gas: 400000});
	await escuela.nuevoTurno("B40", "15/07/2022", 4, {from: administrador, gas: 400000});


	console.log("Guardando las salidas correspondientes a las cinco entradas anteriores");
	await escuela.guardarSalida("B10","12:00" , "10/02/2021",4, {from: evaAccount});
	await escuela.guardarSalida("B10","12:10" , "10/02/2021",4, {from: pepeAccount});
	await escuela.guardarSalida("B10","12:06" , "10/02/2021", 4,{from: lidiaAccount});
	await escuela.guardarSalida("B40","11:00" , "15/07/2022", 4,{from: yonAccount});
	await escuela.guardarSalida("B40","11:05" , "15/07/2022", 4,{from: saraAccount});
	console.log("Salidas Guardadas");

	console.log("Registrando un positivo en cada una de las dos aulas");
	*/
	//await escuela.estadoPositivo("10/02/2021", {from: lidiaAccount});
	//await escuela.estadoPositivo("15/07/2022", {from: yonAccount});
	//console.log("Positivos registrados");

		//entradasReg = await escuela.guardarEntradasAula( "AULA4",  "7/5/2021", {from: administrador});
	//entradas = await datos.obtenerDatosPersona(administrador);
	//console.log("Datos Persona:");
	//console.log(entradas);
    //console.log("Entradas:");
	//console.log(entradasReg);
	//console.log("eva:");
	//console.log(evaAccount);
	
		entradasReg = await escuela.guardarEntradasAula( "AULA4",  "13/5/2021", {from: administrador});
	entradas = await datos.obtenerDatosPersona(administrador);
	console.log("Datos Persona:");
	console.log(entradas);
    console.log("Entradas:");
	console.log(entradasReg);
	
    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};
