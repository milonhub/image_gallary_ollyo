import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';


 export const Addimage = () => {
  const imageStore = [];
  const [image, setImage] = useState([]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) =>{
        setImage(
            acceptedFiles.map((upfile)=> Object.assign(upfile, {
            preview: URL.createObjectURL(upfile)
            })
            )
        )
       
      }

})
useEffect(()=>{
    imageStore = [{...(image.preview)}]
},)
  return (
    <div>
       <div {...getRootProps()}>
        <input {... getInputProps()}/>
       {isDragActive ? <p>Relase the files</p>: <p>Drag and drop the files.... </p> }
       </div>
       <div>
        {imageStore.map((upfile)=>{
            return (
                <div>
                    <img src={upfile.preview} style ={{width: "600px", height: '500px', border: "1px solid}"}}alt= 'preview'/>
                </div>
            )
        })}
       </div>
       
    </div>
    
  )
}

