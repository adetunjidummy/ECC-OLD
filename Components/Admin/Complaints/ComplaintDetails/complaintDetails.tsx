import { useState } from "react";

interface ComplaintProps {
	user: any;
	complaint: any;
}

const ComplaintDetails: React.FC<ComplaintProps> = ({ user, complaint }) => {
	const possibleStatus = ["Open", "Closed", "Resolved", "Pending"];
	const [statusShowing, setStatusShowing] = useState(false);
	const handleStatusChange = (status: string) => {
		complaint.status = status;
	};
	return (
		<div className="w-full h-full">
			<div className="w-full flex flex-row  items-center justify-between px-4 ">
				<div className="flex flex-col">
					<p>By:</p>
					<div className="flex flex-row gap-x-4">
						<img
							src={user.profilePic}
							alt=""
						/>
						<div>
							<p>{user.userName}</p>
							<p>{complaint.date}</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-row gap-x-2">
						<p>Grievance ID</p>
						<p className="text-eccblue">{complaint.grievanceId}</p>
					</div>
					<div className="flex items-center flex-row gap-x-2">
						<p>Current Status</p>
						<div
							onClick={() => {
								setStatusShowing(!statusShowing);
							}}
							className={` w-[94px] h-[41px]  flex items-center justify-center  text-center rounded-md text-white ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}
						>
							<p> {complaint.status}</p>
						</div>
					</div>
					{statusShowing && (
						<div className="flex flex-col items-center justify-center gap-y-2 h-auto w-[150px] rounded-md  px-4 py-4 border border-eccblue bg-white z-20">
							{possibleStatus
								.filter((status) => status !== complaint.status)
								.map((status) => (
									<div
										onClick={(e) => {
											handleStatusChange(e.currentTarget.innerText);
										}}
										className={` w-[94px] h-[41px] flex items-center justify-center rounded-md text-white ${status === "Open" && " bg-[#EF2E2E]"} ${status === "Resolved" && " bg-success"} ${status === "Closed" && " bg-[#666666]"} ${status === "Pending" && " bg-[#FFB330]"}`}
									>
										<p>{status}</p>
									</div>
								))}
						</div>
					)}
				</div>
			</div>
			<div className="w-full flex flex-row mb-[40px] mt-[40px]  items-center justify-between px-4 ">
				<div className="flex flex-col w-[370px]">
					<div className="text-[20px] text-eccblue border-b border-b-[#c5c5c5]">
						<p>Product Category</p>
					</div>
					<div className="">
						<p>{complaint.productCategory}</p>
					</div>
				</div>

				<div className="flex flex-col w-[370px]">
					<div className="text-[20px] text-eccblue border-b border-b-[#c5c5c5]">
						<p>Where Did The Transaction Happen</p>
					</div>
					<div className="">
						<p>{complaint.transactionLocation}</p>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-row mb-[40px]  items-center justify-between px-4 ">
				<div className="flex flex-col w-[370px]">
					<div className="text-[20px] text-eccblue border-b border-b-[#c5c5c5]">
						<p>Title Of Complaint</p>
					</div>
					<div className="">
						<p>{complaint.title}</p>
					</div>
				</div>

				<div className="flex flex-col w-[370px]">
					<div className="text-[20px] text-eccblue border-b border-b-[#c5c5c5]">
						<p>Total Amount Lost </p>
					</div>
					<div className="">
						<p>{complaint.amountLost}</p>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-row  mb-[40px] items-center justify-between px-4 ">
				<div className="flex flex-col w-[370px]  ">
					<div className="border-b border-b-[#c5c5c5] text-[20px] text-eccblue">
						<p>Company's/ Brands Name</p>
					</div>
					<div className="">{complaint.companyName}</div>
				</div>

				<div className="flex flex-col w-[370px]  ">
					<div className="border-b border-b-[#c5c5c5] text-[20px] text-eccblue">
						<p>Company's/ Brands Social Media Handle</p>
					</div>
					<div className="">
						<p>{complaint.socialMediaHandle}</p>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-row  mb-[40px] items-center justify-between px-4 ">
				<div className="flex flex-col w-full   ">
					<div className="border-b w-[370px] border-b-[#c5c5c5] text-[20px] text-eccblue">
						<p>Company's/ Brands Name</p>
					</div>
					<div className="">{complaint.description}</div>
				</div>
			</div>
		</div>
	);
};

export default ComplaintDetails;