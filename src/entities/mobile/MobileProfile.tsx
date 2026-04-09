import { useState } from "react";
import { Github, Layers } from "lucide-react";

import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import Title from "@/shared/ui/Title";
import { Drawer, DrawerTrigger } from "@/shared/shadcn/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";

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
        <div className="theme-text-soft absolute right-1 top-0 text-[10px]">
          Designed & Made by <strong>Kyu</strong>
        </div>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="h-[170px] w-[130px] rounded-md object-cover"
        />

        <div className="flex min-h-[170px] min-w-0 flex-1 flex-col">
          <div>
            <Title>
              <strong>강민규,</strong> Kyu
            </Title>

            <Dialog>
              <DialogTrigger className="w-max">
                <span className="inline-block w-max bg-[var(--accent-brand)] px-1.5 py-0.5 text-[12px] italic leading-tight text-white">
                  안전지대를 넘어서는 개발자
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">
                    안전지대를 넘어서는 개발자, 강민규입니다.
                  </DialogTitle>
                  <DialogDescription className="text-[14px]">
                    <p>
                      개발 경험이 쌓이면 익숙한 기술과 환경 속에서{" "}
                      <strong className="text-[#0A5BBD]">안전지대</strong>가
                      형성됩니다.
                    </p>
                    <div className="p-1" />
                    <p>
                      발전과 변화가 빠른 개발 분야에서 이러한 안전지대에
                      머무르기보다,
                      <br />
                      <strong className="text-[#0A5BBD]">
                        넘어서고 도전하며, 성장을 지향
                      </strong>
                      해야 한다고 생각합니다.
                    </p>
                    <div className="p-1" />
                    <p>
                      이러한 소신을 가지고{" "}
                      <strong className="text-[#0A5BBD]">
                        변화와 문제를 두려워하지 않으며
                      </strong>
                      ,{" "}
                      <strong className="text-[#0A5BBD]">
                        효과적인 기술과 문제 해결방법
                      </strong>
                      을 도입하며 개발 직무에 임하고 있습니다.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <div className="relative my-2 w-max">
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
                className={`absolute left-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 rounded-md bg-black p-2 text-[12px] font-medium leading-none text-white shadow-sm transition-opacity duration-200 dark:bg-white dark:text-black ${
                  isEmailCopied
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                복사됨
                <span className="absolute -left-[4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-black dark:bg-white" />
              </span>
            </div>
            <p className="theme-text-primary mt-1 text-[12px] leading-tight">
              <strong>연구원</strong> @ IDIS Co., Ltd
            </p>
            <p className="theme-text-primary mt-1 text-[12px] leading-tight">
              <strong>컴퓨터공학사 우등 졸업</strong> @ 중앙대학교
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            <OutlineButton href="https://github.com/selfishAltruism">
              Github
              <Github size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
            </OutlineButton>
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
    </section>
  );
};

export default MobileProfile;
