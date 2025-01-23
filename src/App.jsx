import React from 'react';
import Button from './components/Button';

export default function App() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Button text='I am a Button' color='bg-violet-400' alto='h-10' ancho='w-40' cursor='cursor-pointer' />
    </div>
  );
}


/*
*****NOTA: En los siguientes casos, todos los estilos deben ser con tailwindcss*****

text: Representa el contenido del botón (texto)

color: Representa el color de fondo del botón. Ejemplo: 'bg-violet-400'

alto: Representa el valor del alto que puede tomar del botón. Ejemplo: 'h-10'

ancho: Representa el valor del ancho que puede tomar del botón. Ejemplo: 'w-40'

cursor: Representa el valor del cursor que puede tomar del botón. Ejemplo: 'cursor-pointer'

*/