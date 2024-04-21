import React, { useState } from 'react';
import { AsterismIcon } from '../../components/Core/icons/Asterism';
import { Header } from './components/Header';
import { SolidButton } from './components/SolidButton';
import { Subscription } from './components/Subscription';
import { PoweredBy } from './components/PoweredBy';
import { Grid as FeaturedCardGrid, FeaturedCardGridProps } from './components/FeaturedCard';
import { ProudlySupporting } from './components/ProudlySupporting';
import { BackedBy } from './components/BackedBy';
import { Footer } from './components/Footer';
import { Card1, Card2 } from './components/DomainCard';
import { CaretLeft } from './components/icons/CaretLeft';
import { CaretRight } from './components/icons/CaretRight';
import { Message1, Message2 } from './components/AssetsMessage';
import clsx from 'clsx';
import { List as FaqList, FaqComponentProps } from './components/Faq';

export type LandingPageProps = {
	featuredCardProps: FeaturedCardGridProps;
	faqComponentProps: FaqComponentProps;
};

export const LandingPage = ({ featuredCardProps, faqComponentProps }: LandingPageProps) => {
	const [prev, setPrev] = useState(0);
	return (
		<div className="w-full bg-black-1000 flex flex-col justify-center items-center gap-[100px] pt-10">
			<div className="hidden md:flex w-full h-screen flex-col justify-between items-center pb-10">
				<Header dAppHref={'#'} socialLinks={{}} />
				<div className="w-full flex flex-col justify-between items-center h-[50vh]">
					<h1 className="text-white tracking-wider text-[50px] md:text-[64px] font-bold font-third ">
						Trading domains on chain.
						
					</h1>
					<div className="relative flex gap-5">
						<Subscription />
						<div>
							<SolidButton>I'm an Investor</SolidButton>
						</div>
					</div>
				</div>
			</div>
			<div className="flex md:hidden w-full h-screen flex-col justify-between items-center pb-10">
				<div className="w-full flex flex-col justify-between items-center h-[50vh]">
					<h1 className="text-white tracking-wider text-[50px] md:text-[64px] font-bold font-third ">
						Trading any domains on-chain <AsterismIcon className="text-[#FEF55680] stroke-[0.01]" />,
						
					</h1>
					<div className="text-primary text-sm font-['Roboto_Slab']">100x more liquid, get paid in secs.</div>
					<div className="relative flex gap-5">
						<Subscription />
						<div>
							<SolidButton>I'm an Investor</SolidButton>
						</div>
					</div>
				</div>
			</div>
			<PoweredBy />
			<FeaturedCardGrid {...featuredCardProps} />
			<ProudlySupporting />
			<div className=" w-full md:w-[1200px] h-[650px] md:h-[720px] flex flex-col justify-between ">
				<h3 className="font-bold tracking-wider font-primary text-primary-500 text-2xl md:text-3xl self-start ">
					Our Assets
				</h3>
				<div className="w-full h-[568px] flex gap-[100px] justify-center">
					{Array(1)
						.fill(0)
						.map((_, idx) => (
							<>
								{prev === idx ? <Card1 /> : <Card2 />}

								<div className="w-[408px] h-[400px] md:w-[508px] md:h-[500px] flex justify-start items-start">
									<div className="w-full h-[329px] md:h-[429px] flex flex-col justify-between items-end ">
										<div className="w-[96px] h-[48px] px-4 flex justify-between items-center ">
											<button onClick={() => setPrev(0)}>
												<CaretLeft
													className={clsx(prev == 1 && 'fill-[#48E59B]')}
												/>
											</button>
											<button onClick={() => setPrev(1)}>
												<CaretRight
													className={clsx(prev == 1 && 'fill-[#797979]')}
												/>
											</button>
										</div>
										{prev === idx ? <Message1 /> : <Message2 />}
									</div>
								</div>
							</>
						))}
				</div>
			</div>
			<BackedBy />
			<div className="relative w-full md:w-[1200px] flex flex-col justify-center items-center gap-[40px] md:gap-[64px] ">
				<h3 className="font-bold text-3xl text-primary-500 tracking-widest self-start ">
					FAQs
				</h3>
				<div className="w-full h-auto flex flex-col justify-center items-center">
					<FaqList {...faqComponentProps} />
				</div>
			</div>
			<Footer socialLinks={{}} />
		</div>
	);
};
