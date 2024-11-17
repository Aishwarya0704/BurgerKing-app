import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderUserChoice } from './HeaderUserChoice';
import { HeaderNavMenuList } from './HeaderNavMenuList';
import { HeaderSearch } from './HeaderSearch';

export const Header = () => {
    return (
        <div className='header'>
            <HeaderLogo/>
            <HeaderUserChoice/>
            <HeaderNavMenuList/>
            <HeaderSearch/>
        </div>
    );
}