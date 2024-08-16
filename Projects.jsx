import styling from "../Styling/Projects.module.css";

function Projects() {
  let dummy_arr = [1, 2, 3, 4, 5];
  return (
    <div className={styling.parent}>
      {dummy_arr.map((element) => (
        <div key={element} className={styling.card}></div>
      ))}
    </div>
  );
}

export default Projects;
