import groupImg from '../../assets/img/Group 1171275902.png';
import profileImg from '../../assets/img/Ellipse 13.png';

import user1Img from '../../assets/img/Ellipse 21.png';
import user2Img from '../../assets/img/Ellipse 23.png';
import user3Img from '../../assets/img/Ellipse 22.png';
import PositionList from '../../components/PostionList/PositionList';

const LeaderBoard = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="h-[360px] bg-[#FFC102] rounded-t-[30px]">
                <div className="md:hidden absolute w-full flex justify-center items-center">
                    <img src={groupImg} alt="group" className="mix-blend-soft-light w-full" />
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
                <div className="flex items-center gap-5 mt-2 ml-[13px]">
                    <h4 className="text-white text-2xl font-bold leading-normal">Today</h4>
                    <div className="flex items-center gap-[14px] mt-[1px]">
                        <h4 className="text-white text-xl leading-normal">Month</h4>
                        <h4 className="text-white text-xl leading-normal">All Times</h4>
                    </div>
                </div>
                <div className="ml-[27px] mr-[12px] mt-[10px] flex justify-center items-end md:relative">
                    <div className="absolute left-[24px]">
                        <div className="text-center mx-5 mb-2">
                            <img src={user2Img} alt="user" />
                        </div>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="165" viewBox="0 0 123 165" fill="none">
                                <path d="M0.206604 0.740295L93.5875 0.899774L122.59 152.949L35.6598 164.063L0.206604 0.740295Z" fill="#D8A800" fillOpacity="0.7" />
                            </svg>
                            <div className="absolute pt-2">
                                <h2 className="text-white text-[75px] font-bold leading-none rotate-[-6.995deg]">2</h2>
                                <h4 className="text-[15px] leading-normal text-white text-right">442pt</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center mx-3">
                            <img src={user1Img} alt="user" />
                        </div>
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="211" viewBox="0 0 98 211" fill="none">
                                <g filter="url(#filter0_d_133_388)">
                                    <path d="M0 17.9646L83.0097 0L90 203H5.24272L0 17.9646Z" fill="#D8A800" fillOpacity="0.7" shapeRendering="crispEdges" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_133_388" x="0" y="0" width="98" height="211" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="4" dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_388" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_388" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <div className="absolute">
                                <h2 className="text-white text-[75px] font-bold leading-none">1</h2>
                                <h4 className="text-[15px] leading-normal text-white text-right">453pt</h4>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-4">
                        <div className="text-center ml-10">
                            <img src={user3Img} alt="user" />
                        </div>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="186" viewBox="0 0 112 186" fill="none">
                                <path d="M23.4056 0.639725L111.041 32.8905L86.0062 185.644L0.553548 166.196L23.4056 0.639725Z" fill="#D8A800" fillOpacity="0.7" />
                            </svg>
                            <div className="absolute pt-7">
                                <h2 className="text-white text-[75px] font-bold leading-none rotate-[10.901deg]">3</h2>
                                <h4 className="text-[15px] leading-normal text-white text-center">433pt</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white relative z-10 rounded-[25px] -top-4">
                <PositionList />
            </div>
        </div>
    );
};

export default LeaderBoard;