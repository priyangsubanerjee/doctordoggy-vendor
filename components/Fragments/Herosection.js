import Link from "next/link";
import React from "react";

function Herosection() {
  return (
    <div className="pt-2 lg:pt-0 px-0 md:px-6 lg:px-24">
      <div className="md:rounded-2xl h-[450px] md:h-[500px] flex overflow-hidden md:bg-[url(https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg)] bg-no-repeat bg-cover">
        <div className="z-10 flex flex-col text-black my-auto w-full px-5 py-12 lg:py-0">
          <div className="flex flex-col lg:items-center justify-center">
            <p className="text-neutral-800 text-sm text-center lg:text-base">
              Doctordoggy presents
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-center mt-3">
              Partners Program
            </h1>
            <p className="text-center text-sm lg:max-w-4xl mt-5 lg:mt-8 leading-7 text-neutral-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              cumque error soluta repellendus unde, veritatis, quae nesciunt
              mollitia eveniet debitis sint autem natus rem ipsa dolores
              voluptas inventore assumenda? Velit!
            </p>
            <div className="flex items-center justify-center space-x-4 mt-6 lg:mt-10 w-full px-6">
              <Link href="/login">
                <button className="h-12 text-sm lg:text-base lg:w-fit w-full px-10 block text-black border border-black bg-transparent rounded-md">
                  Login
                </button>
              </Link>
              <button className="h-12 text-sm lg:text-base lg:w-fit w-full px-10 block text-white border border-black bg-black rounded-md">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
