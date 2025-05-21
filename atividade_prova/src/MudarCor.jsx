// import { useState } from 'react'

// function MudarCor (){
//     const [CorFundo, SetCorFundo] = useState('White')

//     const handleColor = (newColor) => {
//         SetCorFundo(newColor);
//     };

//     return(
//         <div>
//             <div style={{ backgroundColor:CorFundo }}>
                
//             </div>
//             <button onClick={handleColor}>Muda cor</button>
//         </div>
//     )
// }

// export default MudarCor;
import React, { useState } from 'react';

function MudarCor() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <button onClick={() => changeBackgroundColor('blue')}>Mudar Cor de Fundo</button>
      <h1>Este é o meu site</h1>
    </div>
  );
}

export default MudarCor;