import AdvantagesCard from "../AdvantagesCard/AdvantagesCard";
import Button from "../Button/Button";
import { advantagesCards } from "../../mocks/data";


export default function AdvantagesSection({title}) {
  return (
    <section className="advantages container">
      <h2>{title}</h2>
      <ul className="adv__wrapper">
      {advantagesCards.map((card, index) => (
        <li key={index}>
          <AdvantagesCard  label={card.label} title={card.title} text={card.text} isFarm={card.isFarm} icon={card.icon}/>
        </li>
    ))}
      </ul>
      <Button title={'Купить'} />
    </section>
  )
}