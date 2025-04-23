import { useEffect, useState } from "react";

async function fetchMovieList() {
  const response = await fetch(`https://swapi.dev/api/films/?format=json`);
  const data = await response.json();
  return data;
}

async function fetchMovieData(movieId) {
  const response = await fetch(
    `https://swapi.dev/api/films/${movieId}/?format=json`
  );
  const data = await response.json();
  return data;
}

export function StarWars() {
  const [movieId, setMovieId] = useState("1");
  const [data, setData] = useState(null);

  // TODO: write an useEffect hook that will call the Star Wars API every time the movie ID changes
  // and updates the `data` state value with the result of the API call
  // You can use the `fetchMovieData` helper to call the API

  useEffect(() => {
    let flag = false;
    setData(null);

    fetchMovieData(movieId).then((responseData) => {
      if (!flag){
        setData(responseData);
      }
    });

    return() => {
      flag = true;
    };

  }, [movieId]);

  return (
    <div>
      <h1>Star Wars API</h1>
      <select
        value={movieId}
        onChange={(e) => {
          setMovieId(e.target.value);
        }}
      >
        <option value="1">A New Hope</option>
        <option value="2">Empire Strikes Back</option>
        <option value="3">Return of Jedi</option>
      </select>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p><strong>Episode:</strong> {data.episode_id}</p>
          <p><strong>Opening Crawl:</strong> {data.opening_crawl}</p>
          <p><strong>Director:</strong> {data.director}</p>
          <p><strong>Producer:</strong> {data.producer}</p>
          <p><strong>Release Date:</strong> {data.release_date}</p>
        </div>
      )}
    </div>
  );
}
