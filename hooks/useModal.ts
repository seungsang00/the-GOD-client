import { useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const modalController = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, modalController };
};
