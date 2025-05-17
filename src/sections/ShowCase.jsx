import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <div id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* {left} */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="" />
            </div>
            <div className="text-content">
              <h2>
              E-commerce-website 
              </h2>
              <p className="text-white-50 md:text-xl">
              This E-commerce website is built with the MERN stack: MongoDB, Express.js, React.js, and Node.js. It allows users to browse products, add items to a cart, and complete secure checkouts. User authentication is handled with JWT, enabling login, registration, and protected routes. The admin panel provides tools to manage products, users, and orders
              </p>
            </div>
          </div>x
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#dbefff]">
                <img src="/images/project2.png" alt="" />
              </div>
              <h2>awwwards Winning landing page</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="" />
              </div>
              <h2>Iphone 15 Pro Landing Page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
