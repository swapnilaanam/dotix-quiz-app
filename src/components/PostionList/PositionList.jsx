import user4Img from '../../assets/img/Ellipse 24.png';
import user5Img from '../../assets/img/Ellipse 25.png';
import user6Img from '../../assets/img/Ellipse 26.png';
import user7Img from '../../assets/img/Ellipse 27.png';
import user18Img from '../../assets/img/Ellipse 28.png';

const PositionList = () => {
    return (
        <div>
            <div className="space-y-4 py-6">
                <div className="flex justify-between items-center ml-[22px] mr-[17px]">
                    <div className="flex items-center">
                        <h6 className="text-[15px] text-[#2B262D]">04</h6>
                        <div className="ml-[22px] mr-[29px]">
                            <img src={user4Img} alt="user" />
                        </div>
                        <h4 className="text-[#2B262D]">Moni</h4>
                    </div>
                    <div className="bg-[#FFC10299] rounded-[20px] text-[#2B262D] text-[15px] pl-[11px] pr-[9px] pt-1 pb-[1px]">
                        223pt
                    </div>
                </div>
                <div className="flex justify-between items-center ml-[22px] mr-[17px]">
                    <div className="flex items-center">
                        <h6 className="text-[15px] text-[#2B262D]">05</h6>
                        <div className="ml-[22px] mr-[29px]">
                            <img src={user5Img} alt="user" />
                        </div>
                        <h4 className="text-[#2B262D]">Esha</h4>
                    </div>
                    <div className="bg-[#FFC10299] rounded-[20px] text-[#2B262D] text-[15px] pl-[11px] pr-[9px] pt-1 pb-[1px]">
                        160pt
                    </div>
                </div>
                <div className="flex justify-between items-center ml-[22px] mr-[17px]">
                    <div className="flex items-center">
                        <h6 className="text-[15px] text-[#2B262D]">06</h6>
                        <div className="ml-[22px] mr-[29px]">
                            <img src={user6Img} alt="user" />
                        </div>
                        <h4 className="text-[#2B262D]">Kaosar</h4>
                    </div>
                    <div className="bg-[#FFC10299] rounded-[20px] text-[#2B262D] text-[15px] pl-[11px] pr-[9px] pt-1 pb-[1px]">
                        140pt
                    </div>
                </div>
                <div className="flex justify-between items-center ml-[22px] mr-[17px]">
                    <div className="flex items-center">
                        <h6 className="text-[15px] text-[#2B262D]">07</h6>
                        <div className="ml-[22px] mr-[29px]">
                            <img src={user7Img} alt="user" />
                        </div>
                        <h4 className="text-[#2B262D]">Sam</h4>
                    </div>
                    <div className="bg-[#FFC10299] rounded-[20px] text-[#2B262D] text-[15px] pl-[11px] pr-[9px] pt-1 pb-[1px]">
                        223pt
                    </div>
                </div>
            </div>
            <div className="w-full h-[1.8px] bg-[#00000030]" style={{ boxShadow: "4px 0px 4px 0px #00000040" }}></div>
            <div className="flex justify-between items-center ml-[22px] mr-[17px] pt-[12px] pb-[15px]">
                <div className="flex items-center">
                    <h6 className="text-[15px] text-[#2B262D]">18</h6>
                    <div className="ml-[22px] mr-[29px]">
                        <img src={user18Img} alt="user" />
                    </div>
                    <h4 className="text-[#2B262D]">Sam</h4>
                </div>
                <div className="bg-[#FFC10299] rounded-[20px] text-[#2B262D] text-[15px] pl-[11px] pr-[9px] pt-1 pb-[1px]">
                    120pt
                </div>
            </div>
        </div >
    );
};

export default PositionList;