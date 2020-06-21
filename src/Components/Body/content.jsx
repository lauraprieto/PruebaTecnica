import React, { Component } from 'react';
import NewOne from '../../Images/NewOne.jpeg';
import NewTwo from '../../Images/NewTwo.jpeg';


class Content extends Component {
    state = {  }
    render() {
        return (
            <>
                <div className="container shadow-lg p-5 mb-5 bg-white rounded">
                    <div className="filter mb-5">
                        <form>
                            <div class="form-row align-items-center ">
                                <div class="col-auto my-1 ">
                                    <select class="custom-select mr-sm-2 shadow bg-white" id="inlineFormCustomSelect">
                                        <option selected>Ordenar por</option>
                                        <option value="1">Más recientes</option>
                                        <option value="2">Menos recientes</option>
                                        <option value="3">Tipos de recursos</option>
                                    </select>
                                </div>

                                <div class="col-auto my-1">
                                    <button type="submit" class="btn btn-secondary text-dark shadow bg-white rounded">Filtrar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <hr/>

                    <div className="containerInformation mt-5">
                        <div class="card-columns">
                            <div class="card shadow bg-white rounded">
                                <img src={NewOne} class="card-img-top" alt="Noticia 1"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title that wraps to a new line</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div class="card shadow bg-white rounded">
                                <img src={NewOne} class="card-img-top" alt="Noticia 1"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title that wraps to a new line</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            
                            <div class="card shadow bg-white rounded">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card shadow bg-white rounded">
                                <img src={NewTwo} class="card-img-top" alt="noticia 2"/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
         );
    }
}

export default Content;