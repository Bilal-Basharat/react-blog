import './write.css'
import React, {useRef, useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {

  const quillRef = useRef(null);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const modules = {
    toolbar: [
      [{heading:[1,2,4,5,6,false]}],
      ['bold','italic','underline','strike'],
      [{list:'ordered'},{list:'bullet'}],
      [{indent: "-1"},{indent: "+1"}],
      ["link"],
      [{align:[]}],
      ["image"],
      ["clean"],
    ]
  }
  
  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "bullet",
    "image",
    "link",
  ];

  const handleText = () => {
    if(quillRef.current){
      const editor = quillRef.current.getEditor();
      const content = editor.root.innerHTML;
      console.log(content.trim().length);
      setText(content);
      if(content.trim().length !== 11){

        const blogKey = Date.now().toString(); // Generate a unique key
        
        const existingKeys = JSON.parse(localStorage.getItem('blogKeys') || '[]');
        
        existingKeys.push(blogKey);
        
        localStorage.setItem('blogKeys', JSON.stringify(existingKeys));
        
        localStorage.setItem(blogKey, content);
        
        if (image) {
          localStorage.setItem(blogKey + '_image', image);
        }
        setText("");
        setImage(null);
      }else {
        window.alert("Please add some text then submit");
      }
    }
  }


  const HTMLtoText=({htmlCode})=>{

    const styles = {
      container:{
        width: '80%',
        margin: 'auto',
        wordwrap: 'break-work',
        backgroundColor: 'wheat',
      },
      code: {
        fontFamily: 'roboto',
        fontSize: '20px',
        textAlign: 'justify',
        display: 'block',
        color: 'green',
      },
    }

    return (
      <div style={styles.container} className='write'>

      <code dangerouslySetInnerHTML={{__html:htmlCode}}
        style={styles.code}
        />
        </div>
    )
  };

  return (
    <>

     <div className='write'>
             <div className="writeFormGroup">
        <h1 style={{textAlign:'center',marginBottom:'20px'}}> Create Blog </h1>
             <ReactQuill ref={quillRef} value={text} formats={quillFormats} modules={modules} theme='snow' />
             {/* <input type="file" onChange={handleImageChange} />    */}

     </div>
     <button onClick={handleText} className='writeSubmit'> Post </button>
       
    </div>
    {/* <HTMLtoText htmlCode={text} /> */}
      </>

  )
}
