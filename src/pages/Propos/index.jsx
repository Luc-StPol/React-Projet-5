import '../../styles/Home.scss';
import bannerImg from '../../assets/images/paysage_montagne.png';
import Collapse from '../../components/Collapse';
import propos from '../../assets/propos.json';

export default function Propos() {
  return (
    <div>
      <div className="banner">
        <img src={bannerImg} alt="montagne" className="imgBanner-propos" />
      </div>
      {propos.map((propos) => (
        <div className="collapsePropos" key={propos.id}>
          <Collapse label={propos.title}>
            <p>{propos.content}</p>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
