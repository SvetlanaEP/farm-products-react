import classes from './AdvantagesCard.module.css'

export default function AdvantagesCard({title, label, text, isFarm, icon}) {
  return (
    <div className={isFarm ? `${classes.isFarm} ${classes.card}` : classes.card }>
      <div className={classes.heading}> 
        <img src={icon}></img>
        <div>
          <span className={classes.label}>{label}</span>
          <h3 className={classes.title}>{title}</h3>
        </div>
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  )
}