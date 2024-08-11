import React from 'react';
import { motion } from 'framer-motion';
import violetbg from '../../Images/Banner1/banner1_bgImg.svg';

const containerAnimate = {
  hover: {
    x: -9,
    y: -10,
  },
};

const imgContainer = [
  {
    img: 'https://i.pinimg.com/originals/69/ff/bc/69ffbcfa290f2ae5f3bf9dc29c5a15a0.gif',
  },
  {
    img: 'https://i.pinimg.com/originals/ee/01/3f/ee013f8ea11b2e2544a34be0b15ab108.gif',
  },
  {
    img: 'https://i.pinimg.com/originals/14/c6/34/14c634da68855802a99e1f067b915f9b.gif',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/cd/8f/77/cd8f775c199ac256e105da3ca0fdb98a.gif',
  },
  {
    img: 'https://steamuserimages-a.akamaihd.net/ugc/254843371595397822/14DBB99C8C41410B7B8DCB48241CFED77EE82D06/',
  },
];

const buttons = [
  'Core CS Subject',
  'Mock Test',
  'Quick Compiler',
  'Interview Experiences',
  'Dev Challenges',
  'Fruit Flex',
  'Articles',
  'Tutorials',
];

const Banner_1 = () => {
  return (
    <>
      <div
        className="w-full xl:min-h-[45rem] 2xl:min-h-[53rem] bg-black flex justify-start items-center py-[2rem] lg:py-[3rem] xl:py-0 relative"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/001/401/677/non_2x/abstract-polygonal-shape-black-background-free-vector.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative flex flex-col-reverse gap-y-6 md:flex-row lg:gap-x-[4rem] justify-start items-start w-full h-full ml-4 md:ml-[2rem] lg:ml-[3rem]">
          <div className="flex flex-col items-start gap-y-6 justify-center h-full">
            <motion.div>
              <div className="text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
                Crack the Code to Success with CodeHelp
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: -200 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-[1.2rem] md:text-[1.4rem] lg:text-[2.1rem] font-semibold text-white"
            >
              Elevate your programming skills, solve challenges, and unlock the
              <br /> world of coding possibilities.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: -200 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="space-x-3 flex-shrink-1"
            >
              <button className="bg-indigo-800 text-white rounded-full text-[1rem] lg:text-xl px-6 lg:px-10 py-3 lg:py-6  active:scale-90 transition-all">
                View Courses
              </button>
              <button className="border-3 border-red-600 text-white rounded-full text-[1rem] lg:text-xl px-6 lg:px-10 py-3 lg:py-6  active:scale-90 transition-all">
                Watch Video | Live
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: -200 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-x-[2rem] md:gap-x-[3rem]"
            >
              <div className="flex items-center">
                {imgContainer.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <motion.div
                      variants={containerAnimate}
                      whileHover="hover"
                      className={`rounded-full w-12 h-12 md:w-14 md:h-14 overflow-hidden border border-indigo-400 hover:border-green-400 ${
                        i === 0 ? '' : '-ml-2'
                      }`}
                    >
                      <img
                        src={item.img}
                        className="w-full h-full object-cover"
                        alt="Image"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="sm:text-[.9rem] md:text-[1rem] mr-4 flex flex-col items-start justify-center">
                <p className="text-gray-300 font-semibold">35000+</p>
                <p className="text-white font-semibold">Happy Students</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-start gap-y-4 pr-6 xl:pr-12">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {buttons.slice(0, 4).map((buttonText, index) => (
                <button
                  key={index}
                  className="text-white border-2 bg-black border- 2 border-yellow-500 px-6 py-3 text-[1rem] lg:text-xl rounded"
                >
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {buttons.slice(4, 8).map((buttonText, index) => (
                <button
                  key={index}
                  className="text-white border-2 border-yellow-500 px-6 py-3 text-[1rem] lg:text-xl bg-black  rounded"
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner_1;
