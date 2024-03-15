import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-100" id="header">
      <ul className='row mx-0 menu-links'>
        <li className="menu-option">
          <a href="#header"><h3>Home</h3></a>
        </li>
        <li className="menu-option">
          <a href="#elem2"><h3>Habilidades</h3></a>
        </li>
        <li className="menu-option">
          <h3>Experiencia</h3>
        </li>
        <li className="menu-option">
          <h3>Educación</h3>
        </li>
        <li className="menu-option">
          <h3>Contacto</h3>
        </li>        
      </ul>
    </header>
  );
}
