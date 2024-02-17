
//import { Button } from '../../components/UI/Button/Button';
import instagram from '../../assets/images/instagram.svg';
import logo from '../../assets/images/Logo.svg';
import teamilkImage from '../../assets/images/teaImageHeader.svg';
import bubleTeaIcon from '../../assets/images/BubbleTea.svg';
import styles from './MainPage.module.css';

export const MainPage = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.logo_bg}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <img className={styles.teamilkImage} src={teamilkImage} alt="teamilkImage"/>
            </div>
            <div className={styles.title}>
                <h1>
                Not Your Average <br />Bubble<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tea <img src={bubleTeaIcon} alt="bubleTeaIcon"/>
                </h1>
                <h2>
                Чайная Tea&Milk преветствует вас у себя в гостях!!! Здесь вы можете ознакомиться с нашим меню и актуальными акциями
                </h2>
            </div>
        </header>
        {/* 
        <div className={styles.nav}>
           <Button>меню</Button>
           <Button>акции</Button>
           <Button>помощь в выборе напитка</Button>
           <Button>десерты</Button>
        </div> 
       */}

        <footer className={styles.footer}>
           
            <a href='https://www.instagram.com/tea_milk_minsk/'><img src={instagram} alt="instagram" />
            <p >@tea_milk_minsk</p></a>
           
        </footer>
        </>
        
    );
};

