import logo from '/logo.svg'
import classes from './Logo.module.css'

export default function Logo() {
  return (
    <div className={`${classes.header__logo}`}>
    <img src={logo} alt={'Логотип компании'} />
    <div>{'Фермерские продукты'}</div>
  </div>
  )
}