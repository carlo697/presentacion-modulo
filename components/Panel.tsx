import Image from "next/image";
import React, { useEffect, useState } from "react";
import openPanel from "../img/tablero.png";
import closedPanel from "../img/closed-panel.png";
import classNames from "classnames";
import style from "./Panel.module.scss";

const Panel = () => {
  const [image, setImage] = useState(closedPanel);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(image === openPanel ? closedPanel : openPanel);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="display-flex">
      <div className={classNames("pb-4 pb-lg-0", style.wrapper)}>
        <Image
          src={openPanel}
          className={classNames(
            style.image,
            image === openPanel && style.visible
          )}
          alt="Module didactico"
        />
        <Image
          src={closedPanel}
          className={classNames(
            style.image,
            image === closedPanel && style.visible
          )}
          alt="Module didactico"
        />
      </div>
    </div>
  );
};

export default Panel;
