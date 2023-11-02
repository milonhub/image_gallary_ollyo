import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
// import style from './add_image.module.css'
let imageStore = [];
console.log(imageStore)
 export const Addimage = (props) => {
  
  const [image, setImage] = useState([]);
  const {getRootProps,  getInputProps, isDragActive,} = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) =>{
        console.log(acceptedFiles);
        setImage(
          [...image,
          ...acceptedFiles.map((upfile)=> Object.assign(upfile, {
              preview: URL.createObjectURL(upfile)
              })
              )
            ]
        )
       
      }

})
imageStore = [...image]
props.onImage(imageStore)
console.log(imageStore.length);

//  useEffect(()=>{
    
//  },)

  return (
    
      
      <div {...getRootProps()} >
        <input {... getInputProps()}/>
       {isDragActive ? <span>Relase the files</span>: <span>Drag and drop the files.... </span> }
      
       {imageStore.map((upfile)=>{
            return (
              
                    <img src={upfile.preview} alt= 'preview'/>
                
            )
        })}
       
       </div>
      
  
    
  )


// if(image.length === 0 || image.length === 1) {

// }
 
}

