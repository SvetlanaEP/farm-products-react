
import Logo from '../../layout/Logo/Logo'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.wrapper} container`}>
        <Logo />
        <div className={classes.copy}>
          <span>{'Создано 2021'}</span>
        </div>
      </div>

    </footer>
  )
}