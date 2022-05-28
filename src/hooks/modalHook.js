import { useState, useEffect } from "react";

export const useModal = (initialVisible = false) => {
  const [isVisible, updateVisible] = useState(initialVisible);

  const toggleModal = () => {
    updateVisible((pre) => !pre);
  };

  useEffect(() => {
    toggleModal();
  }, []);

  return { isVisible, toggleModal };
};
