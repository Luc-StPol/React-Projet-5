import banner from '../../images/paysage_falaise.png'
import '../../styles/Home.scss'
import ListLogement from '../../components/ListLogement'


export default function Home() {
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="falaises" />
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
           <ListLogement />
        </div>
    )
}