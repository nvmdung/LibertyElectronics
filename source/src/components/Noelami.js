// WavingSanta.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/WavingSanta.css';

const WavingSanta = () => {
  const props = useSpring({
    to: async (next) => {
      while (true) {
        await next({ transform: 'rotate(20deg)' });
        await next({ transform: 'rotate(0deg)' });
        await next({ transform: 'rotate(-20deg)' });
        await next({ transform: 'rotate(0deg)' });
      }
    },
    from: { transform: 'rotate(0deg)' },
  });

  return <animated.img className="waving-santa" src="../image1/satan.png" alt="Waving Santa" style={props} />;
};

export default WavingSanta;
