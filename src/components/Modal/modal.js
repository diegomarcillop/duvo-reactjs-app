import React from 'react';
import CourseInfo from '../Course/courseInfo';

function Modal(props){
 return(
 
<div class="modal fade bd-example-modal-lg"  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <CourseInfo/>
    </div>
  </div>
</div>
 )
}


export default Modal;