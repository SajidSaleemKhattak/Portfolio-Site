import shoshta from "../Styling/ExperianceCard.module.css";

function ExperianceCard() {
  let dummy_array = [1, 2, 3];

  return (
    <>
      {dummy_array.map((elem) => (
        <div className={shoshta.card}>
          <div key={elem} className={shoshta.cardItem}>
            <h3>
              Title (here we will have image + text etc NOTE THAT: Recent
              Experience on Top)
            </h3>
            <p>Description:</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExperianceCard;
