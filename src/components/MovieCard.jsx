export default function MovieCard({ movie, onRate, userRating }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden w-[320px]">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-450px object-cover object-top"
      />
      <div className="p-3">
        <h3 className="text-white text-sm font-bold truncate">{movie.title}</h3>
        <p className="text-slate-400 text-xs mt-1">{movie.year} • {movie.genre}</p>
        <button
          onClick={() => onRate(movie)}
          className="mt-3 w-full bg-slate-700 text-white p-2 rounded-lg hover:bg-orange-500 transition"
        >
          {userRating? `★ ${userRating} - Avaliar` : "Avaliar"}
        </button>
      </div>
    </div>
  );
}