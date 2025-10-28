import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기에서 로그인 API 연동 가능
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요!");
      return;
    }

    alert("로그인 성공! 🎉");
    navigate("/"); // 로그인 성공 시 랜딩 페이지로 이동
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(174deg, rgba(1,17,41,1) 0%, rgba(4,60,143,1) 52%, rgba(0,8,80,1) 100%)",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <h1 style={{ color: "#FFE99E", marginBottom: "40px" }}>로그인</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "40px 50px",
          borderRadius: "20px",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 0 10px rgba(255,255,255,0.1)",
        }}
      >
        <label
          style={{
            color: "white",
            fontWeight: "600",
            marginBottom: "8px",
            fontSize: "15px",
          }}
        >
          이메일
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
          style={{
            width: "280px",
            height: "40px",
            marginBottom: "20px",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />

        <label
          style={{
            color: "white",
            fontWeight: "600",
            marginBottom: "8px",
            fontSize: "15px",
          }}
        >
          비밀번호
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          style={{
            width: "280px",
            height: "40px",
            marginBottom: "30px",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#FFE99E",
            color: "#021C41",
            fontWeight: "700",
            border: "none",
            borderRadius: "8px",
            height: "45px",
            cursor: "pointer",
            fontSize: "17px",
          }}
        >
          로그인하기
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            marginTop: "15px",
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px",
            height: "40px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          ← 메인으로 돌아가기
        </button>
      </form>
    </div>
  );
}