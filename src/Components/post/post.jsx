import './post.css'
import imgSrc from '../../assets/Fall leaves Stock Photo.jpg'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Post() {

  const {blogKey} = useParams();

  const blogContent = localStorage.getItem(blogKey);

    const HTMLtoText=({htmlCode})=>{

    const styles = {
      container:{
        width: '80%',
        margin: 'auto',
        wordwrap: 'break-work',
        backgroundColor: 'Linen',
      },
      code: {
        fontFamily: 'roboto',
        fontSize: '20px',
        // textAlign: 'justify',
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
    <div className='post1'> 
    {/* <img src={imgSrc} alt="" className='postImg' />
    <div className="postInfo">
    <div className="postCats">
        <span className="postCat">  </span>
        <span className="postCat">  </span>
      </div>
      <span className="postTitle"> </span>
      <hr />
      <span className="postDate">  </span>
    </div>
  <p className='postDescription'> */}
    <HTMLtoText htmlCode={blogContent} />
    {/* <div dangerouslySetInnerHTML={{ __html: blogContent }}></div> */}
    </div>

  
  </>
  )
}
