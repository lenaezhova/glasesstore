import {RefObject, useEffect, useState} from 'react';
export default function useIsHover(ref: RefObject<any>, timeout?: number) {
  const [isHovering, setHovering] = useState(false);

  const on = () => {
    if (timeout) {
      setTimeout(() => setHovering(true), timeout);
    } else {
      setHovering(true);
    }
  };
  const off = () => {
    if (timeout) {
      setTimeout(() => setHovering(false), timeout);
    } else {
      setHovering(false);
    }
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, []); // eslint-disable-line

  return isHovering;
}
