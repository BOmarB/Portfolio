import React from "react";

function AboutPage() {
  return (
    <section
      id="about"
      className=" min-h-screen pb-20 w-full overflow-visible flex items-center justify-center"
    >
      <div className="max-w-2xl">
        <h1 className="text-blue-500 font-extrabold text-4xl text-center p-4">
          ABOUT ME{" "}
        </h1>
        <p className="text-center text-black p-2  text-lg">
          {
            "Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops."
          }
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
