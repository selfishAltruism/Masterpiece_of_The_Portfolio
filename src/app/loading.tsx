import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="multi-gradient-background flex h-screen w-screen items-center justify-center">
      <ScaleLoader color="#ffffff" />
    </div>
  );
}
