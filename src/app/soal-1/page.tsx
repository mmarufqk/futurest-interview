"use client";

export default function Soal1() {
    return (
        <div className="min-h-screen bg-[#1e1e2e]">
            {/* Black Left Sidebar - Full Height */}
            <div className="fixed left-0 top-0 w-12 h-screen bg-[#11111B] z-0"></div>

            {/* Desktop Layout */}
            <div className="hidden md:block min-h-screen relative z-10">
                {/* Purple Circle in Orange Square - Top Left */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#FAB387] flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#CBA6F7] rounded-full"></div>
                </div>

                {/* Orange Square - Top Right */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FAB387]"></div>

                {/* Orange Square - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#FAB387]"></div>

                {/* Orange Square - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FAB387]"></div>

                {/* Small Orange Square - Top Center */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FAB387]"></div>

                {/* Small Orange Square - Bottom Center */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FAB387]"></div>

                {/* Center Pattern - 5 Orange Squares in Pentagon Formation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center space-y-3">
                        {/* Top Row - 3 squares */}
                        <div className="flex space-x-3">
                            <div className="w-12 h-12 bg-[#FAB387]"></div>
                            <div className="w-12 h-12 bg-[#FAB387]"></div>
                            <div className="w-12 h-12 bg-[#FAB387]"></div>
                        </div>
                        {/* Bottom Row - 2 squares (aligned with gap between top squares) */}
                        <div className="flex space-x-3">
                            <div className="w-12 h-12 bg-[#FAB387]"></div>
                            <div className="w-12 h-12 bg-[#FAB387]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden min-h-screen relative z-10">
                {/* Purple Circle in Orange Square - Top Left */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#FAB387] flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#CBA6F7] rounded-full"></div>
                </div>

                {/* Orange Square - Top Right */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FAB387]"></div>

                {/* Orange Square - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FAB387]"></div>

                {/* Orange Square - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FAB387]"></div>

                {/* Small Orange Square - Top Center */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FAB387]"></div>

                {/* Small Orange Square - Bottom Center */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FAB387]"></div>

                {/* Center Pattern - 5 Orange Squares in Vertical Formation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 bg-[#FAB387]"></div>
                        <div className="w-12 h-12 bg-[#FAB387]"></div>
                        <div className="w-12 h-12 bg-[#FAB387]"></div>
                        <div className="w-12 h-12 bg-[#FAB387]"></div>
                        <div className="w-12 h-12 bg-[#FAB387]"></div>
                    </div>
                </div>
            </div>

            {/* Back Button
            <div className="fixed bottom-6 left-6 z-20">
                <a
                    href="/"
                    className="bg-[#FAB387] text-[#1e1e2e] font-semibold py-3 px-6 hover:bg-[#e69c6d] transition-colors shadow-lg block"
                >
                    Kembali ke Home
                </a>
            </div> */}
        </div>
    );
}
