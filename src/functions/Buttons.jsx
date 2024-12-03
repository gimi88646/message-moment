import React from "react";
import Image from "next/image";

// Button 01
const Button01 = ({
  ButtonStyle,
  icon,
  text,
  onClick,
  customButtonClass,
  customIconClass,
}) => {
  return (
    <button
      onClick={onClick}
      style={ButtonStyle}
      className={`${customButtonClass} flex items-center justify-center`}
    >
      {icon && <span className={`${customIconClass}`}>{icon}</span>}
      {text}
    </button>
  );
};

//Button 02
const Button02 = ({
  onclickFunction,
  customButtonCss,
  TitleCss,
  Title,
  buttonDisabled,
}) => {
  return (
    <>
      <button
        className={`h-[2.875rem] w-[14.75rem] rounded-[0.375rem] bg-[--Blue] flex items-center justify-center ${customButtonCss}`}
        type="button"
        onClick={onclickFunction}
        disabled={buttonDisabled}
      >
        <p
          className={`${TitleCss} text-[--White] text-[0.9375rem] font-[700] font-jetBrain`}
        >
          {Title}
        </p>
      </button>
    </>
  );
};

// Button 03
const Button03 = ({
  onclickFunction,
  customButtonCss,
  IconCss,
  Icons,
  buttonDisabled,
  ButtonId,
  SVG,
}) => {
  return (
    <>
      <button
        id={`${ButtonId}`}
        className={`h-[50px] w-[50px] flex items-center justify-center ${customButtonCss}`}
        type="button"
        onClick={onclickFunction}
        disabled={buttonDisabled}
      >
        <Image src={SVG} />
      </button>
    </>
  );
};

export { Button01, Button02, Button03 };
