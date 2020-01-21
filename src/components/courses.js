import React from 'react';
import Course from './course';
import WithDataFetching from '../containers/withDataFetching';
function Courses({data}) {
    return (
        <div className="m-2 central-content">
            <form>
                <h5 className="p-2 text-center font-releway">Todos los cursos de <strong>DUVO</strong></h5>
                <div className="container p-1">
                    <div className="row">
                        {data.map(
                            course =>
                                <Course title={course.nameCourse} key={course.idCourse} />
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default WithDataFetching('http://localhost:4000/course', Courses);