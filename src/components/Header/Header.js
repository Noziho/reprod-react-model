import './Header.css';
import logo from '../../assets/images/logo.png'
export const Header = () => {
    return (
      <header>
          <div>
              <img src={logo} alt="Logo"/>
          </div>
      </header>
    );
}