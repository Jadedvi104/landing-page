import React from "react";
import Durian from "../images/durian-yellow-brand.png";

export const Navbar = () => {
  return (
    <div   className="flex bg-lime-300">
      <div class="py-2 flex-none">
        <img src={Durian} />
      </div>
      <div id="menus" class="flex-auto w-32 lg:w-48">
        <ul className="flex">
          <li className="p-4">คอร์สเรียน</li>
          <li className="p-4">ร้านหนังสือ</li>
          <li className="p-4">คลังข้อสอบ</li>
          <li className="p-4">คลังความรู้</li>
          <li className="p-4">เกี่ยวกับเรา</li>
        </ul>
      </div>
      <div id="menus" class="py-2 flex-none">
      <img src={Durian} />
      </div>
    </div>
  );
};
