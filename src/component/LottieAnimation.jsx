import React from 'react';

const LottieAnimation = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "path-to-lottie-js-file";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (typeof window.lottie !== "undefined") {
                window.lottie.loadAnimation({
                    container: document.getElementById('lottie'),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: null // Replace with your animation data or path
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{
            backgroundColor: 'black',
            margin: '0',
            height: '100%',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div
                id="lottie"
                style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    overflow: 'hidden',
                    transform: 'translate3d(0,0,0)',
                    textAlign: 'center',
                    opacity: 1,
                }}
            ></div>
        </div>
    );
};

export default LottieAnimation;
