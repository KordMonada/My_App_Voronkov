import React from 'react';
import Block from './Block';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import f5 from '../images/f5.png';

function Main() {
  const blocks = [
    { image: f3, title: 'Первый блок', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
    { image: f4, title: 'Второй блок', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
    { image: f5, title: 'Третий блок', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
  ];

  return (
    <div className="center">
      <div className="container1">
        <div className="center__inner-wrapper">
          {blocks.map((block, index) => (
            <Block key={index} {...block} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
