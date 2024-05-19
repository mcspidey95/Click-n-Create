import React from 'react'
import './style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div className='flex justify-center my-10'>
        <div>
            Add Go Back Icon
            <div>
                <div className='my-4'>
                    <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <button onClick={handleChangeBg} className="px-4 py-2 rounded-md border">Remove Background</button>
            </div>

            <div>
                {
                    bgremove && (
                        <img src={bgremove} alt="Removed Background" />
                    )
                }
            </div>
        </div>
    </div>

    
  )
}

export default BgRemover