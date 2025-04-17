// src/components/Header.tsx

"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="w-full px-1 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center pl-5 cursor-pointer">
            <img
              src="https://booktree-s3-bucket.s3.ap-northeast-2.amazonaws.com/BooktreeLogo.png"
              alt="책 아이콘"
              className="w-9 h-9 mr-2"
            />
            <h1 className="text-xl font-bold">BookTree</h1>
          </Link>
          
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center border border-gray-200 rounded-md overflow-hidden">
              <select className="appearance-none bg-white pl-4 pr-9 py-2 text-sm outline-none cursor-pointer">
                <option>전체</option>
                <option>제목</option>
                <option>내용</option>
                <option>작성자</option>
              </select>
              <div className="absolute right-3 pointer-events-none">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
              <button className="px-3 bg-white">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="게시물을 검색하기"
                className="px-4 py-2 w-64 focus:outline-none text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center pr-2">
            <button
              className="px-4 py-2 mr-2 text-sm border border-gray-200 rounded-md hover:bg-gray-50"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              로그인
            </button>
            <button
              className="px-4 py-2 text-sm text-white bg-[#2E804E] rounded-md hover:bg-[#236b3e]"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
