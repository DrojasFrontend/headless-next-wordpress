"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./CardsGrid.module.scss";
const cx = className.bind(styles);

import { Container } from "@/components/layout/Container";

const Slider = dynamic(() => import("react-slick"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});

const CardGrid = ({ data, className }) => {
	const { titulo, descripcion, targetas, cta } = data;

	const settings = {
		lazyLoad: true,
		dots: false,
		arrows: false,
		touchMove: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					touchMove: true,
					infinite: true,
					centerMode: true,
					centerPadding: "20px",
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					touchMove: true,
					infinite: true,
					centerMode: true,
					centerPadding: "20px",
				},
			},
		],
	};

	if (!targetas?.length) {
		return <p>No hay tarjetas disponibles.</p>;
	}

	return (
		<section className="CardsGrid">
			<div className={cx("component")}>
				<Container>
					<div className={cx(["grid", className])}>
						<h2 className={cx(["heading", "heading--40", "color--primary"])}>
							{titulo}
						</h2>
						<div
							className="heading--16 color--gray"
							dangerouslySetInnerHTML={{ __html: descripcion }}
						/>
					</div>
				</Container>

				<div className={cx("container--slick")}>
					<Suspense fallback={<div>Loading...</div>}>
						<Slider {...settings}>
							{targetas.map((targeta, index) => (
								<div key={index} className={cx("card")}>
									<Image
										src={targeta?.imagen?.mediaItemUrl}
										width={775}
										height={917}
										loading="lazy"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										alt={targeta?.imagen?.altText || ""}
										title={targeta?.imagen?.title}
										quality={75}
									/>
									<div className={cx("copy")}>
										<h3 className="heading--24 color--white">
											{targeta?.titulo}
										</h3>
										<div
											className="heading--16 color--white"
											dangerouslySetInnerHTML={{ __html: targeta?.detalle }}
										/>
									</div>
								</div>
							))}
						</Slider>

						{cta && (
							<Link
								href={cta.url}
								className="button button--primary button--center"
								target={cta.target}
							>
								{cta.title}
							</Link>
						)}
					</Suspense>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
