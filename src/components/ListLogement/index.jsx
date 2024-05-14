import logements from '../../assets/logements.json'
import '../../styles/Home.scss'

export default function ListLogement() {
    return (
        <div className='cardList'>
        {logements.map((logement) => (
                <ul className='card' key={logement.id}>
                    <li><img src={logement.cover} alt={logement.title}/></li>
                    <li className='card-title'>{logement.title}</li>
                </ul>
        ))}
    </div>
    )
}