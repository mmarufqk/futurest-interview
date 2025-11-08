interface Anime {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    title: string;
    episodes: number;
}

interface AnimeApiResponse {
    data: Anime[];
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        current_page: number;
        items: {
            count: number;
            total: number;
            per_page: number;
        };
    };
}

async function getTopAnime(): Promise<Anime[]> {
    const res = await fetch("https://api.jikan.moe/v4/top/anime", {
        next: {
            revalidate: 3600,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch anime data");
    }

    const data: AnimeApiResponse = await res.json();
    return data.data.slice(0, 8);
}

function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 scale-95">
            <div className="aspect-[3/4] relative">
                <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay untuk teks */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1E1E2E] to-transparent"></div>

                {/* Teks judul dan eps di atas gradient */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="font-semibold text-white line-clamp-2 mb-1 text-sm">
                        {anime.title}
                    </h3>
                    <p className="text-xs text-gray-300">
                        Eps: {anime.episodes || "TBA"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default async function AnimePage() {
    let animeList: Anime[] = [];

    try {
        animeList = await getTopAnime();
    } catch (error) {
        console.error("Error fetching anime:", error);
    }

    return (
        <div className="min-h-screen bg-[#1E1E2E] py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    TOP ANIME TODAY
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>

                {animeList.length === 0 && (
                    <div className="text-center text-gray-400 mt-8">
                        Tidak ada data anime yang ditemukan
                    </div>
                )}
            </div>
        </div>
    );
}
