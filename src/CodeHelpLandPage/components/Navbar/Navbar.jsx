import React, { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import NavMenuBar from './MenuBar/NavMenuBar';
import NavMenuBarBtn from './MenuBar/NavMenuBarBtn';
import NavLabsContent from './MenuBar/NavLabsContent';


const animateNavContent = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  dropDownShow: {
    y: 0,
    opacity: 1,
  },
};

const sidebarVariants = {
  dropDownShow: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const menuItems = [
  { title: 'Home' },
  { title: 'Courses' },
  { title: 'Explore' },
  { title: 'Contact' },
  { title: 'Article' },
  { title: 'Tutorial' },
];

const Navbar = () => {
  const [dropDownShow, setDropDownShow] = useState(false);
  const [labsDropDown, setLabsDropDown] = useState(false);
  const [toggleMode, setToggleMode] = useState(true);
  const [showPromoBar, setShowPromoBar] = useState(true);

  return (
    <>
      {/* Promotion Bar */}
      {showPromoBar && (
        <div className="flex justify-center items-center bg-purple-500 text-black py-2 px-4 w-full fixed top-0 z-20">
          <span className="flex-1 text-center font-semibold">
            🎉 Celebrate August with a 10% Discount! 🎉 Use code AUG10 at checkout!
          </span>
          <button className='bg-black mx-4 px-4 py-2 text-blue-400 '>Here</button>
          <button
            onClick={() => setShowPromoBar(false)}
            className="text-black font-bold text-lg hover:text-red-500"
          >
            &times;
          </button>
        </div>
      )}

      <div
        className={`flex items-center justify-center shadow-lg shadow-indigo-800/50 fixed w-full h-[5.5rem] bg-black z-10 my-7 ${showPromoBar ? 'mt-[2rem]' : 'mt-0'}`}
      >
        <div className="w-full mx-5 sm:mx-8 lg:mx-[1rem] xl:mx-[8rem] 2xl:mx-[11rem] flex justify-between items-center">
          {/* Image */}
          <img src="https://dgyugonj9a9mu.cloudfront.net/CH_Logo_Asset_7e5d4ea6cb.png" className='w-32 aspect-w-16 aspect-h-9' alt="hi"  />
 
          {/* Menu items */}
          <motion.div
            variants={animateNavContent}
            initial="hidden"
            animate="dropDownShow"
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
            className="lg:flex items-center justify-center lg:gap-x-10 hidden flex-shrink-0"
          >
            {menuItems.map((item, index) => (
              <motion.div key={index}>
                <button
                  onMouseEnter={item.title === 'Labs' ? () => setLabsDropDown(!labsDropDown) : undefined}
                  onMouseLeave={item.title === 'Labs' ? () => setLabsDropDown(!labsDropDown) : undefined}
                  className={`text-white hover:text-violet-300 font-semibold sm:text-[1.1rem] transition-all`}
                >
                  <div className="flex items-center justify-center">
                    {item.title}
                    {item.title === 'Labs' && (
                      <div>
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`ml-2 ${labsDropDown ? 'rotate-180 scale-1' : 'scale-1'} transition-all`}
                        />

                        <div className={`fixed mt-1 ${labsDropDown ? 'block' : 'hidden'}`}>
                          <NavLabsContent />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* button, bar, dark light theme toggle */}
          <motion.div
            variants={animateNavContent}
            initial="hidden"
            animate="dropDownShow"
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            className="gap-x-3 lg:gap-x-6 w-auto flex items-center justify-center flex-shrink-0"
          >
            {/* dashboard and LogIn in large screen */}
            <div className="gap-x-3 hidden lg:flex flex-shrink-0">
              <NavMenuBarBtn />
            </div>

            {/* theme toggle */}
            <motion.button
              onClick={() => setToggleMode(!toggleMode)}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FontAwesomeIcon
                icon={toggleMode ? faSun : faMoon}
                className="w-[2rem] text-[1.6rem] sm:text-[2rem] lg:text-[1.8rem] text-violet-400"
              />
            </motion.button>

            {/* Clickable bar icon */}
            <motion.div
              className="cursor-pointer flex items-center justify-center lg:hidden"
              onClick={() => setDropDownShow(!dropDownShow)}
            >
              <FontAwesomeIcon
                icon={dropDownShow ? faBarsStaggered : faBars}
                className={`w-[2rem] text-[1.6rem] sm:text-[1.7rem] text-${
                  dropDownShow ? 'orange-400' : 'violet-400'
                }  p-1 sm:p-2 rounded-full sm:mr-4 z-50 transition-all`}
              />
            </motion.div>

            {/* Bar icon sidebar content */}
            <motion.div
              variants={sidebarVariants}
              initial="hide"
              animate={dropDownShow ? 'dropDownShow' : 'hide'}
              exit="exit"
              className={`fixed top-0 right-0 ${
                dropDownShow ? 'flex' : 'hidden'
              } flex-col lg:hidden items-center justify-between gap-y-[2rem] sm:gap-y-4 bg-gradient-to-b from-blue-800 to-violet-500  w-full sm:min-rem] sm:max-w-[24.6rem] rounded-b-3xl sm:rounded-tl-3xl font-robotoMono`}
            >
              {/* Menu */}
              <NavMenuBar />

              {/* Buttons */}
              <NavMenuBarBtn />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
