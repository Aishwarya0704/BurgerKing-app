import { FooterBottomInfo } from "./FooterBottomInfo";
import { FooterDivider } from "./FooterDivider";
import { FooterTopInfo } from "./FooterTopInfo";

export const Footer = () => {
    return (
        <div className='footer'>
            <FooterTopInfo/>
            <FooterDivider/>
            <FooterBottomInfo/>
        </div>
    );
}