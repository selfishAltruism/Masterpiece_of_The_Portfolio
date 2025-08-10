import React from "react";
import Title from "../shared/ui/Title";
import Subtitle from "../shared/ui/Subtitle";
import OutlineButton from "../shared/ui/OutlineButton";
import SolidButton from "../shared/ui/SolidButton";
import { DrawerTrigger, Drawer } from "@/shared/shadcn/components/ui/drawer";
import { TechStackDrawer } from "@/entities/TechStackDrawer";

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-7 bg-transparent p-8 pt-12 xl:flex-col xl:gap-0 xl:pt-8">
      <div ref={ref}>
        <img
          src="/profile_img.jpg" // Placeholder image URL
          alt="Profile"
          className="mb-4 h-24 w-24 rounded-full object-cover xl:h-36 xl:w-36" // Tailwind classes for circular image
        />
      </div>
      <div id="profile-source" className="flex flex-col xl:items-center">
        <Title>
          <strong>Kyu,</strong> 강민규
        </Title>
        <Subtitle>Web Developer</Subtitle>
        <span className="text-sm text-white/60">IDIS | SW 연구원</span>
        <span className="text-sm text-white/60">
          중앙대학교 | 소프트웨어학 학사
        </span>
      </div>

      <div className="flex flex-col items-center xl:mt-5">
        <div className="flex gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <SolidButton>Tech Stack</SolidButton>
            </DrawerTrigger>
            <TechStackDrawer />
          </Drawer>
          <OutlineButton href="https://github.com/selfishAltruism">
            Github
          </OutlineButton>
        </div>
      </div>
      <p className="absolute left-3 top-3 text-sm text-white/60">
        Designed & Built by <strong>Kyu</strong>
      </p>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
