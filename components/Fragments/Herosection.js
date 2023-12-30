import React from "react";

function Herosection() {
  return (
    <div className="pt-12 px-24">
      <div className="rounded-2xl h-[500px] flex overflow-hidden bg-[url(https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg)] bg-no-repeat bg-cover">
        <div className="z-10 flex flex-col text-black my-auto w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="text-neutral-800">Doctordoggy presents</p>
            <h1 className="text-6xl font-bold text-center mt-3">
              Partners Program
            </h1>
            <p className="text-center max-w-4xl mt-8 leading-7 text-neutral-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              cumque error soluta repellendus unde, veritatis, quae nesciunt
              mollitia eveniet debitis sint autem natus rem ipsa dolores
              voluptas inventore assumenda? Velit!
            </p>
            <div className="flex items-center justify-center space-x-4 mt-10">
              <button className="h-12 px-10 text-black border border-black bg-transparent rounded-md">
                Learn more
              </button>
              <button className="h-12 px-10 text-white border border-black bg-black rounded-md">
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
