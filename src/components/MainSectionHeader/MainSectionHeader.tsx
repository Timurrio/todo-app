import { memo } from 'react'
import ChangeThemeButton from '../UI/ChangeThemeButton/ChangeThemeButton'
import styles from './MainSectionHeader.module.scss'

interface MainSectionHeaderProps {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const MainSectionHeader = memo(function MainSectionHeader({ theme, setTheme }: MainSectionHeaderProps) {
    return (
        <div className={styles.header__container}>
            <h1>T O D O</h1>
            <ChangeThemeButton theme={theme} setTheme={setTheme} />
        </div>
    )
})

export default MainSectionHeader
