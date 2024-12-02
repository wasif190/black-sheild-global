import React from 'react';

function Sec1() {
  return (
    <div className="md:px-[12%] px-[4%] py-[100px] bg-white flex justify-center">
      <section className="grid lg:grid-cols-3 lg:gap-[5rem] gap-[2rem]">
        {/* Circle 1: Border with 4 sections */}
        <div
          className="relative w-[200px] h-[200px] flex justify-center items-center rounded-full"
          style={{
            background: `conic-gradient(
              #1e3a8a 0% 25%,      /* Dark Blue */
              #60a5fa 25% 50%,    /* Light Blue */
              #1e3a8a 50% 75%,    /* Dark Blue */
              #60a5fa 75% 100%    /* Light Blue */
            )`,
          }}
        >
          <div
            className="w-[180px] h-[180px] bg-white rounded-full flex justify-center items-center"
          >
            <h1 className="text-2xl font-bold text-red-700">Expertise</h1>
          </div>
        </div>

        <div
          className="relative w-[200px] h-[200px] flex justify-center items-center rounded-full"
          style={{
            background: `conic-gradient(
              #1e3a8a 0% 25%,      /* Dark Blue */
              #60a5fa 25% 50%,    /* Light Blue */
              #1e3a8a 50% 75%,    /* Dark Blue */
              #60a5fa 75% 100%    /* Light Blue */
            )`,
          }}
        >
          <div
            className="w-[180px] h-[180px] bg-white rounded-full flex justify-center items-center"
          >
            <h1 className="text-2xl font-bold text-red-700">Trustworthy</h1>
          </div>
        </div>

        <div
          className="relative w-[200px] h-[200px] flex justify-center items-center rounded-full"
          style={{
            background: `conic-gradient(
              #1e3a8a 0% 25%,      /* Dark Blue */
              #60a5fa 25% 50%,    /* Light Blue */
              #1e3a8a 50% 75%,    /* Dark Blue */
              #60a5fa 75% 100%    /* Light Blue */
            )`,
          }}
        >
          <div
            className="w-[180px] h-[180px] bg-white rounded-full flex justify-center items-center"
          >
            <h1 className="text-2xl font-bold text-red-700">Global Reach</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sec1;
