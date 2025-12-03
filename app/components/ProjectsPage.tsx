import React from "react";
import p1 from "@/app/components/Journey.png";
import Image from "next/image";

function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen max-w-2xl mx-auto px-4 space-y-6">
      <div>
        <h1 className="text-blue-500 text-sm font-bold ">lorem </h1>
        <p className="font-bold ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="p-12 flex md:flex-row flex-col gap-4 ">
        <Image
          src={p1}
          alt="p1"
          width={300}
          height={300}
          className="rounded-xl w-62 object-cover"
        />

        <div className="">
          <h1 className="text-center">lorem </h1>
          <p className="text-center p-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ipsa, dolor commodi rerum nam, perspiciatis doloribus excepturi
            magni odit et libero laborum saepe modi unde quae placeat omnis
            voluptas. Accusamus?
          </p>
          <div className="flex justify-center gap-2">
            <a href="">hhh</a>
            <a href="">ggg</a>
          </div>
        </div>
      </div>
      <div className="p-12 flex md:flex-row flex-col gap-4">
        

        <div className="">
          <h1 className="text-center">lorem </h1>
          <p className="text-center p-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ipsa, dolor commodi rerum nam, perspiciatis doloribus excepturi
            magni odit et libero laborum saepe modi unde quae placeat omnis
            voluptas. Accusamus?
          </p>
          <div className="flex justify-center gap-2">
            <a href="">hhh</a>
            <a href="">ggg</a>
          </div>
        </div>
        <Image
          src={p1}
          alt="p1"
          width={300}
          height={300}
          className="rounded-xl w-62 object-cover"
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
