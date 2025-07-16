import Profile from './widgets/Profile';
import Career from './widgets/Career';
import DevelopmentLog from './widgets/DevelopmentLog';

function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/3 h-full">
        <Profile />
      </div>
      <div className="w-1/3 h-full">
        <Career />
      </div>
      <div className="w-1/3 h-full">
        <DevelopmentLog />
      </div>
    </div>
  );
}

export default App;
