import ExperianceCard from "./components/ExperianceCard";
import Footer from "./components/Footer";
import stylo from "./Styling/ThirdSection.module.css";
function ThirdSection() {
  return (
    <div className="Third_SECTION">
      <h1 className={stylo.heading}>Experiance</h1>
      <ExperianceCard></ExperianceCard>
      <Footer></Footer>
    </div>
  );
}

export default ThirdSection;
