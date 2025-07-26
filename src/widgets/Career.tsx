import Title from "../shared/ui/Title";

const Career = () => {
  return (
    <div className="w-full h-full bg-transparent flex flex-col items-center p-8 overflow-y-auto">
      <Title>Career</Title>
      <div className="mt-8">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="mb-4">
            <p className="text-light">Career Item {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
