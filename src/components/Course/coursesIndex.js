import React, { useEffect, useState } from 'react';
import Course from './course';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function  CoursesIndex(props) {

    const [courses, setCourses] = useState(["", ""]);

    const dataAPI = async () => {
        await Axios.get('http://localhost:4000/api/course')
            .then(({ data }) => {
                setCourses(data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        dataAPI();
    }, [])

    return (
        <div className="central-content">
            <form>
                <h5 className="p-2 text-center font-releway">{ props.title} <strong>{props.titleB}</strong></h5>
                <div className="container  p-1">
                    <div className="row">
                        {courses.map(
                            (course, index) =>
                                
                                 <Course title={course.nameCourse} key={index} />
                                 
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CoursesIndex;