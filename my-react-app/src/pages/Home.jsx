import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button
        onClick={goToAbout}
        style={{
          border: "2px solid black"
        }}
      >
        소개 페이지로 이동
      </button>
    </div>
  );
}

export default Home;