import classes from './Header.module.css'
import Button from '../../Button/Button'
import Logo from '../../layout/Logo/Logo'

export default function Header() {
  return (
    <header className={`${classes.header} container`}>
      <Logo />
      <Button title={'Купить'}/>
      
  </header>
  )
}