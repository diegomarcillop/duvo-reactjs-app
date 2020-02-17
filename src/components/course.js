import React  from 'react';

function Course({ title }) {
    return (
        <div className="col-sm-4">
            <div className="card shadow  course-target central-content"   >
                <img src="/img/courses/courses01.jpg" className="card-img-top img-course w-100" width="100%"></img>
                 <div className="card-footer">
                 <h5 className="text-center course-font">{title}</h5>
                 </div>
            </div>

            
            
            <br />
        </div>
    )
}


export default Course;