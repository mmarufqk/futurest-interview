import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Futurerst Interview
                </h1>
                <div className="space-y-4">
                    <Link
                        href="/soal-1"
                        className="block w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-600 transition-colors"
                    >
                        Soal 1
                    </Link>
                    <Link
                        href="/soal-2"
                        className="block w-full bg-green-500 text-white py-3 px-6 rounded-lg text-center hover:bg-green-600 transition-colors"
                    >
                        Soal 2
                    </Link>
                    <Link
                        href="/soal-3"
                        className="block w-full bg-purple-500 text-white py-3 px-6 rounded-lg text-center hover:bg-purple-600 transition-colors"
                    >
                        Soal 3
                    </Link>
                </div>
            </div>
        </div>
    );
}
