
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/NoelAnimation.css';

const NoelAnimation = () => {
  const [animate, setAnimate] = useState(true);

  const props = useSpring({
    to: { transform: animate ? 'translateY(-50%)' : 'translateY(50%)' },
    from: { transform: 'translateY(0)' },
    reset: true,
    reverse: animate,
    onRest: () => setAnimate(!animate),
  });

  return (
    <div className="noel-container">
      <animated.img
        src="../image1/noel6.png"
        width="1100" height="700"
        alt="Christmas Tree"
        className="noel-tree"
        style={props}
      />
    </div>
  );
};

export default NoelAnimation;