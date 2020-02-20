import React from 'react';
import CourseInfo from '../Course/courseInfo';

function Modal(props){
 return(
 
<div className="modal fade bd-example-modal-lg"  id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <CourseInfo/>
    </div>
  </div>
</div>
 )
}


export default Modal;