import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';

class EditorTexto extends Component{

    handleEditorChange = (e) => {
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
      }

      render() {
        return (
                 <Editor
            apiKey="7xycszs4u6c9g5rtjx5qwz694nee97259fvliuejqboxmbn4"
            initialValue="<p>Parrafo inicial</p>"
            init={{
              height: 300,
               plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount image code'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | image |  help  | code',
              
            }}
            onChange={this.handleEditorChange}
          />
          
        );
      }
} 

export default EditorTexto;