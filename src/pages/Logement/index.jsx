import { useParams } from 'react-router';
import Carousel from '../../components/Carousel';
import logements from '../../assets/logements.json';

export default function Logement() {
  const { logementI } = useParams();
  const logement = logements[logementI];

  return (
    <div>
      <p>{logement.title}</p>
      <Carousel logement={logement} />
    </div>
  );
}
