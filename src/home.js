import { useEffect, useState } from 'react';

function Home() {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000); // 3 seconds before switching to second message
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-20px); }
                }
                .welcome-text {
                    font-size: 3rem;
                    color: black;
                    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
                    animation: fadeIn 1.5s ease-out, fadeOut 1.5s ease-in 1.5s;
                }
                .secondary-text {
                    font-size: 2.7rem;
                    color: black;
                    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
                    animation: fadeIn 1.5s ease-out;
                }
                .logo-image {
                    margin-top: 2rem;
                    max-width: 200px;
                    width: 80%;
                    animation: fadeIn 1.5s ease-out;
                }
            `}</style>
            <div
                className="homepage"
                style={{
                    backgroundImage: "url('/background.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px",
                    boxSizing: "border-box"
                }}
            >
                {showWelcome ? (
                    <h1 className="welcome-text">Welcome</h1>
                ) : (
                    <h2 className="secondary-text">
                        Use our menu options above to learn more about us or schedule an appointment
                    </h2>
                )}
                <img src="/nobackground.png" alt="Mitch Logo" className="logo-image" />
            </div>
        </>
    );
}

export default Home;