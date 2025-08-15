import { Loader } from "lucide-react";

function LoaderPage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <Loader className="animate-spin " size={50} />
    </div>
  );
}

export default LoaderPage;
