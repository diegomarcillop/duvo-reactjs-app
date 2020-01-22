import React from 'react';
import Course from '../components/course';
import { connect } from 'react-redux';
import axios from 'axios';
import getCourses from '../actions/GetCourses';


class Courses extends React.Component {

    async componentDidMount() {
        await axios.get('http://localhost:4000/course')
            .then(res => {
                const courses = res.data;
                this.props.getCourses(courses);
            })
    }

    render() {
        const { courses } = this.props;
        console.log(courses, "<--");
        return (
            <div className="m-2 central-content">
                <form>
                    <h5 className="p-2 text-center font-releway">Todos los cursos de <strong>DUVO</strong></h5>
                    <div className="container p-1">
                        <div className="row">
                            {courses.map(
                                course =>
                                    <Course title={course.nameCourse} key={course.idCourse} />
                            )}

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // cualquier cosa que ponemos aqui se vuelve un props
    return {
        courses: state.courses,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: (data) => dispatch(getCourses(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Courses);