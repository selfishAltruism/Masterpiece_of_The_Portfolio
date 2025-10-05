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
    <div className="flex h-full w-full flex-row items-center justify-center gap-7 bg-transparent p-8 pt-12 xl:flex-col xl:gap-0 xl:pt-8">
      <div ref={ref}>
        <img
          src="/profile_img.jpg"
          alt="Profile"
          className="relative mb-4 h-24 w-24 rounded-md object-cover xl:h-36 xl:w-36" // Tailwind classes for circular image
        />
      </div>
      <div id="profile-source" className="flex flex-col xl:items-center">
        <Title>
          <strong>Kyu,</strong> 강민규
        </Title>
        <Subtitle>Front-end Developer</Subtitle>
        <span className="text-sm text-white">연구원 @ IDIS Co., Ltd</span>
        <span className="text-sm text-white">
          컴퓨터공학사 우등 졸업 @ 중앙대학교
        </span>
      </div>

      <div className="flex flex-col items-center xl:mt-5">
        <div className="flex gap-1">
          <OutlineButton href="https://github.com/selfishAltruism" offIcon>
            <Github size={16} />
          </OutlineButton>
          <OutlineButton href="https://www.linkedin.com/in/kyus/" offIcon>
            <Linkedin size={16} />
          </OutlineButton>

          <Drawer>
            <DrawerTrigger asChild>
              <BasicButton whiteBg>
                Tech Stack
                <Layers size={16} className="-mr-[1px] ml-2" />
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
