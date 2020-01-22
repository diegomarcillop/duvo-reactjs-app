import React, { Component } from 'react';

function Course({title})  {
    return(
        <div className="col-sm-4">
        <div className="card shadow p-3 course-target central-content"   >
            <div className="card-header text-center card text-white bg-info mb-3">
                <div className="media">
                    <a className="mr-3" href="/">
                        <img src="/img/default.png" width="30" height="30" className="mr-3" alt="..." />
                    </a>
                    <h6>{title}</h6>
                </div>
            </div>
            <div className="module">
                <div className="card-footer p-1">
                    <p className="mt-0 text-center"><strong> </strong>Introducción al curso</p>
                </div>
                <div className="card-footer p-1">
                    <p className="mt-0 text-center">Concepto de algortimo</p>
                </div>
                -            </div>
            <a href="/" className="btn btn-link btn-sm">Ver mas...</a>
        </div>
        <br />
    </div>
    )
}

 
export default Course;