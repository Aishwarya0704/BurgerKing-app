import { FooterCopyright } from "./FooterCopyright";
import { FooterLogo } from "./FooterLogo";
import { FooterSocial } from "./FooterSocial";

export const FooterBottomInfo = () => {
    return (
        <div className='footer-bottom-info'>
            <FooterLogo/>
            <FooterCopyright/>
            <FooterSocial/>
        </div>
    );
}