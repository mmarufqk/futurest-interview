"use client";

export default function Soal3() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Sun - Top Right */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-400 rounded-full shadow-lg"></div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-end">
                <div className="relative h-20">
                    <div className="flex justify-center space-x-8 absolute bottom-0 w-full">
                        <div className="w-16 bg-blue-500 rounded-t-full h-12"></div>
                        <div className="w-16 bg-blue-500 rounded-t-full h-16"></div>
                        <div className="w-16 bg-blue-500 rounded-t-full h-10"></div>
                        <div className="w-16 bg-blue-500 rounded-t-full h-14"></div>
                        <div className="w-16 bg-blue-500 rounded-t-full h-11"></div>
                    </div>
                </div>

                <div className="w-[60%] h-8 bg-amber-900 self-center mb-6 rounded-t-lg relative z-10"></div>
            </div>
        </div>
    );
}
