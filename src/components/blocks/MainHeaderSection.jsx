import imgBg from "/frame.svg"

export default function MainHeaderSection({title, subtitle}) {
  return (
    <section className="main-header">
      <div className="main-header__content container">
        <div className="main-header__text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          
        </div>
        <div className="main-header__img">
          <img src={imgBg} />
          </div>
      </div>
    </section>
  )
}