import React from "react";
import Title from "../shared/ui/Title";
import Subtitle from "../shared/ui/Subtitle";
import OutlineButton from "../shared/ui/OutlineButton";
import SolidButton from "../shared/ui/SolidButton";

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-7 bg-transparent p-8 xl:flex-col xl:gap-0">
      <div
        ref={ref}
        id="profile-source"
        className="flex flex-col px-4 xl:items-center"
      >
        <Title>My Profile</Title>
        <Subtitle>Frontend Developer</Subtitle>
      </div>

      <div className="flex gap-4 xl:mt-8">
        <OutlineButton>View Resume</OutlineButton>
        <SolidButton>Contact Me</SolidButton>
      </div>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
