"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import microphone from "../../images/Microphone.svg";
import apiClient from "@/services/api";
import PauseIcon from "../../images/PauseIcon.svg";
import PlayIcon from "../../images/Play.svg";
import Stop from "../../images/Stop.svg";
import bookIcon from "../../images/bookIcon.svg";
import copyIcon from "../../images/copyIcon.svg";
import PlayButton from "../common/PlayButton";
import Loading from "../Loading";     
import addFile from "../../images/addFile.svg";

const VoiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  const [activeTab, setActiveTab] = useState("record");
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transcriptionResult, setTranscriptionResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const timerRef = useRef(null);
  const fileInputRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = async () => {
      clearInterval(timerRef.current);
      const blob = new Blob(audioChunks.current, { type: "audio/ogg" });
      audioChunks.current = [];

      const formData = new FormData();
      formData.append("audio", blob);

      setIsLoading(true);

      try {
        const response = await apiClient.post("/stt/post/", formData);
        if (response.status === 200) {
          setTranscriptionResult(response.data.transcription);
          toast.success("Transkripsiya muvaffaqiyatli bajarildi!");
        }
      } catch (error) {
        console.error("Error sending audio:", error);
        toast.error("Transkripsiya jarayonida xato yuz berdi.");
      } finally {
        setIsLoading(false);
      }

      resetTimer();
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
    setIsPaused(false);
    setTime(0);
    startTimer();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const validFormats = ['audio/ogg', 'audio/mpeg', 'audio/mp3'];
    if (!validFormats.includes(file.type)) {
      toast.error("Faqat OGG va MP3 formatlar qo'llab-quvvatlanadi");
      return;
    }

    const audio = new Audio();
    const objectUrl = URL.createObjectURL(file);
    audio.src = objectUrl;

    audio.addEventListener('loadedmetadata', async () => {
      URL.revokeObjectURL(objectUrl);
      
      if (audio.duration > 600) {
        toast.error("Audio davomiyligi 10 daqiqadan oshmasligi kerak");
        return;
      }

      const formData = new FormData();
      formData.append("audio", file);

      setIsLoading(true);
      try {
        const response = await apiClient.post("/stt/post/", formData);
        if (response.status === 200) {
          setTranscriptionResult(response.data.transcription);
          toast.success("Transkripsiya muvaffaqiyatli bajarildi!");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Transkripsiya jarayonida xato yuz berdi.");
      } finally {
        setIsLoading(false);
      }
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
        startTimer();
      } else {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
        clearInterval(timerRef.current);
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      clearInterval(timerRef.current);
      resetTimer();
    }
    setIsRecording(false);
    setIsPaused(false);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetTimer = () => {
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const copyToClipboard = () => {
    if (transcriptionResult) {
      navigator.clipboard.writeText(transcriptionResult).then(() => {
        toast.success("Nusxalandi!", {
          position: "top-center",
        });
      }).catch(() => {
        toast.error("Nusxa olishda xato!");
      });
    }
  };

  return (
    <section id="VoiceSection">
      <div className="container mx-auto px-4 max-md:px-4">
        <div>
          <p className="text-center font-[600] text-[28px] mt-[64px] max-md:text-[20px]" data-aos="fade-up">
            Ovozni matnlashtirish (STT)
          </p>
          <p className="text-center font-[400] text-[16px] text-[#778292] max-md:text-[14px] max-md:mt-1" data-aos="fade-up" data-aos-delay="100">
            O'zbek tilidagi audio materiallarni yuqori aniqlikda matnga aylantiradi
          </p>
        </div>
        <div className="flex flex-col lg:flex-row max-md:gap-3 gap-[20px] max-md:mt-4 mt-9 md:mb-9 max-md:mb-16">
          <div className="lg:w-[480px] w-full border border-[#f1f1f1] rounded-[16px] py-[24px] flex flex-col md:gap-[22.5px]" data-aos="fade-right">
            <div className="flex max-md:mb-[18px] mx-auto p-0.5 items-center rounded-lg bg-[#F1F1F1] md:w-[290px]">
              <button onClick={() => setActiveTab("record")} className={activeTab === "record" ? "text-[#2B2B2B] text-[14px] font-[600] leading-normal flex p-[10px_30px] justify-center items-center gap-[10px] rounded-[6px] bg-[#fff] shadow-[4px_0px_16px_0px_rgba(30,30,30,0.10)]" : "text-[14px] font-[500] leading-normal flex p-[10px_30px] justify-center items-center gap-[10px] rounded-[6px] bg-[rgba(252,252,252,0.40)]"}>
                Ovoz yozish
              </button>
              <button onClick={() => setActiveTab("upload")} className={activeTab === "upload" ? "text-[#2B2B2B] text-[14px] font-[600] leading-normal flex p-[10px_30px] justify-center items-center gap-[10px] rounded-[6px] bg-[#fff] shadow-[4px_0px_16px_0px_rgba(30,30,30,0.10)]" : "text-[14px] font-[500] leading-normal flex p-[10px_30px] justify-center items-center gap-[10px] rounded-[6px] bg-[rgba(252,252,252,0.40)]"}>
                Fayl yuklash
              </button>
            </div>

            {activeTab === "record" ? (
              <>
                <p className="text-[16px] font-[400] text-[#778292] text-center">
                  {isRecording
                    ? isPaused
                      ? "Yozish to'xtatilgan, davom ettirish uchun tugmani bosing"
                      : "Ovoz yozilmoqda, to'xtatish uchun tugmani bosing"
                    : "Ovoz yozish  uchun tugmani bosing"}
                </p>
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={isLoading}
                  className={`${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  } max-md:px-8 flex items-center justify-center md:p-[20px] max-md:p-4 border max-md:border-none border-[#eeeffa] max-md:w-[276px] max-md:h-[276px] w-[320px] h-[320px] rounded-full mx-auto duration-100`}
                >
                  <div className="p-[20px] max-md:p-[18px] border border-[#cdcef1] inline-block rounded-full animate-pulse duration-[0.1s]">
                    <div className="p-[20px] max-md:p-4 border border-[#595DD2] inline-block rounded-full">
                      <div className="bg-[#595dd2] inline-block px-5  shadow-v max-md:p-4 max-md:py-3 max-md:pt-4 py-4 pt-5 rounded-[99px]">
                        <div className="bg-[#7074E1]  max-md:flex max-md:justify-center max-md:items-center inline-block max-md:p-6 p-10 rounded-full max-md:w-[150px] max-md:h-[150px]">
                          {!isLoading &&
                            (isRecording ? (
                              <PlayButton />
                            ) : (
                              <Image src={microphone} alt="Microphone" />
                            ))}
                          {isLoading && <Loading />}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="flex justify-center items-center gap-8 mt-4">
                  <button className={`${
                      isPaused
                        ? "bg-[#595dd2]"
                        : isRecording
                        ? "bg-[#bdbfe8]"
                        : "bg-[#d7dadf]"
                    } inline-block p-[14px] rounded-full`}
                    onClick={pauseRecording}
                    disabled={!isRecording}
                  >
                    <Image
                      src={isPaused ? PlayIcon : PauseIcon}
                      alt={isPaused ? "Play" : "Pause"}
                      width={24}
                    />
                  </button>
                  <p className="time">{formatTime(time)}</p>
                  <button className={`${isRecording ? "bg-[#595dd2]" : "bg-[#d7dadf]"} inline-block p-[14px] rounded-full`} onClick={stopRecording} disabled={!isRecording}>
                    <Image src={Stop} alt="Stop" />
                  </button>
                </div>
              </>
            ) : (
              <div>
                <p className="text-[16px] font-[400] text-[#778292] text-center">
                  Faylni yuklash uchun tugmani bosing
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="audio/ogg,audio/mpeg,audio/mp3"
                  className="hidden"
                />
                <button 
                  onClick={triggerFileInput}
                  className="mt-6 max-md:px-8 flex items-center justify-center md:p-[20px] max-md:p-4 border max-md:border-none border-[#eeeffa] max-md:w-[276px] max-md:h-[276px] w-[320px] h-[320px] rounded-full mx-auto duration-100"
                >
                  <div className="p-[20px] max-md:p-[18px] border border-[#cdcef1] animate-pulse inline-block rounded-full">
                    <div className="p-[20px] max-md:p-4 border border-[#595DD2] inline-block rounded-full">
                      <div className="bg-[#595dd2]  shadow-v inline-block px-5 max-md:p-4 max-md:py-3 max-md:pt-4 py-4 pt-5 rounded-[99px]">
                        <div className="bg-[#7074E1] max-md:flex max-md:justify-center max-md:items-center inline-block max-md:p-6 p-10 rounded-full max-md:w-[150px] max-md:h-[150px]">
                          {isLoading ? <Loading /> : <Image src={addFile} alt="Add file" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <p className="px-11 pt-9 text-center text-[#778292] text-4 font-[400] leading-normal">
                  OGG, MP3 formatlarni qo'llab-quvvatlaydi. Ovoz davomiyligi chegarasi 10 daqiqa.
                </p>
              </div>
            )}
          </div>

          <div className="lg:max-w-[658px] w-full !border-[#f1f1f1]" data-aos="fade-left">
            <div className="flex justify-between border border-[#f1f1f1] md:p-[20px] max-md:p-3 tk relative">
              <div className="flex items-center gap-1">
                <Image src={bookIcon} alt="Transkripsiya" />
                <p className="max-md:text-[16px] font-[600] ">
                  Transkripsiya natijasi
                </p>
              </div>
              <div
                className="flex w-[41px] h-[41px] cursor-pointer p-[8px_9px_8px_9px] transition-[.3s] justify-center items-center flex-shrink-0 rounded-[8px] bg-[rgba(89,93,210,0.10)]"
                onClick={copyToClipboard}
              >
                <Image src={copyIcon} alt="Copy" />
              </div>
            </div>
            <div className="border border-[#f1f1f1] md:min-h-[520px] rounded-[0px_0px_10px_10px] px-5 py-4">
              {isLoading ? (
                <Loading />
              ) : (
                <p className="font-[400] text-[16px] max-md:pb-5">
                  {transcriptionResult || "Transkripsiya natijasi hali yo'q"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
    </section>
  );
};

export default VoiceSection;