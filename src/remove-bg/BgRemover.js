import React from 'react'
import './style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const BgRemover = () => {
    const [image, setImage] = useState(null);
    const [bgremove, setBgremove] = useState(null);

    console.log(bgremove);

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
        <form className='form' onClick={() => document.querySelector(".input-field").click()}>
            <input type='file' accept='image/*' className='input-field' hidden onChange={
                (e) => setImage(e.target.files[0])
            } />

            {image ? <img src={image} width={150} alt='' /> : <> <FontAwesomeIcon icon={faUpload} size='3x' /> <p>Browse Files to upload</p> </>}
        </form>

        <section className='uploaded-row' onClick={handleChangeBg}>
            <FontAwesomeIcon icon={faSprayCanSparkles} size='2x' /> Remove Background
        </section>
        </div>


        <div className='bg-container-2'>
        <form className='form'>

            {image ? <img src={bgremove} width={150} alt='' /> : <> <FontAwesomeIcon icon={faSprayCanSparkles} size='3x' /> <p>Background Removed</p> </>}
        </form>

        <section className='uploaded-row'>
            <FontAwesomeIcon icon={faDownload} size='2x' /> Download
        </section>
        </div>
    </main>
  )
}

export default BgRemover