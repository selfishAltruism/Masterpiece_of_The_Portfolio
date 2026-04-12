import React, { useState } from "react";
import { Github, Layers, Linkedin } from "lucide-react";

import Title from "@/shared/ui/Title";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import { DrawerTrigger, Drawer } from "@/shared/shadcn/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";
import { cn } from "@/shared/shadcn/lib/utils";

import { TechStackDrawer } from "@/entities/main/TechStackDrawer";

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => {
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
    <div
      className={cn(
        "h-full w-full bg-transparent",
        "max-xl:flex max-xl:flex-row max-xl:items-end max-xl:justify-start max-xl:gap-7 max-xl:p-8 max-xl:pb-4 max-lg:pt-12",
        "xl:flex xl:flex-col xl:items-start xl:justify-center xl:gap-0 xl:p-0 xl:pt-0",
      )}
    >
      <div id="profile-source" className="hidden flex-col pl-8 xl:flex">
        <div>
          <img
            src="/profile_img.jpg"
            alt="Profile"
            className="relative -mb-1 h-44 w-[155px] rounded-md object-cover"
          />
        </div>

        <Title>
          <strong>강민규</strong> <span className="!font-normal">Kyu</span>
        </Title>

        <span className="theme-text-primary text-sm leading-tight xl:mt-1">
          <strong>연구원</strong> @ IDIS Co., Ltd
        </span>
        <span className="theme-text-primary text-sm leading-tight">
          <strong>컴퓨터공학과 졸업</strong> @ 중앙대학교
        </span>

        <div className="mb-5 mt-5 flex flex-col gap-2 text-[14px]">
          <span
            ref={ref}
            className="inline-block w-max bg-[var(--accent-brand)] p-0 px-[2px] text-lg italic text-white"
          >
            해야할 일을 찾고, 책임감 있게 완수합니다.
          </span>
          <p className="relative break-keep text-start">
            <span className="text-[11px] text-[var(--page-fg-soft)]">
              FITREAE
            </span>
            <br />
            App 개발로 시작하여, <br />
            <strong className="text-[#0A5BBD]">
              데이터 시각화 및 테스트 시스템 기반 카운팅 알고리즘 개발
            </strong>
            까지
          </p>
          <p className="relative break-keep text-start">
            <span className="text-[11px] text-[var(--page-fg-soft)]">IDIS</span>
            <br />
            Cloud Platform 서비스 개발로 시작하여, <br />
            <strong className="text-[#0A5BBD]">
              2차원 공간 객체 배치 시스템 개발, <br />
              클라이언트 WebSocket & WASM Load 최적화, 검색 DB 최적화
            </strong>
            까지
          </p>
          <div>
            수동적으로 하기보다 필요하고 리스크가 있는 부분을 찾아, <br />
            책임감 있게 완수하고 해결해 왔습니다.
          </div>
        </div>

        <div className="relative mb-2 w-max">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="theme-text-soft block text-left text-sm leading-tight underline decoration-[var(--panel-border)] underline-offset-2"
            aria-label="Copy officialkyus@gmail.com"
            title="Copy: officialkyus@gmail.com"
          >
            Email: officialkyus@gmail.com
          </button>
          <span
            aria-hidden={!isEmailCopied}
            className={`absolute left-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 rounded-md bg-black p-2 text-[12px] font-medium leading-none text-white shadow-sm transition-opacity duration-200 dark:bg-white dark:text-black ${
              isEmailCopied ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            복사됨
            <span className="absolute -left-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black dark:bg-white" />
          </span>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-start gap-1">
            <div className="flex gap-1">
              <OutlineButton href="https://github.com/selfishAltruism">
                GitHub
                <Github size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
              </OutlineButton>
              {/* <OutlineButton href="https://www.linkedin.com/in/kyus/">
              <Linkedin size={17} />
            </OutlineButton> */}
            </div>

            <Drawer>
              <DrawerTrigger asChild>
                <BasicButton>
                  기술 스택 상세
                  <Layers size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
                </BasicButton>
              </DrawerTrigger>
              <TechStackDrawer />
            </Drawer>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-end justify-start gap-3 xl:hidden">
        <div>
          <img
            src="/profile_img.jpg"
            alt="Profile"
            className="relative h-[120px] w-[102px] rounded-md object-cover"
          />
        </div>

        <div id="profile-source" className="flex flex-col">
          <Title>
            <strong>강민규</strong> <span className="!font-normal">Kyu</span>
          </Title>

          <div className="relative my-1 w-max">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="theme-text-soft block text-left text-sm leading-tight underline decoration-[var(--panel-border)] underline-offset-2 max-lg:text-[12px]"
              aria-label="Copy officialkyus@gmail.com"
              title="Copy: officialkyus@gmail.com"
            >
              Email: officialkyus@gmail.com
            </button>
            <span
              aria-hidden={!isEmailCopied}
              className={`absolute left-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 rounded-md bg-black p-2 text-[12px] font-medium leading-none text-white shadow-sm transition-opacity duration-200 dark:bg-white dark:text-black ${
                isEmailCopied ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              복사됨
              <span className="absolute -left-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black dark:bg-white" />
            </span>
          </div>

          <Dialog>
            <DialogTrigger className="mb-1 mt-1 w-max">
              <span
                className={cn(
                  "mb-3 mt-3 w-max cursor-pointer border-b border-transparent bg-[var(--accent-brand)] p-0 px-[2px] text-[14px] italic text-white transition-all duration-200",
                  "active:scale-95 active:border-[var(--accent-brand-strong)] active:bg-[var(--accent-brand-strong)]",
                  "sm:hover:border-[var(--accent-brand-strong)] sm:hover:bg-[var(--accent-brand-strong)] sm:hover:text-white/70",
                )}
              >
                해야할 일을 찾고, 책임감 있게 완수합니다.
              </span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-5">
                  해야할 일을 찾고, 책임감 있게 완수합니다.
                </DialogTitle>
                <DialogDescription className="space-y-4 break-keep text-[14px]">
                  <p>
                    <span className="text-[11px] leading-3 text-[var(--page-fg-soft)]">
                      FITREAE
                    </span>
                    <br />
                    App 개발로 시작하여, <br />
                    <strong className="text-[#0A5BBD]">
                      데이터 시각화 및 테스트 시스템 기반 카운팅 알고리즘 개발
                    </strong>
                    까지
                  </p>
                  <p>
                    <span className="text-[11px] leading-3 text-[var(--page-fg-soft)]">
                      IDIS
                    </span>
                    <br />
                    Cloud Platform 서비스 개발로 시작하여, <br />
                    <strong className="text-[#0A5BBD]">
                      2차원 공간 객체 배치 시스템 개발, <br />
                      클라이언트 WebSocket & WASM Load 최적화, 검색 DB 최적화
                    </strong>
                    까지
                  </p>
                  <p>
                    수동적으로 하기보다 필요하고 리스크가 있는 부분을 찾아,{" "}
                    <br />
                    책임감 있게 완수하고 해결해 왔습니다.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <span className="theme-text-primary text-sm leading-tight max-lg:text-[12px]">
            <strong>연구원</strong> @ IDIS Co., Ltd
          </span>
          <span className="theme-text-primary text-sm leading-tight max-lg:text-[12px]">
            <strong>컴퓨터공학과 졸업</strong> @ 중앙대학교
          </span>
        </div>

        <div className="flex h-full flex-1 flex-col items-end justify-end">
          <div className="flex flex-col items-end gap-1">
            <div className="flex justify-end gap-1">
              <OutlineButton href="https://github.com/selfishAltruism">
                GitHub
                <Github size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
              </OutlineButton>
              {/* <OutlineButton href="https://www.linkedin.com/in/kyus/">
                <Linkedin size={17} />
              </OutlineButton> */}
            </div>

            <Drawer>
              <DrawerTrigger asChild>
                <BasicButton>
                  기술 스택 상세
                  <Layers size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
                </BasicButton>
              </DrawerTrigger>
              <TechStackDrawer />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
