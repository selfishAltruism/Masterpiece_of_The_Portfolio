import Profile from "../widgets/Profile";
import Career from "../widgets/Career";
import DevelopmentLog from "../widgets/DevelopmentLog";

export default function Home() {
  return (
    <main className="flex w-screen h-screen bg-gradient-to-br from-gray-700 to-black">
      <h1 className="sr-only">강민규 프론트엔드 개발자 포트폴리오</h1>
      <section className="w-1/3 h-full" aria-label="프로필">
        <Profile />
      </section>
      <section className="w-1/3 h-full" aria-label="주요 경력">
        <Career />
      </section>
      <section className="w-1/3 h-full" aria-label="개발 로그">
        <DevelopmentLog />
      </section>
    </main>
  );
}
