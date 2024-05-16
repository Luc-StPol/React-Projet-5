import { useParams } from 'react-router';
import Carousel from '../../components/Carousel';
import logements from '../../assets/logements.json';
import '../../styles/Logement.scss';
import redStar from '../../assets/icones/redStar.svg';
import grayStar from '../../assets/icones/grayStar.svg';
import Collapse from '../../components/Collapse';

export default function Logement() {
  const { logementI } = useParams();
  const logement = logements[logementI];

  return (
    <div>
      <Carousel logement={logement} />
      <div className="intro">
        <div className="presentation">
          <h3>{logement.title}</h3>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <p className="tag" key={i}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="hostAvis">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="profil host" />
          </div>
          <div>
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <span key={star}>
                  <img src={star <= logement.rating ? redStar : grayStar} className="star" alt="star" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="details">
        <Collapse label="Description" className="collapse">
          <div>{logement.description}</div>
        </Collapse>
        <Collapse label="Équipements" className="collapse">
          {logement.equipments.map((equipment, i) => (
            <p key={i}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </div>
  );
}
