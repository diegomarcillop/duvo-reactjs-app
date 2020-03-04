import React from 'react';
import CourseInfo from '../Course/courseInfo';
import './modal.css'
function Modal(props){
 return(
 
<div className="modal fade bd-example-modal-lg"  id="modalCourse" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">

    <div className="modal-content">
    <div className="ml-auto m-2">
    <button type="button" className="clo<button" type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
      <CourseInfo/>
    </div>
  </div>
</div>
 )
}


export default Modal;