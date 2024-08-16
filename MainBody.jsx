import styl from "../Styling/MainBody.module.css";
function MainBody() {
  return (
    <>
      <div className={styl.MainBody}>
        <img className={styl.img} src="src/assets/Sajid Saleem.png" alt="" />
        <h1>I Introduce Myself as a FULL-STACK Developer</h1>
        <p className={styl.intro_para}>
          Salam🙂 I am Sajid Saleem Khattak. I am a Full Stack Developer with 2+
          years of hands-on experience, specializing in React.js and front-end
          technologies. Self-taught professional skilled in HTML, CSS, and
          JavaScript. Passionate about coding and developing web applications,
          with a strong drive for continuous learning and innovation.
        </p>
        <div className={styl.buttons}>
          <button className={styl.btn1}>Get in Touch</button>
          <button className={styl.btn2}>Download CV</button>
        </div>
      </div>
    </>
  );
}

export default MainBody;
