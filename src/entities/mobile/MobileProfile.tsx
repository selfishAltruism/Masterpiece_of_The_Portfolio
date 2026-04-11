import { useState } from "react";
import { Github, Layers } from "lucide-react";

import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import Title from "@/shared/ui/Title";
import { Drawer, DrawerTrigger } from "@/shared/shadcn/components/ui/drawer";

import { TechStackDrawer } from "@/entities/main/TechStackDrawer";

const MobileProfile = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("officialkyus@gmail.com");
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1500);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <section className="relative mb-6 px-1">
      <div className="relative flex items-stretch gap-3">
        <div className="theme-text-soft absolute -right-3 -top-3 text-[8px]">
          Designed & Made by <strong>Kyu</strong>
        </div>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="h-[172px] w-[130px] rounded-md object-cover"
        />

        <div className="-mt-1 flex min-h-[170px] min-w-0 flex-1 flex-col">
          <div>
            <Title>
              <strong>강민규</strong> Kyu
            </Title>

            <p className="theme-text-primary mt-2 text-[12px] leading-tight">
              <strong>연구원</strong> @ IDIS Co., Ltd
            </p>
            <p className="theme-text-primary mt-1 text-[12px] leading-tight">
              <strong>컴퓨터공학과 졸업</strong> @ 중앙대학교
            </p>
          </div>

          <div className="relative mb-2 mt-auto w-max">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="theme-text-soft block text-left text-[12px] leading-tight underline decoration-[var(--panel-border)] underline-offset-2"
              aria-label="Copy officialkyus@gmail.com"
              title="Copy: officialkyus@gmail.com"
            >
              Email: officialkyus@gmail.com
            </button>
            <span
              aria-hidden={!isEmailCopied}
              className={`absolute right-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 rounded-md bg-black p-2 text-[12px] font-medium leading-none text-white shadow-sm transition-opacity duration-200 dark:bg-white dark:text-black ${
                isEmailCopied ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              복사됨
              <span className="absolute -right-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black dark:bg-white" />
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            <OutlineButton href="https://github.com/selfishAltruism">
              Github
              <Github size={15} className="-mr-[1px] -mt-[1px] ml-2" />
            </OutlineButton>
            <Drawer>
              <DrawerTrigger asChild>
                <BasicButton>
                  기술 스택 상세
                  <Layers size={15} className="-mr-[1px] -mt-[1px] ml-2" />
                </BasicButton>
              </DrawerTrigger>
              <TechStackDrawer />
            </Drawer>
          </div>
        </div>
      </div>

      <div className="mb-2 mt-4 flex flex-col gap-2 text-[13px]">
        <span className="inline-block w-max bg-[var(--accent-brand)] py-0.5 text-[14px] italic leading-tight text-white">
          해야할 일을 찾고, 책임감 있게 완수합니다.
        </span>
        <p className="break-keep leading-relaxed">
          <span className="text-[10px] leading-3 text-[var(--page-fg-soft)]">
            FITREAE
          </span>
          <br />
          App 개발로 시작하여,
          <strong className="text-[#0A5BBD]">
            데이터 시각화 및 테스트 시스템 기반 카운팅 알고리즘 개발
          </strong>
          까지.
        </p>
        <p className="break-keep leading-relaxed">
          <span className="text-[10px] leading-3 text-[var(--page-fg-soft)]">
            IDIS
          </span>
          <br />
          Cloud Platform 서비스 개발로 시작하여,
          <strong className="text-[#0A5BBD]">
            2차원 공간 객체 배치 시스템 개발, 클라이언트 WebSocket & WASM Load
            최적화, 검색 DB 최적화
          </strong>
          까지.
        </p>
        <p className="break-keep leading-relaxed">
          수동적으로 하기보다 필요하고 문제가 있는 부분을 찾아, <br />
          책임감 있게 완수하고 해결해 왔습니다.
        </p>
      </div>
    </section>
  );
};

export default MobileProfile;
