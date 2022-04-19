


// import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


// import { api } from '../services/api';


// interface GenreResponseProps {
//   id: number;
//   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
//   title: string;
// }

// interface MovieProps {
//   imdbID: string;
//   Title: string;
//   Poster: string;
//   Ratings: Array<{
//     Source: string;
//     Value: string;
//   }>;
//   Runtime: string;
// }

interface ContentProps {
  selectedGenreId: number;
}


export function Content({}) {
  const [movies, setMovies] = useState<MovieProps[]>([]);


  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);

  // const [selectedGenreId, setSelectedGenreId] = useState(1);

  // const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  // const [movies, setMovies] = useState<MovieProps[]>([]);
  // const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  // useEffect(() => {
  //   api.get<GenreResponseProps[]>('genres').then(response => {
  //     setGenres(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
  //     setMovies(response.data);
  //   });

  //   api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
  //     setSelectedGenre(response.data);
  //   })
  // }, [selectedGenreId]);

  // function handleClickButton(id: number) {
  //   setSelectedGenreId(id);
  // }

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}