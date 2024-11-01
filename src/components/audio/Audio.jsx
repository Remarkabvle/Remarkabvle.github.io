"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiClient from '../../services/api'; // Adjust the import path
import PlayIcon from "../../images/PlayIcon.svg";
import PauseIcon from "../../images/Pause.svg"; 
import Loading from "../Loading";
import { MdDelete } from "react-icons/md";

const Audio = () => {
  const [inputText, setInputText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConvertDisabled, setIsConvertDisabled] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  const getAudio = async () => {
    if (inputText.trim() === "") return;

    setIsLoading(true);
    setIsConvertDisabled(true);

    try {
      setAudioUrl(null);
      const response = await apiClient.post(
        "tts/post/",
        { transcript: inputText },
        { responseType: "blob" }
      );

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const newAudioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(newAudioUrl);
      setIsLoading(false);
      setIsConvertDisabled(true);
      setIsDisabled(false);
    } catch (error) {
      setIsLoading(false);
      setIsConvertDisabled(true);
      console.error("Error:", error);
      toast.error("Ovoz konvertatsiya jarayonida xato!", {
        position: "top-center", // Centered position
      });
    }
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setIsConvertDisabled(text.trim() === "");
    setShowDeleteButton(text.trim() !== "");
  };

  const handleDeleteText = () => {
    setInputText("");
    setIsConvertDisabled(true);
    setShowDeleteButton(false);
    toast.info("Matn o'chirildi.", {
      position: "top-center", // Centered position
    });
  };

  const handleConvertClick = () => {
    getAudio();
  };

  const handleAudioPlay = () => {
    const audio = document.getElementById("audioown");
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleAudioPause = () => {
    const audio = document.getElementById("audioown");
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick draggable pauseOnHover />
      <div className="max-md:px-4 md:mb-9">
        <p className="text-center font-[600] text-[28px] md:mt-[64px] max-md:text-[20px]" data-aos="fade-up">
          Matnni ovozlashtirish (TTS)
        </p>
        <p className="text-center font-[400] text-[16px] text-[#778292] max-md:text-[14px]" data-aos="fade-up" data-aos-delay="200">
          O'zbek tilidagi matndan tabiiy tovushli nutqni yaratadi
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:gap-[20px] max-md:mt-4 md:mb-9 max-md:px-4 mb-16" data-aos="fade-up" data-aos-delay="400">
        <div className="lg:max-w-[658px] w-full" data-aos="fade-right">
          <div className="flex justify-between border-[1.5px] border-[#F1F1F1] p-[20px] tk relative">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" color="#595DD2" className="text-[#595DD2] text-2xl">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.4127 16.8173H11.5847C11.0327 16.8173 10.5847 16.3693 10.5847 15.8173C10.5847 15.2653 11.0327 14.8173 11.5847 14.8173H20.4127C20.9647 14.8173 21.4127 15.2653 21.4127 15.8173C21.4127 16.3693 20.9647 16.8173 20.4127 16.8173ZM20.4127 22.2253H11.5847C11.0327 22.2253 10.5847 21.7773 10.5847 21.2253C10.5847 20.6733 11.0327 20.2253 11.5847 20.2253H20.4127C20.9647 20.2253 21.4127 20.6733 21.4127 21.2253C21.4127 21.7773 20.9647 22.2253 20.4127 22.2253ZM11.586 9.42125H14.954C15.506 9.42125 15.954 9.86925 15.954 10.4213C15.954 10.9733 15.506 11.4213 14.954 11.4213H11.586C11.034 11.4213 10.586 10.9733 10.586 10.4213C10.586 9.86925 11.034 9.42125 11.586 9.42125ZM21.382 3.33325H10.6167C7.22067 3.33325 4.45801 6.09592 4.45801 9.49325V22.5066C4.45801 25.9026 7.22067 28.6666 10.6167 28.6666H21.382C24.778 28.6666 27.542 25.9026 27.542 22.5066V9.49325C27.542 6.09592 24.778 3.33325 21.382 3.33325Z" fill="#595DD2" />
              </svg>
              <p className="text-[#2B2B2B] font-inter text-xl font-semibold max-sm:text-[14px]">Matn kiritish</p>
            </div>
            <div>
              <button
                className={`inline-flex px-5 py-3 group justify-center items-center gap-1 rounded-lg ${isConvertDisabled ? "bg-[#F1F1F1] cursor-not-allowed" : "bg-[rgba(89,93,210,0.1)] "} transition-[.3s]`}
                onClick={handleConvertClick}
                disabled={isConvertDisabled}
              >
                <span className={`font-inter text-sm font-semibold leading-none ${isConvertDisabled ? "text-[#778292]" : "text-[#595DD2]"}`}>O'girish</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.167 7.81714L3.16699 7.81714" stroke={isConvertDisabled ? "#778292" : "#595DD2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335" stroke={isConvertDisabled ? "#778292" : "#595DD2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="gk flex flex-col gap-[32px] border-[1.5px] border-[#F1F1F1]">
            <div className="relative">
              <textarea
                className="pt-[10px] pr-[30px] pb-[10px] pl-[20px] text-[#2B2B2B] text-[16px] w-full md:h-[450px] outline-none overflow-hidden bg-white"
                placeholder="Matnni bu yerga kiriting..."
                value={inputText}
                onChange={handleInputChange}
              ></textarea>
              {showDeleteButton && (
                <button
                  onClick={handleDeleteText}
                  className={`absolute top-2 right-2 text-gray-500 hover:text-[#595DD2] duration-[.8s] ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={isLoading}
                >
                  <MdDelete size={24} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:w-[480px] max-lg:w-[100%] md:h-[549px] md:p-[62px_36px_36px_36px] flex-col justify-end items-center gap-[32px] md:rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-[2px] max-md:min-w-[100%]" data-aos="fade-left">
          <div className="flex justify-center items-center">
            {audioUrl && !isLoading && (
              <audio
                id="audioown"
                className="hidden"
                controls
                src={audioUrl}
                onEnded={handleAudioEnd}
              />
            )}
          </div>

          {isPlaying ? (
            <button
              onClick={handleAudioPause}
              className="audio-play-btn inline-block p-[20px] rounded-[180px] border-[1px] border-[#eeeffa]"
              disabled={isDisabled}
            >
              <div className="inline-block p-5 rounded-full border border-[#cdcef1]">
                <div className="inline-block p-5 rounded-full border border-[#595DD2]">
                  <div className="bg-[#595dd2] inline-block p-[20px_20px_15px_20px] rounded-[120px]">
                    <div className="bg-[#7074E1] p-[40px] rounded-[100px] inline-block flex justify-center items-center">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <Image src={PauseIcon} alt="PauseIcon" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={handleAudioPlay}
              className={`audio-play-btn flex justify-center items-center max-md:border-none max-md:w-[276px] max-md:h-[276px] m-[0_auto] h-[320px] p-[20px] rounded-[9999px] border-[1px] border-[#eeeffa] ${isDisabled ? "border-gray-200 cursor-not-allowed" : ""}`}
              disabled={isDisabled}
            >
              <div className={`inline-block p-5 rounded-full border border-[#cdcef1] ${isDisabled ? "border-gray-400 cursor-not-allowed" : ""}`}>
                <div className={`inline-block p-5 rounded-full border border-[#595DD2] ${isDisabled ? "border-gray-600 cursor-not-allowed" : ""}`}>
                  <div className={`bg-[#595dd2] inline-block p-[20px_20px_15px_20px] rounded-[120px] ${isDisabled ? "bg-[#778292] cursor-not-allowed" : ""}`}>
                    <div className={`bg-[#7074E1] p-[40px] rounded-[100px] inline-block max-md:w-[138px] max-md:h-[138px] ${isDisabled ? "bg-[#929caa] cursor-not-allowed" : ""}`}>
                      {isLoading ? (
                        <Loading className="mx-auto" />
                      ) : (
                        <Image src={PlayIcon} alt="PlayIcon" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          )}

          <p className="text-[16px] font-[400] text-[#778292] text-center max-md:p-6">
            Natijani shu yerda eshitishingiz mumkin bo'ladi
          </p>

          <button
            className={`flex w-full max-w-[408px] max-md:hidden mx-auto px-4 md:px-6 py-2 md:py-3 justify-center items-center gap-1 rounded-lg bg-[#595DD2] max-md:w-[80%] ${!audioUrl ? "cursor-not-allowed bg-[#F1F1F1]" : ""}`}
            onClick={() => {
              if (audioUrl) {
                const link = document.createElement("a");
                link.href = audioUrl;
                link.download = "audio.mp3";
                link.click();
                toast.success("Audio yuklab olindi!", {
                  position: "top-center", // Centered position
                });
              }
            }}
            disabled={!audioUrl}
          >
            <span className={`font-inter  text-sm md:text-base font-semibold leading-none ${!audioUrl ? "!text-white" : "!text-white"}`}>
              Yuklab olish
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.33325 14.1667V15.8334C3.33325 16.2754 3.50885 16.6993 3.82141 17.0119C4.13397 17.3244 4.55789 17.5 4.99992 17.5H14.9999C15.4419 17.5 15.8659 17.3244 16.1784 17.0119C16.491 16.6993 16.6666 16.2754 16.6666 15.8334V14.1667M5.83325 9.16671L9.99992 13.3334M9.99992 13.3334L14.1666 9.16671M9.99992 13.3334V3.33337" stroke={`${!audioUrl ? "#778292" : "#FFFFFF"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audio; 