import { createElement } from "react";
import { Link, useLocation } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { gutter } from "@/lib/layout";

const NotFoundScreen = () => {
	const { pathname } = useLocation();

	return createElement(
		"div",
		{ className: `mt-16 ${gutter}` },
		createElement(
			"p",
			{ className: "text-sm tabular-nums text-muted-foreground sm:mt-2 sm:text-right" },
			"404",
		),
		createElement(
			"div",
			{ className: "min-w-0 max-w-sm" },
			createElement(
				"h1",
				{ className: "font-reading text-[1.75rem] leading-[1.15] tracking-[0.01em]" },
				"This page doesn't exist",
			),
			createElement(
				"p",
				{ className: "mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground" },
				"Nothing is routed at ",
				createElement("code", { className: "text-foreground" }, pathname),
				".",
			),
			createElement(
				"div",
				{ className: "mt-6" },
				createElement(
					Link,
					{ to: "/", className: buttonVariants({ variant: "outline" }) },
					"Browse all posts",
				),
			),
		),
	);
};
export default NotFoundScreen;