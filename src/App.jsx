import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import RatingCard from "./components/RatingCard";

const API_KEY = "33d606d8a8a81c3bd341d1ebdbdcf6cb";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [ratings, setRatings] = useState(() => JSON.parse(localStorage.getItem("freshTomates") || "{}"));

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then(r => r.json()).then(d => setFilmes(d.results));
  }, []);

  useEffect(() => { localStorage.setItem("freshTomates", JSON.stringify(ratings)) }, [ratings]);

  if (selected) {
    return <RatingCard movie={selected} initialRating={ratings[selected.id] || 0} onSubmit={(nota) => {
      setRatings({ ...ratings, [selected.id]: nota });
      setSelected(null);
    }} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-8">
      <h1 className="text-white text-[32px] font-black">fresh<span className="text-orange-500">Tomates</span></h1>
      <div className="grid grid-cols-[repeat(3,320px)] gap-6 mt-8">
        {filmes.map(m => (
          <MovieCard key={m.id} movie={{ id: m.id, title: m.title, year: m.release_date?.slice(0, 4), genre: 'Filme', poster: `${IMG_URL}${m.poster_path}` }} userRating={ratings[m.id]} onRate={setSelected} />
        ))}
      </div>
    </div>
  );
}