import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Questions = ({ setIsQuestionsEnded, correctAnswers, setCorrectAnswers, inCorrectAnswers, setInCorrectAnswers }) => {
    const { category } = useParams();

    const { data: quizzes = [] } = useQuery({
        queryKey: ["quizzes", category],
        queryFn: async () => {
            if (category === 'space') {
                const response = await axios.get('https://opentdb.com/api.php?amount=20&category=17&difficulty=easy&type=multiple');
                // console.log(response?.data?.results);
                return response?.data?.results;
            }
            if (category === 'history') {
                const response = await axios.get('https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple');
                // console.log(response?.data?.results);
                return response?.data?.results;
            }
            if (category === 'sports') {
                const response = await axios.get('https://opentdb.com/api.php?amount=20&category=21&difficulty=easy&type=multiple');
                // console.log(response?.data?.results);
                return response?.data?.results;
            }
        }
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionOptions, setQuestionOption] = useState([]);
    const [currentTime, setCurrentTime] = useState(20);
    const [selectedOption, setSelectedOption] = useState(null);
    const [resetIt, setResetIt] = useState(false);

    useEffect(() => {
        if (quizzes.length > 0) {
            setQuestionOption([quizzes[currentIndex]?.correct_answer, ...quizzes[currentIndex].incorrect_answers]);
        }
    }, [quizzes, currentIndex]);


    const timer = useRef();
    const currentTimer = useRef();

    const goToNextQuestion = useCallback(
        () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            if (currentIndex === 19) {
                setIsQuestionsEnded(true);
            }
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
        }, [currentIndex, setIsQuestionsEnded])

    useEffect(() => {
        timer.current = setTimeout(goToNextQuestion, 20 * 1000);
        // return goToNextQuestion;
    }, [currentIndex, goToNextQuestion]);

    const changeTheTimer = () => {
        if (currentTimer.current) {
            clearTimeout(changeTheTimer.current);
        }
        if (currentTime === 1) {
            setCurrentTime(20);
        }
        else {
            setCurrentTime(currentTime - 1);
        }
    }

    useEffect(() => {
        if (resetIt === true) {
            setCurrentTime(20);
            setResetIt(false);
        }
        currentTimer.current = setTimeout(changeTheTimer, 1 * 1000)
    }, [currentTime])

    const calculateResult = (index, correctAnswer) => {
        if (questionOptions[index] === correctAnswer) {
            setCorrectAnswers(correctAnswers + 1);
        }
        else {
            setInCorrectAnswers(inCorrectAnswers + 1);
        }
    }

    return (
        <div>
            <div className="relative bg-white rounded-[20px] mx-7 -top-24" style={{ boxShadow: "0px 4px 4px 0px #FBECFF" }}>
                <div className="flex justify-between items-end mx-[10px] relative -top-7">
                    <div className="w-full text-[#1F8435] text-[14px] font-bold flex items-center gap-3">
                        <span>{correctAnswers}</span>
                        <div className={`w-full h-[8px] rounded-[15px] flex justify-start`}>
                            <div className={`w-[${((correctAnswers / 20) * 100)}%] h-[8px] bg-[#1F8435] rounded-[15px]`}></div>
                        </div>
                    </div>
                    <div className="bg-white w-[64px] h-[64px] rounded-full">
                        <div className="relative flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                <path d="M57 28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5C10 28.5 28.5 20 28.5 0C44.2401 0 57 12.7599 57 28.5Z" fill="#FEB005" />
                            </svg>
                            <div className="absolute bg-white w-[49px] h-[49px] rounded-full flex justify-center items-center">
                                <h4 className="text-[#FEB005] text-[20px] font-bold">{currentTime}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-[#D05A04] text-[14px] font-bold flex items-center gap-3">
                        <div className={`w-full h-[8px] rounded-[15px] flex justify-end`}>
                            <div className={`w-[${(inCorrectAnswers / 20) * 100}%] h-[8px] bg-[#D05A04] rounded-[15px]`}></div>
                        </div>
                        <span>{inCorrectAnswers}</span>
                    </div>
                </div>
                <h4 className="text-center text-[#FFC000] text-sm font-medium mb-8">Question {currentIndex + 1}/20</h4>
                <h4 className="text-[#2B262D] font-medium px-8 text-center pb-6">{quizzes[currentIndex]?.question}</h4>
            </div>
            <div className="relative -top-10 mx-[48px] space-y-5">
                {
                    questionOptions.map((option, index) => {
                        return (
                            <div key={index} className={`${selectedOption === null ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-75'}`}>
                                <input
                                    type="radio"
                                    name="questionoption"
                                    value={option}
                                    id={option}
                                    className="peer hidden"
                                />
                                <label
                                    htmlFor={option}
                                    className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-[#FFB504] bg-white p-4 text-sm font-medium shadow-sm"
                                    onClick={() => {
                                        setSelectedOption(index);
                                        setTimeout(() => {
                                            calculateResult(index, quizzes[currentIndex]?.correct_answer);
                                        setResetIt(true);
                                        goToNextQuestion();
                                        }, 2000)
                                    }}
                                >
                                    <div className="w-full flex justify-between items-center">
                                        <p className="font-medium text-xl text-[#2B262D]">{option}</p>
                                        {
                                            selectedOption !== index ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                    <path d="M0.5 11C0.5 5.19953 5.19953 0.5 11 0.5C16.8005 0.5 21.5 5.19953 21.5 11C21.5 16.8005 16.8005 21.5 11 21.5C5.19953 21.5 0.5 16.8005 0.5 11Z" fill="#F5F5F5" stroke="#FEB100" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                    <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92485 22 0 17.0751 0 11C0 4.92485 4.92485 0 11 0C17.0751 0 22 4.92485 22 11ZM9.72764 16.8244L17.8889 8.66312C18.1661 8.38599 18.1661 7.93663 17.8889 7.6595L16.8853 6.65589C16.6082 6.37871 16.1588 6.37871 15.8816 6.65589L9.22581 13.3117L6.11835 10.2042C5.84122 9.9271 5.39186 9.9271 5.11469 10.2042L4.11107 11.2078C3.83394 11.485 3.83394 11.9343 4.11107 12.2115L8.72398 16.8244C9.00115 17.1015 9.45046 17.1015 9.72764 16.8244Z" fill="#FFB504" />
                                                </svg>
                                            )
                                        }
                                    </div>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Questions;