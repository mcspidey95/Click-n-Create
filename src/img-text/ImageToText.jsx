import React, {useState} from "react";
import Tesseract from "tesseract.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ChevronLeft } from "lucide-react";

const ImageToText = () => {
    const [image , setImage] = useState(null);
    const [text, setText] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImagetoText = async () => {
        Tesseract.recognize(image, "eng").then((res) =>{
            setText(res.data.text)

        }).catch((err) =>{
            console.error(err);
        })
    }
    return (
        <div>
            <a href='/'><h2 className='h2'><ChevronLeft size={60} /></h2></a>
        <div className="hero">
            <div className='bg-container'>
        <div className='form' onClick={() => document.querySelector(".input-field").click()} onChange={(e) => {setImage(e.target.files[0])}} >
            <input type='file' accept='image/*' className='input-field' hidden onChange={
                ({target: {files}}) => setPreview(URL.createObjectURL(files[0]))
            } />

            {image ? <img className="preview" src={preview} alt='' /> : <> <FontAwesomeIcon icon={faUpload} size='3x' /> <p>Browse Files to upload</p> </>}
        </div>
        
        <CopyToClipboard text={text}>
        <section className='uploaded-row' onClick={handleImagetoText}>
            {text ? <div className="but"><FontAwesomeIcon icon={faCopy} size='2x' /> Copy Text </div>  : <> <FontAwesomeIcon icon={faGear} size='2x' /> Extract Text </> }
        </section>
        </CopyToClipboard>
        </div>
        
        <div>
            <CopyToClipboard text={text}>
                <div></div>
            </CopyToClipboard>
        </div>

        </div>
        </div>
    );
}

export default ImageToText;
