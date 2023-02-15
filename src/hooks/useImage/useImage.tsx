import { useEffect, useState } from "react";

type UserImageType = {
  src: string;
  defaultScr: string;
};
const useImage = ({ src, defaultScr }: UserImageType) => {
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>(defaultScr);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoadingImg(false);
    };
    img.onerror = () => {
      setImgSrc(defaultScr);
      setIsLoadingImg(false);
    };
  }, [src, defaultScr]);

  return [isLoadingImg, imgSrc] as [boolean, string];
};

export default useImage;
