import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <img className="logo1" src="/로고 영어글씨만.png" alt="lumental logo" />
      <button className="loginButton" onClick={() => navigate("/login")}>
        로그인하기
      </button>
    </div>
  );
}
