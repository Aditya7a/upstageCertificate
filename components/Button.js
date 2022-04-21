import { useState } from "react";

function Button(props) {
  const activeClass =
    "mr-2 inline-flex h-11 w-64 items-center rounded-lg bg-b1 px-5 py-2.5 text-center font-main text-sm font-medium text-white ";

  const nonActiveClass =
    "mr-2 inline-flex h-11 w-64 items-center rounded-lg px-5 py-2.5 text-center font-main text-sm font-medium text-[#444] border-2 border-black hover:bg-gray-600";

  const [style, setStyle] = useState(nonActiveClass);

  const changeStyle = () => {
    console.log("Hi");
    setStyle(activeClass);
  };
  return (
    <>
      <div className="grid-row grid items-center justify-center gap-2 font-main">
        <button type="button" className={style} onClick={changeStyle}>
          <div>
            <props.icon className="ml-4 h-6 w-6" />
          </div>
          <p className="ml-3 text-base font-bold">{props.buttonName}</p>
        </button>
      </div>
    </>
  );
}

export default Button;
