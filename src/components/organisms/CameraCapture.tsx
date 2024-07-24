import React, { useRef, useState, useEffect } from "react";
import { Section } from "../atoms/section";
import { ButtonIcon } from "../atoms/button";
import { Image } from "../atoms/image";
import { FaShareSquare, FaCamera, FaChevronLeft} from "react-icons/fa";
import { uploadPhoto } from "../../services/storage"

export const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    startCamera();
  }, [photoURL])

  const hanldeCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const dataUrl = canvasRef.current.toDataURL("image/png");
        setPhotoURL(dataUrl);
      }
    }
  };

  const handleUploadPhoto = async (dataUrl: string) => {
    setPhotoURL(null)
    return await uploadPhoto(dataUrl)
  };

  return (
    <Section className="bg-slate-50 flex flex-col gap-5">
      <Section className="border-2 shadow-md shadow-slate-100 w-full h-full">
        {!photoURL && (
          <Section className="w-full h-full">
            <video ref={videoRef} className="w-full h-full" />
            <canvas ref={canvasRef} className="w-full h-full hidden" />
          </Section>
        )}
        {photoURL && (
          <Section className="">
            <Image
              src={photoURL}
              alt="Captured"
              className="w-full h-full object-fill"
            />
          </Section>
        )}
      </Section>
      <Section className="flex gap-2 justify-center">
        <ButtonIcon onClick={() => setPhotoURL(null)} icon={FaChevronLeft} />
        {!photoURL && <ButtonIcon onClick={hanldeCapturePhoto}icon={FaCamera} />}
        {photoURL && <ButtonIcon onClick={()=> handleUploadPhoto(photoURL)} icon={FaShareSquare} />}
      </Section>
    </Section>
  );
};
