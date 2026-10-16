import { useState } from "react";

export default function RatingCard({ movie, initialRating = 0, onSubmit }) {
  const [nota, setNota] = useState(initialRating);
  const [submitted, setSubmitted] = useState(initialRating > 0);

  function handleSubmit() {
    if (nota === 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 w-full max-w-sm rounded-3xl p-8 flex flex-col items-center text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/frontendmentorio/interactive-rating-component@main/images/illustration-thank-you.svg"
            alt=""
            className="w-40"
          />

          <div className="bg-slate-700 text-orange-500 rounded-full px-4 py-1 text-sm mt-8">
            Você selecionou a nota {nota} de 5
          </div>

          <h2 className="text-white text-[28px] font-bold mt-6">Obrigado!</h2>
          <p className="text-slate-400 text-[15px] leading-6 mt-3">
             Agradecemos por dedicar seu tempo para avaliar <span className="text-white">{movie.title}</span>. Se precisar, não hesite em entrar em contato!
          </p>

          <div className="flex gap-3 w-full mt-8">
            <button
              onClick={() => setSubmitted(false)}
              className="flex-1 bg-slate-700 text-white rounded-full py-3 font-bold text-sm hover:bg-slate-600 transition"
            >
              AVALIAR DE NOVO
            </button>
            <button
              onClick={() => onSubmit(nota)}
              className="flex-1 bg-orange-500 text-white rounded-full py-3 font-bold text-sm hover:bg-white hover:text-orange-500 transition"
            >
              VOLTAR
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 w-full max-w-sm rounded-3xl p-8">

        <div className="flex gap-4 mb-6">
          <img src={movie.poster} alt={movie.title} className="w-16 h-24 rounded-lg object-cover" />
          <div>
            <h2 className="text-white font-bold leading-tight">{movie.title}</h2>
            <p className="text-slate-400 text-xs mt-1">{movie.year} • {movie.genre}</p>
          </div>
        </div>

        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
          <span className="text-orange-500 text-xl">★</span>
        </div>

        <h1 className="text-white text-2xl font-bold mt-6">How did we do?</h1>
        <p className="text-slate-400 text-sm leading-6 mt-2">
          Deixe sua avaliação para {movie.title}. 
        </p>

        <div className="flex justify-between mt-6">
          {[1,2,3,4,5].map(n => (
            <button
              key={n}
              onClick={() => setNota(n)}
              className={`w-12 h-12 rounded-full font-bold transition
                ${nota === n? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'}`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full mt-7 rounded-full py-3 font-bold tracking-widest transition
            ${nota? 'bg-orange-500 text-white hover:bg-white hover:text-orange-500' : 'bg-slate-700 text-slate-500'}`}
        >
          ENVIAR
        </button>
      </div>
    </div>
  );
}