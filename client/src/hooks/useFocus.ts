import {RefObject, useEffect, useState} from 'react';

export const useFocus = (ref: RefObject<any>, timer?: number, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => {
      if (timer) {
        setTimeout(() => {
          setState(false);
        }, timer);
      } else {
        setState(false);
      }
    };
    ref.current?.addEventListener('focus', onFocus);
    ref.current?.addEventListener('blur', onBlur);

    return () => {
      ref.current?.removeEventListener('focus', onFocus);
      ref.current?.removeEventListener('blur', onBlur); // eslint-disable-line
    };
  }, []); // eslint-disable-line

  return state;
};
