"use client"
import { message } from 'antd';
import ThemeToggler from '../theme/ThemeToggler';
import styles from './Header.module.scss'

const Header = () => {

    const [messageApi, contextHolder] = message.useMessage();
  
    return <header className={styles.header}>
        <div className={styles.box}>
            <ThemeToggler />
        </div>
        {contextHolder}
    </header>
}

export default Header;