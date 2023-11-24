// src/components/Main.js

import First from './routes/First';
import Second from './routes/Second';
// import Popup from './routes/Popup';

export default function Main(){
  return (
    <div>
        {/* <Popup /> */}
        <First />
        <Second /> 
    </div>
  );
}
