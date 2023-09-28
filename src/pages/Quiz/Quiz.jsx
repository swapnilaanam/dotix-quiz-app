import groupImg from '../../assets/img/Group 1171275902.png';
import profileImg from '../../assets/img/Ellipse 13.png';
import { useState } from 'react';
import Questions from '../../components/Questions/Questions';
import QuizResult from '../QuizResult/QuizResult';

const Quiz = () => {
    const [isQuestionsEnded, setIsQuestionsEnded] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [inCorrectAnswers, setInCorrectAnswers] = useState(0);


    return (
        <>
            {
                isQuestionsEnded ? <QuizResult correctAnswers={correctAnswers} inCorrectAnswers={inCorrectAnswers} /> : (
                    <div>
                        <div className="h-[228px] bg-[#FFC102] rounded-[30px]">
                            <div className="absolute">
                                <img src={groupImg} alt="group" className="mix-blend-soft-light" />
                            </div>
                            <div className="px-[18px] flex justify-between items-center pt-[30px]">
                                <div className="p-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M12.6461 18.6604L11.5561 19.6771C11.0945 20.1076 10.3482 20.1076 9.89153 19.6771L0.346167 10.7786C-0.115389 10.3481 -0.115389 9.65194 0.346167 9.22601L9.89153 0.322876C10.3531 -0.107625 11.0994 -0.107625 11.5561 0.322876L12.6461 1.33959C13.1126 1.77467 13.1028 2.48454 12.6265 2.91046L6.70974 8.16808H20.8216C21.4746 8.16808 22 8.65812 22 9.26723V10.7328C22 11.3419 21.4746 11.8319 20.8216 11.8319H6.70974L12.6265 17.0895C13.1077 17.5155 13.1175 18.2253 12.6461 18.6604Z" fill="white" fillOpacity="0.9" />
                                    </svg>
                                </div>
                                <div className="bg-white p-[3px] rounded-full flex justify-center items-center">
                                    <img src={profileImg} alt="profile pic" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Questions setIsQuestionsEnded={setIsQuestionsEnded} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} inCorrectAnswers={inCorrectAnswers} setInCorrectAnswers={setInCorrectAnswers} />
                        </div>
                    </div>
                )
            }
        </>
    )
}


export default Quiz;