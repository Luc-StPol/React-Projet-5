import { Link } from 'react-router-dom';
import logements from '../../assets/logements.json';
import '../../styles/Home.scss';

export default function ListLogement() {
  return (
    <div className="cardList">
      {logements.map((logement, i) => (
        <ul className="card" key={logement.id}>
          <li>
            <Link to={'/logement/' + i}>
              <img src={logement.cover} alt={logement.title} />
            </Link>
          </li>
          <li className="card-title">{logement.title}</li>
        </ul>
      ))}
    </div>
  );
}
