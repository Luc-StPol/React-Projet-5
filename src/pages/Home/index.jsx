import bannerImg from '../../assets/images/paysage_falaise.png'
import '../../styles/Home.scss'
import ListLogement from '../../components/ListLogement'


export default function Home() {
    return (
        <div>
            <div className='banner'>
                <img src={bannerImg} alt="falaises" className='imgBanner-home' />
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
           <ListLogement />
        </div>
    )
}