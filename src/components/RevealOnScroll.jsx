import React, { useEffect, useRef } from 'react';

function RevealOnScroll({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add('visible');
            } else {
                ref.current.classList.remove('visible'); // Ensures the effect works when scrolling up
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);
        
        return () => {
            if (ref.current) observer.unobserve(ref.current); 
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}

export default RevealOnScroll;