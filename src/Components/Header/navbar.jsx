import React, { Component } from 'react'
import LogoUnal from '../../Images/Logo-unal.jpeg'


class Nabvar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className="containerHeader position-relative">
                    <div className="containerHeader-Logo">

                        {/* Logo del header */}
                        <div className="container">
                            <img src={LogoUnal} className="LogoImage" alt="Logo Unal"/>
                        </div>

                        {/* barra de navegación */}
                        <div className="container containerNav  bg-white">                       
                            <nav className="navbar navbar-expand-lg navbar-white">
                            
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">INICIO<span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">CONTENIDOS EDUCATIVOS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">ESCUELA VIRTUAL</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">VIDEOS</a>
                                        </li>
                                    </ul>

                                    {/* buscador */}
                                    <form className="form-inline my-2 my-lg-0 rounded-pill">
                                        <div classNameName="Input-group">
                                            <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Buscar en ANSV" aria-label="Search" />
                                                <button className="btn btn-outline-primary rounded" type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                        </div>
                                    </form>

                                </div>
                            </nav>
                        </div>
                    </div>


                    <div className="containerBreadcrumb">
                        <nav aria-label="breadcrumb mb-0">
                            <ol className="breadcrumb bg-transparent container mb-0">
                                <li className="breadcrumb-item active"><a href="#">Inicio</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Contenidos educativos</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </>
          );
    }
}
 
export default Nabvar;


