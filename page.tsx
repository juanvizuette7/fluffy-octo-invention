//import Image from "next/image";

import { PhotoIcon, PlayIcon, SparklesIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-300">
      <section className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg w-full max-w-lg min-h-[700px] flex flex-col justify-between">
        <h2 className="text-lg font-arial">Appearance</h2>
        <p className="text-gray-500">
          Set or customize your preferences for the system
        </p>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-bold">Language</legend>
          <select className="border p-2 rounded-lg w-full">
            <option>English</option>
          </select>
        </fieldset>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-bold">Interface theme</legend>
          <div className="flex justify-between">
            <label className="flex flex-col items-center cursor-pointer">
              <input type="radio" name="theme" className="hidden" />
              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="60" rx="10" fill="#BFDBFE" />
              </svg>
              Auto
            </label>
            <label className="flex flex-col items-center cursor-pointer">
              <input type="radio" name="theme" className="hidden" />
              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="60" rx="10" fill="#E5E7EB" />
              </svg>
              Light
            </label>
            <label className="flex flex-col items-center cursor-pointer">
              <input type="radio" name="theme" className="hidden" />
              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="60" rx="10" fill="#1E3A8A" />
              </svg>
              Dark
            </label>
          </div>
        </fieldset>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-bold">Accent color</legend>
          <div className="flex space-x-2">
            {[
              "bg-red-500",
              "bg-yellow-400",
              "bg-green-500",
              "bg-blue-600",
              "bg-purple-500",
            ].map((color, index) => (
              <label
                key={index}
                className="w-6 h-6 rounded-full cursor-pointer flex items-center justify-center"
              >
                <input type="radio" name="accent" className="hidden" />
                <span
                  className={`w-6 h-6 rounded-full ${color} border-2 border-white shadow-md`}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium">Preferences</legend>
          <label className="flex items-center justify-between">
            <SparklesIcon className="w-5 h-5 text-gray-500" />
            <svg
              width="50"
              height="25"
              viewBox="0 0 50 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="25" rx="12.5" fill="#D1D5DB" />
              <circle cx="12.5" cy="12.5" r="9" fill="white" />
            </svg>
          </label>
          <label className="flex items-center justify-between">
            <PlayIcon className="w-5 h-5 text-gray-500" />
            <svg
              width="50"
              height="25"
              viewBox="0 0 50 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="25" rx="12.5" fill="#D1D5DB" />
              <circle cx="12.5" cy="12.5" r="9" fill="white" />
            </svg>
          </label>
          <label className="flex items-center justify-between">
            <PhotoIcon className="w-5 h-5 text-gray-500" />
            <svg
              width="50"
              height="25"
              viewBox="0 0 50 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="25" rx="12.5" fill="#6D28D9" />
              <circle cx="37.5" cy="12.5" r="9" fill="white" />
            </svg>
          </label>
        </fieldset>

        <footer className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Save Preferences
          </button>
        </footer>
      </section>
    </section>
  );
}
