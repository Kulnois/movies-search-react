import React from 'react';

import { Input } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div>
        <Input 
            type="search" 
            className="search" 
            placeholder={placeholder} 
            onChange={handleChange} />
    </div>
);