import React from "react";
import { Github, Layers, Linkedin } from "lucide-react";

import Title from "@/shared/ui/Title";
import Subtitle from "@/shared/ui/Subtitle";
import BasicButton from "@/shared/ui/BasicButton";
import OutlineButton from "@/shared/ui/OutlineButton";
import { DrawerTrigger, Drawer } from "@/shared/shadcn/components/ui/drawer";

import { TechStackDrawer } from "@/entities/main/TechStackDrawer";

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-7 bg-transparent p-8 pt-12 max-xl:gap-3 max-sm:px-0 xl:flex-col xl:gap-0 xl:pt-8">
      <div ref={ref}>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="relative h-[116px] w-[102px] rounded-md object-cover max-lg:h-[98px] max-lg:w-20 max-md:h-[94px] max-sm:h-[90px] xl:mb-4 xl:h-36 xl:w-32"
        />
      </div>

      <div id="profile-source" className="flex flex-col xl:items-center">
        <Title>
          <strong>Kyu,</strong> 강민규
        </Title>
        <span className="mb-3 mt-2 italic text-white max-lg:mb-1 max-lg:text-[13px] max-sm:text-[12px]">
          안전지대를 넘어서는 개발자.
        </span>
        <span className="text-sm leading-tight text-white max-lg:text-[12px] max-sm:text-[11px]">
          연구원 @ IDIS Co., Ltd
        </span>
        <span className="text-sm leading-tight text-white max-lg:text-[12px] max-sm:text-[11px]">
          컴퓨터공학사 우등 졸업 @ 중앙대학교
        </span>
      </div>

      <div className="flex flex-col items-center max-xl:h-full max-xl:justify-end max-xl:pb-[6px] max-lg:pb-4 max-md:pb-[18px] max-sm:pb-[20px] xl:mt-5">
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
              <BasicButton whiteBg>
                Tech Stack
                <Layers size={16} className="-mr-[1px] -mt-[2.5px] ml-2" />
              </BasicButton>
            </DrawerTrigger>
            <TechStackDrawer />
          </Drawer>
        </div>
      </div>

      <p className="absolute left-3 top-3 text-xs text-white">
        Designed & Made by <strong>Kyu</strong>
      </p>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
