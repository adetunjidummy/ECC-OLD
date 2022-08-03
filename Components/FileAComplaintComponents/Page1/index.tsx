import { Dispatch, SetStateAction, useState } from "react";
import FileAComplaintInput from "../FileAComplaintInput";
interface Page1Props {
  titleOfComplaint: string;
  setTitleOfComplaint: Dispatch<SetStateAction<string>>;
  placeOfTransaction: string;
  setPlaceOfTransaction: Dispatch<SetStateAction<string>>;
  companyName: string;
  setCompanyName: Dispatch<SetStateAction<string>>;
  amountLost: string;
  setAmountLost: Dispatch<SetStateAction<string>>;
  brandContact: string;
  setBrandContact: Dispatch<SetStateAction<string>>;
  complaintDetails: string;
  setComplaintDetails: Dispatch<SetStateAction<string>>;
  brandHandle: string;
  setBrandHandle: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Page1: React.FC<Page1Props> = ({
  titleOfComplaint,
  setTitleOfComplaint,
  placeOfTransaction,
  setPlaceOfTransaction,
  companyName,
  setCompanyName,
  amountLost,
  setAmountLost,
  brandContact,
  setBrandContact,
  complaintDetails,
  setComplaintDetails,
  brandHandle,
  setBrandHandle,
  setCurrentPage,
}) => {
  const onSubmit = () => {
    setCurrentPage(2);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-[90px]">
      <p className="text-[24px]">
        All form field with <span className="text-[#EF2E2E]">*</span> are
        important to proceed with your complaint
      </p>
      <div className="mt-[88.71px]">
        <div className="grid grid-cols-2 gap-x-[66px] gap-y-[30px]">
          <FileAComplaintInput
            label={"Title of your complaint"}
            placeholder={"e.g Package not delivered"}
            value={titleOfComplaint}
            setValue={setTitleOfComplaint}
            type="text"
            nairaSymbol={false}
          />
          <FileAComplaintInput
            label={"Where did this transaction happen?"}
            placeholder={
              "e.g Facebook, Instagram, Twiiter, offline . If other please specify"
            }
            value={placeOfTransaction}
            setValue={setPlaceOfTransaction}
            type="text"
            nairaSymbol={false}
          />
          <FileAComplaintInput
            label={"Company’s/Brand’s name"}
            placeholder={"Enter Email Address"}
            value={companyName}
            setValue={setCompanyName}
            type="text"
            nairaSymbol={false}
          />
          <div>
            <FileAComplaintInput
              label={"Total amount lost from this incident"}
              placeholder={"Enter Amount"}
              value={amountLost}
              setValue={setAmountLost}
              type="text"
              nairaSymbol={true}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-x-[66px] gap-y-[30px] mt-[30px]">
          <div className="">
            <FileAComplaintInput
              label={"Company’s/Brand’s Contact (Email/Phone)"}
              placeholder={"Enter Contact"}
              value={brandContact}
              setValue={setBrandContact}
              type="text"
              nairaSymbol={false}
            />
          </div>
          <div className="row-span-2 col-span-1">
            <div className="flex flex-row space-x-[13px] pb-[10px]">
              <p className="text-[20px]">
                Complaint details <span className="text-[#EF2E2E]">*</span>
              </p>
              <img
                src="./icons/fac-help.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
            <textarea
              value={complaintDetails}
              onChange={(e) => setComplaintDetails(e.target.value)}
              id=""
              className="transition-[150ms] pt-[25px] pb-[135px] xl:pt-[25px] xl:pb-[146px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] w-full focus:border-[#0B63C5] placeholder:text-[#C5C5C5] px-[20px] resize-none"
              placeholder="Explain in details your grievances, include Date, Location, Name of Item and any other vital information you think might help us resolve this complaint"
            />
          </div>
          <div className="">
            <FileAComplaintInput
              label={"Company’s/Brand’s Social media handle"}
              placeholder={"e.g @itzadetunji on instagram"}
              value={brandHandle}
              setValue={setBrandHandle}
              type="text"
              nairaSymbol={false}
            />
          </div>
        </div>
        <button
          onClick={onSubmit}
          className="bg-[#0B63C5] mt-[110px] mx-[334px] w-[572.15px] rounded-[12px] text-[20px] font-[600] text-white py-[22px]"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default Page1;