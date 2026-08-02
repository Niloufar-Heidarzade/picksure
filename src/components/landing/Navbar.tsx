import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between itens-center py-8 px-10">
      {/* Logo */}
      <div className="font-display font-semibold text-[35px] relative ml-5">
        <span className="text-primary ">Pick</span>
        <span className="text-gold-accent">Sure</span>
        <span className="text-gold-accent text-sm absolute top-0 -left-4">✦</span>
      </div>
      {/* Navigations */}
      <div className="text-primary font-default flex justify-between itens-center gap-15 px-[70px] font-light text-sm">
        <button >Features</button>
        <button>About Us</button>
        <button className="border-[0.01px] rounded-xl border-secondary h-[40px] w-[150px]">Login / Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
