
import { Button } from '../../components/UI/Button/Button';
import instagram from '../../assets/images/instagram.svg';
import logo from '../../assets/images/Logo.svg';
import teamilkImage from '../../assets/images/teaImageHeader.svg';
import styles from './MainPage.module.css';

export const MainPage = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.logo_bg}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <img className={styles.teamilkImage} src={teamilkImage} alt="teamilkImage"/>
            </div>
        </header>
        <div className={styles.nav}>
           <Button>меню</Button>
           <Button>акции</Button>
           <Button>помощь в выборе напитка</Button>
           <Button>десерты</Button>
        </div>
        <footer className={styles.footer}>
           
            <a href='https://www.instagram.com/tea_milk_minsk/'><img src={instagram} alt="instagram" />
            <p >@tea_milk_minsk</p></a>
           
        </footer>
        </>
        
    );
};

