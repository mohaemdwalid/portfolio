import { lazy, Suspense } from "react";
import { techStackData } from "../Constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const TechIcon = lazy(() => import("./Models/tech_logos/TechIcon"));

const TechStack = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-4 flex flex-wrap gap-10 justify-center">
          {techStackData.map((tech) => (
            <div
              key={tech.name}
              className="w-28 h-28"
            >
              <Suspense fallback={<div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />}>
                <TechIcon model={tech} />
              </Suspense>
              <p className="text-white text-center mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(TechStack, "techstack"); 