import React, {useState} from "react";
import Tesseract from "tesseract.js";

const ImageToText = () => {
    const [image , setImage] = useState(null);
    const [text, setText] = useState(null);

    const handleChange = (e)=>{
        const image = e.target.files[0];
        setImage(image)
        console.log(image);
    };
    const handleImagetoText = async () => {
        Tesseract.recognize(image, "eng").then((res) =>{
            setText(res.data.text)

        }).catch((err) =>{
            console.error(err);
        })
    }
    return (
        <div className="flex justify-center my-4">
            <div className="space-y-3">
            <h2>Image to text</h2>
            <div className="space-y-4">
                <p>Select Image</p>
                <input type="file" onChange={handleChange}/>
            </div>
            
            <buton 
            onClick={handleImagetoText} 
            className="border px-4 py-2 round-md font-semibold bg-slate-50 hover:bg-slate-300">
                 Convert Image to Text </buton>

            
                <div>{text && <p>{text}</p>}</div>
            
            
            </div>
            
        </div>
    );
}

export default ImageToText;
