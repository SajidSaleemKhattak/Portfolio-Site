import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import styles from "../Styling/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer_Parent_container}>
      <h2>Contact Me</h2>
      <p className={styles.para}>
        Seasoned MERN Stack Developer with over 2 years of hands-on experience
        in crafting dynamic, responsive web applications. Proficient in MongoDB,
        Express.js, React, and Node.js, with a passion for building scalable,
        efficient solutions that deliver exceptional user experiences.
      </p>
      <div className={styles.infoParent}>
        <MdEmail className={styles.icons1} />
        <p className={styles.email}>sajidsaleem707@gmail.com</p>
      </div>
      <FaLinkedin className={styles.icons} />
      <FaGithub className={styles.icons} />
      <BsTwitterX className={styles.icons} />
      <FaInstagram className={styles.icons} />
    </div>
  );
}

export default Footer;
