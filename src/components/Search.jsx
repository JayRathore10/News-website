import { useState } from 'react';
import './Search.css';

export function Search({ setSearch }) {
  const [value, setValue] = useState('');
  return (
    <>
      <div className='search-div'>
        <input
          className='search'
          onChange={(e) => {
            setValue(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearch(value)
            }
          }}
        />
        <button
          className='search-btn'
          onClick={() => {
            setSearch(value)
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}