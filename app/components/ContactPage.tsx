import { GrMapLocation } from "react-icons/gr";

import { IoIosMailOpen } from "react-icons/io";

function ContactPage() {
  return (
    <section id="contact" className="p-12 px-4 md:py-20  max-w-2xl mx-auto">
      <div className="">
        <p className="text-xl text-blue-500 font-extrabold">CONTACT</p>
        <p className=" py-1 font-extrabold">
          Get in touch with me by sending me an email. 👇
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 max-w-lg mt-8 ">
          <div className="flex items-center gap-4">
            <GrMapLocation className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div className="  ">
              <h1 className=" font-bold">Location</h1>
              <p className="text-sm text-gray-500">Azrou, Morocco.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoIosMailOpen className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <h1 className=" font-bold">Mail</h1>
              <p className="text-sm text-gray-500 break-all">
                bouazzaouiomar21@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
