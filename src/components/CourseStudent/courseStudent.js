import React,{ Component } from 'react';
import './index.css';
import Course from './course';

function CourseStudent(){
    return(
        <div>
            <div className="container p-1">
                <div className="row">
                <Course/>
                    </div> 
            </div>
        </div>
    )
}

export default CourseStudent;