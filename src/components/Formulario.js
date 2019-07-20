import React, { Component } from 'react';
import {CategoriasConsumer} from '../context/CategoriasContext';
class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
     }
     //si el usuario agrega un evento o categoria
     obtenerDatosEvento = e =>{
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por Nombre o Categoria
                    </legend>
                </fieldset>
                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input 
                        name="nombre" 
                        type="text"
                        className="uk-input"
                        placeholder="Nombre de Evento o Ciudad"
                        onChange = {this.obtenerDatosEvento}
                        />
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select 
                            className="uk-select" 
                            name="categoria"
                            onChange = {this.obtenerDatosEvento}
                        >
                            <option value="">--Selecciona Categoria--</option>
                            <CategoriasConsumer>
                                {(value)=>{
                                    return (
                                        value.categorias.map(categoria => (
                                            <option key={categoria.id}
                                            value={categoria.id}
                                            data-uk-form-select>
                                                {categoria.name_localized}
                                            </option>
                                        ))
                                    )
                                }}
                            </CategoriasConsumer>
                        </select>
                    </div>
                    <div>
                        <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Formulario;