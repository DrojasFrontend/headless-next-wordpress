"use client";

import Image from "next/image";
import className from "classnames/bind";
import styles from "./HeroImage.module.scss";
const cx = className.bind(styles);

import { useDebugData } from "@/lib/hooks/useDebugData";

export default function HeroImage({ data }) {
	useDebugData(data, "HeroImage");
	return (
		<section className={cx(["component"])}>
			<div className={cx(["bckg"])}>
				<Image
					src={data?.imagen?.mediaItemUrl}
					fill={true}
					object-fit="cover"
					priority={true}
					quality={100}
					className={cx("image")}
					alt={data?.imagen?.altText || ""}
				/>
				<h1 className={cx(["heading", "heading--54", "color--white"])}>
					{data?.titulo}
				</h1>
			</div>
		</section>
	);
}
