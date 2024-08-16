import Styles from "../Styling/Header.module.css";
function Header() {
  return (
    <>
      <div className={Styles.outer_header}>
        <p className={Styles.name}>Sajid Khattak</p>
        <ul className={Styles.header}>
          <li>Home</li>
          <li>Projects</li>
          <li>Manifesto</li>
          <li>Contacts</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
