import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen flex gap-5 bg-zinc-900 p-20 ">
      <div className="w-1/2 flex h-full flex-col justify-between ">
        <div className="heading ">
          <h1 className="text-[3vw] font-semibold uppercase leading-none mb-5">
            {" "}
            Technical Skills -
          </h1>
          
          <div className="w-3/5 h-1/5 grid grid-cols-5 gap-4">
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/1_HTML.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/2_CSS.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/3_JS.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/4_Figma.jpg"
              alt=""
            />
            <img
              className="w-20
              
              h-20 object-contain"
              src="public/asset/5_React.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/6_react_native.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/7_Tailwind.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/8_dart.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/9_cpp.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/10_django.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/11_docker.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/12_firebase.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/13_git.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/14_github.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/15_java.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/16_mongodb.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/17_neo4j.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/18_nodejs.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/19_python.jpg"
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src="public/asset/20_googlecloud.jpg"
              alt=""
            />
          </div>
        </div>
        <img className="w-20 h-20" src="public/asset/IITj.png" alt="" />
      </div>

      <div className='w-1/2 font-["Founders Grotesk X-Condensed"] place-items-end'>
        <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-5">
          Contact
        </h1>
        <div className='dets font-["Neue_Montreal"] mt-10 flex flex-col mr-2 place-items-end'>
          <a className="block text-xl font-light" href="#">
            Facebook
            <img src="" alt="" />
          </a>
          <a className="block text-xl font-light" href="#">
            Instagram
          </a>
          <a className="block text-xl font-light" href="#">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
