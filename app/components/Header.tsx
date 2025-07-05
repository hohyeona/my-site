'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-800 text-white flex items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">MySite</div>
        <nav className="gap-4 hidden md:flex">
          <a href="#" className="hover:text-gray-300">회사소개</a>
          <a href="#" className="hover:text-gray-300">서 비 스</a>
          <a href="#" className="hover:text-gray-300">포트폴리오</a>
          <a href="#" className="hover:text-gray-300">인사이트</a>
          <a href="#" className="hover:text-gray-300">고객지원</a>
        </nav>
        <div
          className="hamburger flex flex-col gap-[5px] cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-[25px] h-[3px] bg-white block" />
          <span className="w-[25px] h-[3px] bg-white block" />
          <span className="w-[25px] h-[3px] bg-white block" />
        </div>
      </header>

      <div
        className={`fixed top-0 transition-all duration-300 md:hidden bg-zinc-900 text-white w-[250px] h-full p-6 flex flex-col gap-4 ${
          menuOpen ? 'left-0' : 'left-[-250px]'
        }`}
      >
        <a href="#">메뉴1</a>
        <a href="#">메뉴2</a>
        <a href="#">메뉴3</a>
        <a href="#">메뉴4</a>
        <a href="#">메뉴5</a>
      </div>
    </>
  );
}
