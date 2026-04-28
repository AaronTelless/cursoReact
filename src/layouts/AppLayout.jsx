import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="bg-slate-100 flex flex-col h-dvh">
      <div className="bg-indigo-200 h-20 border-b-2 border-indigo-400 text-center content-center">
        <h1 className="text-2xl font-bold text-indigo-800">Curso React</h1>
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>

      <footer className="bg-indigo-200 flex flex-col gap-y-3 justify-center content-center text-center py-4">
        <p className="text-indigo-900">Mi proyecto del curso de React</p>
        <div className="flex flex-row gap-x-5 justify-center">
          <Link
            to={"/"}
            className="text-indigo-800 font-bold hover:underline hover:text-purple-700"
          >
            INICIO
          </Link>
          <Link
            to={"/otra"}
            className="text-indigo-800 font-bold hover:underline hover:text-purple-700"
          >
            OTRA PÁGINA
          </Link>
        </div>
      </footer>
    </div>
  );
}