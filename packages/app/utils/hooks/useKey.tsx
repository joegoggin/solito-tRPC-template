import { useEffect, useRef } from "react";

export const useKey = (
	key: string,
	cb: (event: KeyboardEvent) => void,
	isKeydown = false
) => {
	const callBackRef = useRef(cb);

	useEffect(() => {
		callBackRef.current = cb;
	});

	useEffect(() => {
		const handle = (event: KeyboardEvent) => {
			if (event.code === key) {
				callBackRef.current(event);
			}

			if (key === "all") {
				callBackRef.current(event);
			}
		};

		if (isKeydown) {
			window.addEventListener("keydown", handle);
			return () => window.removeEventListener("keydown", handle);
		} else {
			document.addEventListener("keypress", handle);
			return () => document.removeEventListener("keypress", handle);
		}
	});
};
