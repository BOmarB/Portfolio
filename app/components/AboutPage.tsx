import React from "react";

function AboutPage() {
  return (
    <section
      id="about"
      className=" min-h-screen pb-20 w-full overflow-visible flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-2xl">
        <h1 className="text-gray-300 font-extrabold text-4xl text-center p-4">
          ABOUT ME{" "}
        </h1>
        <p className="text-center text-gray-400 p-2 text-lg">
          {
            "I'm Omar. I enjoy building robust, scalable applications from the ground up. Focused on crafting efficient APIs and solid architectures that evolve based on performance metrics and real-world usage. Always deploying."
          }
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
