import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-white ">
      <hr className="mt-6 border-gray-200 mx-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-xl font-semibold text-gray-500">
              CVSS
            </span>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 ">
              <AiOutlineMail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ">
              <AiFillInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
