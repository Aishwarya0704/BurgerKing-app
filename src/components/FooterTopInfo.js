import { FooterSection1 } from "./FooterSection1";
import { FooterSection2 } from "./FooterSection2";
import { FooterSection3 } from "./FooterSection3";
import { FooterSection4 } from "./FooterSection4";
import { FooterSection5 } from "./FooterSection5";

export const FooterTopInfo = () => {
    return (
        <div className='footer-top-info'>
            <FooterSection1/>
            <FooterSection2/>
            <FooterSection3/>
            <FooterSection4/>
            <FooterSection5/>
        </div>
    );
}