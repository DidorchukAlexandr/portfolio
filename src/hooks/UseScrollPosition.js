import { useEffect, useState } from "react";

function UseScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("hashchange", (event) => {
      console.log(event.currentTarget.location.hash);
    });
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

export default UseScrollPosition;
