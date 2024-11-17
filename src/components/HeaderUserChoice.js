import { HeaderDivider } from './HeaderDivider';
import { HeaderLocationInput } from './HeaderLocationInput';
import { HeaderToggle } from './HeaderToggle';

export const HeaderUserChoice = () => {
    return (
        <div className='header-user-choice'>
            <HeaderToggle/>
            <HeaderDivider/>
            <HeaderLocationInput/>
        </div>
    );
}