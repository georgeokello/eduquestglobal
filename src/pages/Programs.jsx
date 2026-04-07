import { programs } from "../data/programs";
import Card from "../components/Card";

const Programs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Programs</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {programs.map((prog, index) => (
          <Card
            key={index}
            title={prog.title}
            description={prog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;