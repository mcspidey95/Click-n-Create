import React from 'react'
import './style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { ArrowRight } from 'lucide-react';

const BgRemover = () => {
    const [image, setImage] = useState(null);
    const [bgremove, setBgremove] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChangeBg = () => {
        const apikey = 'jRuEHkrHxKpBi6CefhzzSgpp';
        const url = 'https://api.remove.bg/v1.0/removebg';
        
        const formData = new FormData();
        formData.append('image_file', image);
        formData.append('size', 'auto');

        fetch(url, {
            method: 'POST',
            headers: {
                'X-Api-Key': apikey,
            },
            body: formData
        }).then((res) => res.blob()).then((blob)=>{
            const reader = new FileReader();
            reader.onloadend = () => setBgremove(reader.result)
            reader.readAsDataURL(blob);
        });
    }

  return (
    <main>
        <div className='bg-container-1'>
        <div className='form' onClick={() => document.querySelector(".input-field").click()} onChange={(e) => {setImage(e.target.files[0])}}>
            <input type='file' accept='image/*' className='input-field' hidden onChange={
                ({target: {files}}) => setPreview(URL.createObjectURL(files[0]))
            } />

            {image ? <img className='preview' src={preview} alt='' /> : <> <FontAwesomeIcon icon={faUpload} size='3x' /> <p>Browse Files to upload</p> </>}
        </div>

        <section className='uploaded-row' onClick={handleChangeBg}>
            <FontAwesomeIcon icon={faSprayCanSparkles} size='2x' /> Remove Background
        </section>
        </div>

        <div className='arrow'><ArrowRight color='#854CE6' size={100} /></div>

        <div className='bg-container-2'>
        <div className='form'>

            {bgremove ? <img src={bgremove} width={400} alt='' /> : <> <FontAwesomeIcon icon={faImage} size='3x' /> <p>Removed Background</p> </>}
        </div>

        <a href={bgremove} download={"bg-remove.png"} className='uploaded-row'>
            <FontAwesomeIcon icon={faDownload} size='2x' /> Download
        </a>
        </div>
    </main>
  )
}

export default BgRemover