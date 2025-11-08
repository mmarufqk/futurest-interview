"use client";

export default function Soal3() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="absolute top-8 right-8 w-32 h-32 bg-yellow-400 rounded-full shadow-lg"></div>

            <div className="flex-1 flex flex-col justify-end">
                <div className="relative h-screen">
                    <div className="flex justify-between absolute bottom-0 w-full z-0 px-4">
                        <div className="relative">
                            <div className="w-56 h-56 bg-blue-500"></div>
                            <div className="absolute -top-40 left-0 w-56 h-56 bg-white rounded-b-full"></div>
                        </div>
                        <div className="relative">
                            <div className="w-56 h-64 bg-blue-500"></div>
                            <div className="absolute -top-48 left-0 w-56 h-64 bg-white rounded-b-full"></div>
                        </div>
                        <div className="relative">
                            <div className="w-56 h-48 bg-blue-500"></div>
                            <div className="absolute -top-32 left-0 w-56 h-48 bg-white rounded-b-full"></div>
                        </div>
                        <div className="relative">
                            <div className="w-56 h-60 bg-blue-500"></div>
                            <div className="absolute -top-44 left-0 w-56 h-60 bg-white rounded-b-full"></div>
                        </div>
                        <div className="relative">
                            <div className="w-56 h-52 bg-blue-500"></div>
                            <div className="absolute -top-36 left-0 w-56 h-52 bg-white rounded-b-full"></div>
                        </div>
                    </div>
                </div>

                {/* Brown Ground Line - paling depan, 20% dari bawah */}
                <div
                    className="w-[70%] h-20 bg-amber-900 self-center mb-20 rounded-t-xl fixed bottom-0 z-50"
                    style={{ bottom: "20%" }}
                ></div>
            </div>
        </div>
    );
}
