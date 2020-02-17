import React, { Component } from 'react';
import './index.css';
import ProgressBar from '../progressBar/progressBar';

function Course() {
    return (
        <div className="col-sm-4 p-1">
            <div className="card shadow-sm central-content card-co"   >
                <div className="row no-gutters">
                    <div className="col-sm-4">
                        <div className=" text-center " height="10%" width="10%">
                            <img src="https://avatars2.githubusercontent.com/u/26816303?s=460&v=4" className="card-img" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body ">
                            <div className="title text-center">
                                <h2>Curso de logica y algortimos XXXXXXXXXXXXXXXX</h2>
                            </div>
                            <ProgressBar progress="10" />
                        </div>
                    </div>
                </div>
            </div>

            <br />
        </div>
    )
}

export default Course;