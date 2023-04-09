import React from "react";
import Durian from "../images/durian-yellow-brand.png";
import DurianSmall from "../images/durian-yellow.png";
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div
      class="
      grid 
      grid-cols-8
      bg-lime-400
      h-18
      "
    >
      <div
        class="
      py-2 
      col-start-1 col-end-1
      "
      >
        <img id="durain" class="h-16" src={Durian} />
        <img id="durainsmall" class="h-16" src={DurianSmall} />
      </div>

      <div class="invisible md:visible col-start-2 col-span-6">
        <ul class="grid grid-cols-7 items-center">
          <li className="col-start-2 col-end-2 py-8">คอร์สเรียน</li>
          <li className="col-start-3 col-end-3 py-8">ร้านหนังสือ</li>
          <li className="col-start-4 col-end-4 py-8">คลังข้อสอบ</li>
          <li className="col-start-5 col-end-5 py-8">คลังความรู้</li>
          <li className="col-start-6 col-end-6 py-8">เกี่ยวกับเรา</li>
        </ul>
      </div>

      <div class="py-2 col-end-9 col-span-1 ">
        <BiMenu class="h-16 " size={60}></BiMenu>
        {/* <img id="durain" class="h-16" src={Durian} /> */}
        {/* <img id="durainsmall" class="h-16" src={DurianSmall} /> */}
      </div>
    </div>
  );
};
