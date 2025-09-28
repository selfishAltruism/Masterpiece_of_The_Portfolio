import React from "react";
import Title from "../../shared/ui/Title";
import Subtitle from "../../shared/ui/Subtitle";
import OutlineButton from "@/shared/ui/OutlineButton";
import SolidButton from "../../shared/ui/SolidButton";
import { DrawerTrigger, Drawer } from "@/shared/shadcn/components/ui/drawer";
import { TechStackDrawer } from "@/entities/main/TechStackDrawer";
import {
  Github,
  Layers,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
} from "lucide-react";

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
          <strong>Kyus,</strong> 강민규
        </Title>
        <Subtitle>Front-end Developer</Subtitle>
        <span className="text-sm text-white">IDIS SW 연구원</span>
        <span className="text-sm text-white">
          중앙대학교 컴퓨터공학사 우등 졸업
        </span>
      </div>

      <div className="flex flex-col items-center xl:mt-5">
        <div className="flex gap-1">
          <SolidButton href="https://github.com/selfishAltruism" offIcon>
            <Github size={16} />
          </SolidButton>
          <SolidButton href="https://www.linkedin.com/in/kyus/" offIcon>
            <Linkedin size={16} />
          </SolidButton>

          <Drawer>
            <DrawerTrigger asChild>
              <OutlineButton whiteBg>
                <Layers size={16} className="mr-2" />
                Tech Stack
              </OutlineButton>
            </DrawerTrigger>
            <TechStackDrawer />
          </Drawer>
        </div>
      </div>
      <p className="absolute left-3 top-3 text-sm text-white">
        Designed & Made by <strong>Kyus</strong>
      </p>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
