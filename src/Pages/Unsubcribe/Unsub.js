import React, { useEffect, useState } from "react";
import { path } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
function Unsub() {
  const navigate = useNavigate();
  const Timer = ({ maxTime, navigatePath }) => {
    const [counter, setCounter] = useState(maxTime);
    const navigate = useNavigate();

    useEffect(() => {
      if (counter > 0) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000);
      }
      if (counter == 0) {
        navigate(navigatePath);
      }
    }, [counter]);

    return <span>{counter}</span>;
  };
  return (
    <div className="h-[100vh] pt-[200px] flex flex-col justify-center items-center w-[90%] mx-auto">
      <p className="text-[40px] font-nexa_bold text-primary">
        IT'S NOT THE SAME WITHOUT YOU
      </p>
      <p className="font-nexa_light text-[24px]">
        You been successfully unsubcribed from JOYU email newsletter
      </p>
      <div
        className="cursor-pointer w-[200px] h-[70px] p-[10px] bg-sky-100 rounded-lg font-bold flex items-center justify-center"
        onClick={() => {
          navigate("../" + path.HOME);
        }}
      >
        Complete {"("}
        <Timer maxTime={10} navigatePath={"../" + path.HOME} />
        {")"}
      </div>
    </div>
  );
}

export default Unsub;
