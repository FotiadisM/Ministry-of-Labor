import { useState } from "react";

export const useHovered = (): [boolean, () => void] => {
  const [hovered, setHovered] = useState<boolean>(false);
  const togleHovered = () => {
    setHovered((h) => !h);
  };

  return [hovered, togleHovered];
};
