import previewImage from '../../assets/images/pictures/preview-img.png';
import { Companies } from '../Companies';
export const Preview = () => {

  return (
    <section className='w-full flex flex-col items-center'>
    <div className="w-[90%] flex flex-col justify-center">
        <img src={previewImage} className='w-full'/>
    </div>
    <Companies/>
      
    </section>
  );
};