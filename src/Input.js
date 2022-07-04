import { useState } from 'react';

export function Input() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      {inputValue && <p>{inputValue}</p>}
      <input
        value={inputValue}
        // Basic
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={(e) => {
          if (!e.target.value.includes('t')) {
            setInputValue(e.target.value);
          }
        }}
      />
    </div>
  );
}
