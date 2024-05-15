import logo from '../../assets/images/whiteLogo.svg'
import '../../styles/Style.scss'
export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}