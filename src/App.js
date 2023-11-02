
// import ImageGallery from './Components/Imagegallery';
import './App.css';
import { Addimage } from './Components/Add_Image';
function App() {

 const imagenumber=(data)=>{
console.log(data)
  }
  return (
    <div className="container">
      {/* <ImageGallery /> */}
      <div className='features'><Addimage  onImage = {imagenumber}/></div>
      
      <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>
      <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>
      <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>

      <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>
      
          <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>

          <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>

          <div className='drop_image'><Addimage  onImage = {imagenumber}/></div>
    </div>
  );
}

export default App;
