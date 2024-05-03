import React, { useState } from 'react';
import { type SocialLinkItem } from './components/SocialLinks';
import { Header, type NavLink } from './components/Header';
import { type FeatureCardProps } from './components/FeatureCard';
import { Hero } from './sections/Hero';
import { PoweredBy } from './sections/PoweredBy';
import { Features } from './sections/Features';
import { Supporting, type SupportingItem } from './sections/Supporting';
import { BackedBy } from './components/BackedBy';
import { Footer } from './components/Footer';
import { Card1, Card2 } from './components/DomainCard';
import { CaretLeft } from './components/icons/CaretLeft';
import { CaretRight } from './components/icons/CaretRight';
import { Message1, Message2 } from './components/AssetsMessage';
import clsx from 'clsx';
import { List as FaqList, FaqComponentProps } from './components/FAQ';

export type LandingPageProps = {
	navLinks: NavLink[];
	socialLinks: SocialLinkItem[];
	onClickLaunchDApp: () => void;
	hero: React.ReactNode;
	features: FeatureCardProps[];
	supportings: SupportingItem[];
	faqComponentProps: FaqComponentProps;
};

export const LandingPage = ({
	navLinks,
	socialLinks,
	onClickLaunchDApp,
	hero = 'Trading domains on chain.',
	features = [],
	supportings = [],
	faqComponentProps,
}: LandingPageProps) => {
	const [prev, setPrev] = useState(0);
	return (
		<div className="relative w-full flex flex-col justify-center items-center bg-black-1000">
			<div className="max-w-[1400px] w-full md:py-9 md:px-4 sticky top-0 z-50">
				<Header
					navLinks={navLinks}
					socialLinks={socialLinks}
					onClickLaunchDApp={onClickLaunchDApp}
				/>
			</div>
			<div className="max-w-[1400px] w-full overflow-x-scroll">
				<Hero socialLinks={socialLinks} className="">
					{hero}
				</Hero>
				<div className="w-full flex flex-col justify-center items-center px-6">
					<PoweredBy className="mt-12 mb-24 md:mb-32" />
					<Features items={features} className="mb-16" />
					<Supporting items={supportings} className="mb-24 md:mb-46" />
					<div className="w-full md:w-[1200px] h-[650px] md:h-[720px] flex flex-col justify-between">
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
															className={clsx(
																prev == 1 && 'fill-[#48E59B]',
															)}
														/>
													</button>
													<button onClick={() => setPrev(1)}>
														<CaretRight
															className={clsx(
																prev == 1 && 'fill-[#797979]',
															)}
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
					{/* <Footer socialLinks={{}} /> */}
				</div>
			</div>
		</div>
	);
};
