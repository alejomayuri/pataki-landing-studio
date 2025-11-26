import style from "./FooterSocial.module.css";
import Instagram from "../../icons/demoIcons/Instagram";
import TikTokIcon from "../../icons/demoIcons/TikTokIcon";

export const FooterSocial = ({ text_insta, text_tiktok }) => {
    return (
        <section className={style.container} id="social">
            <div className={style.footerSocialWrapper}>
                <div>
                    <div className={style.nameWrapper}>
                        <span>INSTA</span>
                        <span><Instagram width={25} height={25} /></span>
                        <span>GRAM</span>
                    </div>
                    <h3 className={style.title}>Deleita tus ojos.</h3>
                    <p className={style.text} dangerouslySetInnerHTML={{ __html: text_insta }}></p>
                </div>
                <div>
                    <div className={style.nameWrapper}>
                        <span>TIK</span>
                        <span><TikTokIcon width={25} height={25} /></span>
                        <span>TOK</span>
                    </div>
                    <h3 className={style.title}>Diviertete con nosotros.</h3>
                    <p className={style.text} dangerouslySetInnerHTML={{ __html: text_tiktok }}></p>
                </div>
            </div>
        </section>
    )
}

export default FooterSocial;