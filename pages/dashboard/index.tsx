import type { NextPage } from "next";
import { useState, useEffect } from "react";
import DashboardCard from "../../Components/DashboardComponents/DashboardCard";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface User {
	firstName: string;
	lastName: string;
	_id: string;
	iat: number;
}

const index: NextPage = (props) => {
	const [cookie, setCookie] = useCookies(["user"]);
	const [user, setUser] = useState<User>({
		firstName: "",
		lastName: "",
		_id: "",
		iat: 0,
	});
	const router = useRouter();
	useEffect(() => {
		if (!cookie.user) router.replace("/login");
		else {
			setUser(cookie.user);
			console.log(cookie.user);
		}
	}, []);

	return (
		<div>
			<NavWrapper>
				<div className="pt-0">
					<div className="hidden lg:block">
						<div className="bg-[#020D1B] w-full h-[255px] mt-10 rounded-[20px] flex flex-row relative">
							<div className="text-white pl-[43px] py-[58.5px]">
								<p className="text-[40px] leading-[60px] font-[600]">Hi, {user.firstName}</p>
								<p className="text-[24px] leading-[36px] font-[600] w-[503px]">
									Vendor don do you strong thing again? <br /> We are ready to listen to your complaints
								</p>
							</div>
							<div>
								<img
									src="./images/man-freaked-out.png"
									className="absolute right-[21.28px] -top-[30.54px] h-[285.54px] w-[377.72px]"
									alt=""
								/>
							</div>
						</div>
						<div className="mt-[59px]">
							<DashboardCard />
						</div>
					</div>
					<div className="lg:hidden mt-6">
						<div className="flex flex-col items-center">
							<div className="bg-black w-[90%] mt-12 rounded-[10px] py-8 h-[120px] flex flex-row justify-bewtween items-center">
								<div className="flex flex-col text-white pl-4">
									<p className="text-[16px]">Hi, {user.firstName}</p>
									<p className="text-[12px]">Vendor don do you strong thing again?</p>
									<p className="text-[12px]">We are ready to listen to your</p>
									<p className="text-[12px]">complaints</p>
								</div>

								<img
									className="w-full h-full"
									src="./images/man-freaked-out.png"
									alt=""
								/>
							</div>
						</div>
						<div className="mt-[59px]">
							<DashboardCard />
						</div>
					</div>
				</div>
			</NavWrapper>
		</div>
	);
};

export default index;
