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
	
	const {address, privateKey} = web3.eth.accounts.create();
	web3.eth.accounts.wallet.add(privateKey);
	console.log(web3.eth.accounts.wallet);
	web3.eth.accounts.wallet.save('test');
			
	/*
  const {address, privateKey} = web3.eth.accounts.create();
  web3.eth.defaultAccount = address;
  console.log("Por defecto:" + web3.eth.defaultAccount);
	
  const newAccount = await web3.eth.personal.newAccount('test');
  console.log("newAccount", newAccount);
  await web3.eth.personal.unlockAccount(newAccount, 'test', 0);
	*/
	
    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};
