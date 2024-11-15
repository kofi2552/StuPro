import React from "react";

const Join = () => {
  return (
    <section className="m-10">
      <div className="p-10 rounded-l-xl border border-blue-gray-100 bg-[url('/images/gradient-bg-1.png')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
        <h2 variant="small" color="blue-gray" className="font-bold mb-2">
          Upcoming Events
        </h2>
        <h2 variant="h3" color="blue-gray">
          Tech Summit: Shaping Tomorrow
        </h2>
        <h2 className="mt-2 mb-6 !text-base font-normal text-gray-500">
          Prepare to be part of dynamic conversations that will redefine the
          boundaries.
        </h2>
        <button variant="outlined" className="flex-shrink-0">
          join now
        </button>
      </div>
    </section>
  );
};

export default Join;
