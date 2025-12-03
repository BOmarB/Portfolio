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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus atque eveniet et fugiat, neque autem voluptatibus eligendi optio blanditiis, alias facilis enim debitis labore nemo, ducimus sapiente illo possimus!
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
