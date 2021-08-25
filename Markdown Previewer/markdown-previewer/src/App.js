import React, {useState} from 'react';
import './App.css';

// Create reference instance
const marked = require('marked');


function App() {
  const [previewHtml, setHtml] = useState('');
  
 
  return (
    <div className="app">
      <h1 id='title'>Markdown Previewer</h1>
      <label class="editor__label" for="editor">Text editor</label>
      
      <textarea name="" id="editor" cols="30" rows="10"  
        onChange = {e => {setHtml(marked(e.target.value));}}>
      </textarea>

      
      <label class="preview__label" for="preview">Preview</label>
      <div id="preview" dangerouslySetInnerHTML={{__html: previewHtml}}></div> 
    </div>
  );
}

export default App;
