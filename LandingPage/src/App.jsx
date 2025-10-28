import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowTo from "./components/HowTo.jsx";
import SectionReport from "./components/SectionReport.jsx";
import SectionChat from "./components/SectionChat.jsx";
import SectionList from "./components/SectionList.jsx";
import FooterLogo from "./components/FooterLogo.jsx";
import Login from "./Login.jsx";

export default function App() {
  return (
    <Routes>
      {/* 랜딩 페이지 */}
      <Route
        path="/"
        element={
          <div style={{position: "relative" }}>
            <Header />
            <div className="sbox1" />
            <Hero />
            <div className="sbox2" />
            <img className="hand" src="/핸드폰 시작(손 포함).png" alt="phone with hand" />
            <HowTo />
            <div className="round_box">
              <SectionReport />
              <SectionChat />
              <SectionList />
              <FooterLogo />
            </div>
            
          </div>
        }
      />

      {/* 로그인 페이지 */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
