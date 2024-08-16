import Projects from "./components/Projects";
import mystyle from "./Styling/SecondSection.module.css";
function SecondSection() {
  return (
    <>
      <div className={mystyle.imageContainer}>
        <img className={mystyle.img1} src="src\assets\img4.png" alt="" />
        <img className={mystyle.img} src="src\assets\img3.png" alt="" />
        <img className={mystyle.img} src="src\assets\img1.png" alt="" />
        <img className={mystyle.img} src="src\assets\img2.png" alt="" />
        <img className={mystyle.img} src="src\assets\img5.png" alt="" />
      </div>
      <h1 className={mystyle.project_heading}>Projects</h1>
      <Projects></Projects>
    </>
  );
}

export default SecondSection;
