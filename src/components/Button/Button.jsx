import classes from './Button.module.css'

export default function Button({title}) {
  return (
    <button className={`${classes.button}`}>
      {title}
    </button>
  )
}