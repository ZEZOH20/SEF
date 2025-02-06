import React from 'react'
import FlyoutLink from './FlyoutLink';
import { BsEmojiGrimace } from 'react-icons/bs';

const FlyoutContent = () => {
  // absolute z-10
    return (
      <>
        <div className="w-64 bg-white p-6 shadow-xl absolute z-10">
          <div className="mb-3 space-y-3">
            <h3 className="font-semibold">For Individuals</h3>
            <FlyoutLink to="https://www.google.com/?hl=ar">
              <p>welcome</p> <BsEmojiGrimace className=" ml-1 text-blue-500" />
            </FlyoutLink>
            <FlyoutLink to="https://www.google.com/?hl=ar">welcome</FlyoutLink>
          </div>
          <div className="mb-6 space-y-3">
            <h3 className="font-semibold">For Companies</h3>
            <a href="#" className="block text-sm hover:underline">
              Startups
            </a>
            <a href="#" className="block text-sm hover:underline">
              SMBs
            </a>
            <a href="#" className="block text-sm hover:underline">
              Enterprise
            </a>
          </div>
          <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
            Contact sales
          </button>
        </div>
      </>
    );
  };

export default FlyoutContent