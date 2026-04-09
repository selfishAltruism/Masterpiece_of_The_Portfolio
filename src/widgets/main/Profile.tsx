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
        "flex h-full w-full flex-row items-end justify-start gap-7 bg-transparent p-8 pb-4",
        "max-xl:gap-3 max-sm:gap-1 max-sm:px-2",
        "xl:flex-col xl:items-center xl:justify-center xl:gap-0 xl:p-0 xl:pt-0",
      )}
    >
      <div ref={ref}>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="relative h-[116px] w-[102px] rounded-md object-cover max-lg:h-[98px] max-lg:w-20 max-md:h-[94px] max-sm:h-[90px] xl:mb-2 xl:h-44 xl:w-[155px]"
        />
      </div>

      <div id="profile-source" className="flex flex-col xl:items-center">
        <Title>
          <strong>강민규,</strong> Kyu
        </Title>

        <Dialog>
          <DialogTrigger className="mt-1 w-max xl:mb-2 xl:mt-2">
            <span
              className={cn(
                "mb-3 mt-3 w-max cursor-pointer border-b border-transparent bg-[var(--accent-brand)] p-0 px-[2px] text-lg italic text-white transition-all duration-200",
                "max-xl:text-[14px] max-lg:mt-0 max-lg:text-[13px] max-sm:text-[12px]",
                "active:scale-95 active:border-[var(--accent-brand-strong)] active:bg-[var(--accent-brand-strong)]",
                "sm:hover:border-[var(--accent-brand-strong)] sm:hover:bg-[var(--accent-brand-strong)] sm:hover:text-white/70",
              )}
            >
              안전지대를 넘어서는 개발자
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">
                안전지대를 넘어서는 개발자, 강민규입니다.
              </DialogTitle>
              <DialogDescription className="text-[14px]">
                개발 경험이 쌓이면 익숙한 기술과 환경 속에서{" "}
                <strong className="text-[#0A5BBD]">안전지대</strong>가
                형성됩니다.
                <div className="p-1" />
                발전과 변화가 빠른 개발 분야에서 이러한 안전지대에 머무르기보다,
                <br />
                <strong className="text-[#0A5BBD]">
                  넘어서고 도전하며, 성장을 지향
                </strong>
                해야 한다고 생각합니다.
                <div className="p-1" />
                <div>
                  이러한 소신을 가지고{" "}
                  <strong className="text-[#0A5BBD]">
                    변화와 문제를 두려워하지 않으며
                  </strong>
                  ,{" "}
                  <strong className="text-[#0A5BBD]">
                    효과적인 기술과 문제 해결방법
                  </strong>
                  을 도입하며 개발 직무에 임하고 있습니다.
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="relative mb-2 w-max">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="theme-text-soft block text-left text-sm leading-tight underline decoration-[var(--panel-border)] underline-offset-2 max-lg:text-[12px] max-sm:text-[11px]"
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

        <span className="theme-text-primary text-sm leading-tight max-lg:text-[12px] max-sm:text-[11px]">
          <strong>연구원</strong> @ IDIS Co., Ltd
        </span>
        <span className="theme-text-primary text-sm leading-tight max-lg:text-[12px] max-sm:text-[11px]">
          <strong>컴퓨터공학사 우등 졸업</strong> @ 중앙대학교
        </span>
      </div>

      <div className="flex flex-col items-end max-xl:h-full max-xl:flex-1 max-xl:justify-end xl:mt-5">
        <div className="flex items-end gap-1 max-xl:flex-col">
          <div className="flex justify-end gap-1">
            <OutlineButton href="https://github.com/selfishAltruism">
              Github
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
  );
});

Profile.displayName = "Profile";

export default Profile;
