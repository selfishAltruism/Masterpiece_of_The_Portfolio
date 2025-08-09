import Title from "../shared/ui/Title";
import Subtitle from "../shared/ui/Subtitle";
import Divider from "../shared/ui/Divider";
import OutlineButton from "../shared/ui/OutlineButton";
import SolidButton from "../shared/ui/SolidButton";

const Profile = () => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-7 bg-transparent p-8 xl:flex-col xl:gap-0">
      <div className="flex flex-col xl:items-center">
        <Title>My Profile</Title>
        <Subtitle>Frontend Developer</Subtitle>
      </div>

      <div className="flex gap-4 xl:mt-8">
        <OutlineButton>View Resume</OutlineButton>
        <SolidButton>Contact Me</SolidButton>
      </div>
    </div>
  );
};

export default Profile;
