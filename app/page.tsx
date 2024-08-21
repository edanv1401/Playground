'use client';

import { useState } from "react";
import Monaco from "./monaco";
import Viewer from "./viewer";

export default function Page() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full">
        <div className="relative h-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-start space-x-2 p-2 bg-neutral-900">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex justify-end items-end h-full w-full">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
            </div>
          </div>

          <div className="h-full">
            <Monaco language="html" pipe={setHtml} />
          </div>
        </div>
        <div className="relative h-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-start space-x-2 p-2 bg-neutral-900">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex justify-end items-end h-full w-full">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
            </div>
          </div>
          <div className="h-full">
            <Monaco language="css" pipe={setCss} />
          </div>
        </div>
        <div className="relative h-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-start space-x-2 p-2 bg-neutral-900">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex justify-end items-end h-full w-full">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <rect width="24" height="24" fill="#F1DC50"></rect> <path stroke="#333" stroke-width="2" d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"></path> </g> </g></svg>
            </div>
          </div>
          <div className="h-full">
            <Monaco language="javascript" pipe={setJs} />
          </div>
        </div>
        <div className="relative h-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-start space-x-2 p-2 bg-neutral-900">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="h-full">
            <Viewer html={html} css={css} js={js} />
          </div>
        </div>
      </div>
    </main>
  );
}