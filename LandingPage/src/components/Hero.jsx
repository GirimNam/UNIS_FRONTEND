const APP_STORE_URL = "https://www.apple.com/kr/app-store/";
const PLAY_STORE_URL = "https://play.google.com/store/games?hl=ko";

export default function Hero() {
  return (
    <div className="box1">
      <div className="box_text">
        <h1>내 손 안의 작은 멘탈코치</h1>
        <p className="text1">
          Lumental은 객관적 생체 지표를 활용해 스트레스, 불안 등 사용자의 심리 상태를 진단하고, 사용자의 상태에 맞는
          AI챗봇의 분석과 함께 개인 맞춤형 리포트를 제공합니다.
        </p>
        <div className="install">
            <a
            className="image-button"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="App Store로 이동"
            ><img className="apple" src="/애플.png" alt="apple store" />
            </a>

            <a
            className="image-button"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play로 이동"
            >
                <img src="/구글.png" alt="google store" />
            </a>
          
        </div>
      </div>
    </div>
  );
}
