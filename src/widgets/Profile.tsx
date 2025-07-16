import Title from '../shared/ui/Title';
import Subtitle from '../shared/ui/Subtitle';
import Divider from '../shared/ui/Divider';
import OutlineButton from '../shared/ui/OutlineButton';
import SolidButton from '../shared/ui/SolidButton';

const Profile = () => {
  return (
    <div className="w-full h-full bg-dark flex flex-col justify-center items-center p-8">
      <Title>My Profile</Title>
      <Divider />
      <Subtitle>Frontend Developer</Subtitle>
      <div className="flex gap-4 mt-8">
        <OutlineButton>View Resume</OutlineButton>
        <SolidButton>Contact Me</SolidButton>
      </div>
    </div>
  );
};

export default Profile;
