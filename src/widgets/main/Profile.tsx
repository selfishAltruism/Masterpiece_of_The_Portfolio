import React from "react";
import { Github, Layers, Linkedin } from "lucide-react";

import Title from "@/shared/ui/Title";
import Subtitle from "@/shared/ui/Subtitle";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import { DrawerTrigger, Drawer } from "@/shared/shadcn/components/ui/drawer";

import { TechStackDrawer } from "@/entities/main/TechStackDrawer";
import { cn } from "@/shared/shadcn/lib/utils";

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex h-full w-full flex-row items-end justify-center gap-7 bg-transparent pb-3 max-xl:gap-3 max-sm:px-0 xl:flex-col xl:items-center xl:gap-0 xl:p-8 xl:pt-12">
      <div ref={ref}>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="relative h-[116px] w-[102px] rounded-md object-cover max-lg:h-[98px] max-lg:w-20 max-md:h-[94px] max-sm:h-[90px] xl:mb-2 xl:h-44 xl:w-[155px]"
        />
      </div>

      <div id="profile-source" className="flex flex-col xl:items-center">
        <Title>
          <strong>Kyu,</strong> 강민규
        </Title>
        <span
          className={cn(
            "mb-3 mt-2 w-max cursor-pointer bg-[#0A5BBD] italic text-white transition-all duration-300",
            "max-lg:mb-1 max-lg:text-[13px] max-sm:text-[12px]",
            "active:scale-95 active:border-[#083e80] active:bg-[#083e80]",
            "sm:hover:border-[#083e80] sm:hover:bg-[#083e80] sm:hover:text-white/70",
          )}
          onClick={() => {}}
        >
          안전지대를 넘어서는 개발자.
        </span>
        <span className="text-sm leading-tight text-white max-lg:text-[12px] max-sm:text-[11px]">
          <strong>연구원</strong> @ IDIS Co., Ltd
        </span>
        <span className="text-sm leading-tight text-white max-lg:text-[12px] max-sm:text-[11px]">
          <strong>컴퓨터공학사 우등 졸업</strong> @ 중앙대학교
        </span>
      </div>

      <div className="flex flex-col items-end max-xl:h-full max-xl:justify-end xl:mt-5">
        <div className="flex items-end gap-1 max-xl:flex-col">
          <div className="flex justify-end gap-1">
            <OutlineButton href="https://github.com/selfishAltruism">
              <Github size={17} />
            </OutlineButton>
            <OutlineButton href="https://www.linkedin.com/in/kyus/">
              <Linkedin size={17} />
            </OutlineButton>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <BasicButton>
                Tech Stack
                <Layers size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
              </BasicButton>
            </DrawerTrigger>
            <TechStackDrawer />
          </Drawer>
        </div>
      </div>

      <p className="absolute left-2 top-2 text-xs text-white/70 max-sm:top-1">
        Designed & Made by <strong>Kyu</strong>
      </p>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
