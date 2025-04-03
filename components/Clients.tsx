import React from 'react';
import Image from 'next/image';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';
import { companies } from '@/data/index';

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading pb-16">
        Testimonials from people I have{" "}
        <span className="text-purple">worked with</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>

        <h1 className="heading pb-16 pt-20">
          Companies I have{" "}
          <span className="text-purple">worked with</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              {/* Logo Image (if needed) */}
              {/* <Image
                src={img}
                alt={name}
                width={40} // Adjust size as needed
                height={40}
                className="md:w-10 w-5"
              /> */}

              <Image
                src={nameImg}
                alt={name}
                width={200} // Adjust based on actual size
                height={100}
                layout="intrinsic"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
