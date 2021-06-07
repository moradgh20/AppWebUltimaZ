import React from 'react';

import Header from './Header';
import Aulas from "./Aulas/Aulas";
import BotonesAct from "./Botones/BotonesAct";

export default class AppVisual extends React.Component {

constructor(props){
	super(props);
	this.state = {
	elementos: [1,1,0,1,1,0,0],
	fecha: "10/02/1990"
	};

	this.visualizacion = this.visualizacion.bind(this);
	this.obtenerFecha = this.obtenerFecha.bind(this);

}


obtenerFecha(x){
 this.setState({fecha: x});
}


visualizacion(a,b,c,d,e,f,g) {
  
let crear;
let eliminar;
let volver;
let fecha;
let panel;
let tabla;
let aulaPulsada;

aulaPulsada = g;

    if (a > 0) { 
	crear = true;
    } else {  
	crear = false;
    }
    
    if (b > 0) {    
	eliminar = true;
    } else { 
	eliminar = false;
    }
 
    if (c > 0) { 
	volver = true;
    } else {
	volver = false;
    }

    if (d > 0) { 
	fecha = true;
    } else {
	fecha = false;
    }

    if (e > 0) { 
	panel = true;
    } else {
	panel = false;
    }

    if (f > 0) {  
	tabla = true;
    } else { 
	tabla = false;
    }
	
let ver = [crear,eliminar,volver,fecha,panel,tabla, aulaPulsada];
this.setState({elementos: ver});

}


render(){
      return (<div className="App">		 
				<Header drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}/>
				<BotonesAct drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
				  elementos={this.state.elementos} visualizacion={this.visualizacion}/>
				<Aulas drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
				  elementos={this.state.elementos} visualizacion={this.visualizacion} 
				  obtenerFecha={this.obtenerFecha} fecha={this.state.fecha}/> 
			  </div> 
			 );
		}

}

