import { useState } from "react";

export const useModal = (initialVisible = false) => {
  const [isVisible, updateVisible] = useState(initialVisible);

  const toggleModal = () => {
    updateVisible((pre) => !pre);
  };

  return { isVisible, toggleModal };
};
