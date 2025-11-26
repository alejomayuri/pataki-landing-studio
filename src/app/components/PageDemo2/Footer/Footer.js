import style from './Footer.module.css'
import Footer from "../../PageDemo1/Footer/footer"

export const FooterSite = () => {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footerWrapper}>
                    <div className={style.infoContainer}>
                        <div>
                            <h3>MÁS INFORMACIÓN</h3>
                            <ul>
                                <li><a href='#'>Sobre nosotros</a></li>
                                <li><a href='#'>Novedades</a></li>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Política de privacidad</a></li>
                                <li><a href='#'>Términos de uso</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>SOCIAL</h3>
                            <ul>
                                <li><a href='#'>Facebook</a></li>
                                <li><a href='#'>Instagram</a></li>
                                <li><a href='#'>TikTok</a></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </footer>
            <Footer />
        </>
    )
}

export default FooterSite