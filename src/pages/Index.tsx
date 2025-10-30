import { MadeWithDyad } from "@/components/made-with-dyad";
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Mac风格计算器</h1>
        <p className="text-xl text-gray-600">
          一个与Mac计算器样式相似的计算器
        </p>
      </div>
      <Calculator />
      <MadeWithDyad />
    </div>
  );
};

export default Index;