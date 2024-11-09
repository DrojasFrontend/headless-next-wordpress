import React from "react";
import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./CardsBigSmall.module.scss";
let cx = className.bind(styles);

import { Container } from "@/components/layout/Container";

export default function CardsBigSmall({ data }) {
	const { titulo, descripcion, targetas } = data;
	return (
		<section className="CardsBigSmall">
			<div className={cx(["component"])}>
				<Container>
					<div className="container">
						<div className={cx(["title"])}>
							<h2 className={cx(["heading--40", "color--primary"])}>
								{titulo}
							</h2>
							<div
								className="heading--16 color--gray"
								dangerouslySetInnerHTML={{ __html: descripcion }}
							/>
						</div>
						<div className={cx("grid")}>
							{targetas.map((targeta, index) => (
								<div
									key={index}
									className={cx("card", { gridColumn: targeta.columnas === 2 })}
								>
									<Image
										src={targeta?.imagen?.mediaItemUrl}
                    fill
                    loading="lazy"
                    object-fit="cover"
                    alt={targeta?.imagen?.altText || ""}
										title={targeta?.imagen?.title}
                    quality={75}
									/>

									<div className={cx(["copy"])}>
										<h3
											className={cx(["heading", "heading--24", "color--white"])}
										>
											{targeta?.titulo}
										</h3>
										{targeta?.cta?.url && (
											<Link
												href={targeta?.cta?.url}
												className="button button--white"
											>
												{targeta?.cta?.title}
											</Link>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}
