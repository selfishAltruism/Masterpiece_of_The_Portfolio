import Title from "../shared/ui/Title";

const DevelopmentLog = () => {
  return (
    <div className="w-full h-full bg-dark flex flex-col items-center p-8 overflow-y-auto">
      <Title>Development Log</Title>
      <div className="mt-8">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="mb-4">
            <p className="text-light">Log Entry {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentLog;
