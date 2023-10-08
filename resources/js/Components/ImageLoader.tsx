import { useState, useEffect } from "react";

const useImageLoader = ({ src }: { src: string }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const image = new Image();

		const handleLoad = () => {
			setIsLoaded(true);
		};

		const handleError = () => {
			setIsError(true);
		};

		image.addEventListener("load", handleLoad);
		image.addEventListener("error", handleError);

		image.src = src;

		return () => {
			image.removeEventListener("load", handleLoad);
			image.removeEventListener("error", handleError);
		};
	}, [src]);

	return { isLoaded, isError };
};

export default useImageLoader;
