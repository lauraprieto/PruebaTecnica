import React, { Component } from 'react'


class Nabvar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className="containerHeader">
                    <div className="containerHeader-Logo">

                        {/* Logo del header */}
                        <div class="container">
                            <img src="https://unal.edu.co/typo3conf/ext/unal_skin_default/Resources/Public/images/escudoUnal_black.png" class="figure-img img-fluid rounded" />
                        </div>

                        {/* barra de navegación */}
                        <div class="container containerNav">                       
                            <nav class="navbar navbar-expand-lg navbar-white bg-white rounded-pill">
                            
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                    </ul>

                                    {/* buscador */}
                                    <form class="form-inline my-2 my-lg-0 rounded-pill">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>

                                </div>
                            </nav>
                        </div>
                    </div>


                    <div class="containerBreadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-transparent container">
                                <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contenido</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </>
          );
    }
}
 
export default Nabvar;


