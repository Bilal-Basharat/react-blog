import React, {useRef, useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Home() {
  
  const quillRef = useRef(null);
  const [text, setText] = useState("");

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
      console.log(content);
      setText(content);
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
      <div style={styles.container}>

      <code dangerouslySetInnerHTML={{__html:htmlCode}}
        style={styles.code}
        />
        </div>
    )
  };

  return (
    <>
<div className='container' style={{width:'50%',height: '500px',margin:'20px auto 0 auto'}}>
      
      <ReactQuill 
      ref={quillRef}
      onChange={handleText}
      value={text}
      modules={modules}
      theme='snow'
      />
    </div>
    <HTMLtoText htmlCode={text} />
      </>

  )
}
