import { useCallback, useRef, useState } from "react";

const useIntersectionObserver = (numberOfItems = 10) => {
  const [numberOfEntries, setNumberOfEntries] = useState(numberOfItems);
  const observer = useRef();

  const updateNumberOfEntries = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
          setNumberOfEntries((numOfItems) => numOfItems + numberOfItems);
        }
      });
      if (node) observer.current.observe(node);
    },
    [numberOfItems]
  );

  return {
    numberOfEntries,
    updateNumberOfEntries,
  };
};

export default useIntersectionObserver;
