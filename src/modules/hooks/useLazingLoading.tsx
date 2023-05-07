import { useEffect, useRef, useState } from "react";

type ElementType = HTMLDivElement;

interface LazyLoadingReturn {
    show: boolean;
    element: React.RefObject<ElementType>;
}

export const useCustomLazyLoading = (): LazyLoadingReturn => {
    const [show, setShow] = useState(false);
    const element = useRef<ElementType>(null);

    useEffect(() => {
        Promise.resolve(
            //Si el navegador no posee interObserver, lo importamos dinamicamente y lo parcheamos sobre el objeto window.
            typeof window.IntersectionObserver !== "undefined"
                ? window.IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            if (element.current !== null) {
                const observer = new window.IntersectionObserver((entries) => {
                    const { isIntersecting } = entries[0]; // isIntesecting es un boolen que confirma cuando el elemento es observable
                    if (isIntersecting) {
                        setShow(true);
                        observer.disconnect(); // Dejamos de observar la ref del Article una vez renderizado.
                    }
                });
                // pasamos el elemento a observar en el viewport del usuario
                observer.observe(element.current);
            }
        });
    }, [element]);

    return { show, element };
};