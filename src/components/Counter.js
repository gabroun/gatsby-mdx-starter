import React, { useState} from 'react';
import { css } from '@emotion/core';

const Counter = () => {
   const [counter, setCounter] = useState(0);
  const label = `👋 ${counter} ${counter === 1 ? 'counter' : 'counters'}`;
  return (
     <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setCounter(counter + 1)}
    >
      {label}
    </button>
  );
}

export default Counter