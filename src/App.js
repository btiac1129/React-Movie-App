import React, { Component } from "react";
import "./App.css";
import Movie from './Movie';

const movieTitles = [
    "Matrix",
    "Full Metal Jacket",
    "Oldboy",
    "Star Wars"
]

const movieImages = [
    "https://img1.looper.com/img/gallery/movies-you-should-watch-if-you-like-the-matrix/intro-1585252166.jpg",
    "https://resizing.flixster.com/IHsuuyne87RTC_G_StnIEL5KVng=/206x305/v1.bTsxMTE2ODAyOTtqOzE4NDg5OzEyMDA7ODAwOzEyMDA",
    "https://lh3.googleusercontent.com/proxy/ghpKgEjT8hIcJOjYIs0BVgk7PUvv8qKHP6_ZE5y1dsymd1E4nW53MjRw4tdEb9cqoyDvEuNvdwqE-_ZA_GM3ZmkQVrZVcPuDQ7V-FYDfwnX_FWSPePQU_W-NsnIyrznIn5rSSrNUalfuXj6gjWDtasKa10ANpZyBYEpt9aw",
    "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
]

const Movies = [
    {
        title: "Matrix",
        poster: "https://img1.looper.com/img/gallery/movies-you-should-watch-if-you-like-the-matrix/intro-1585252166.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://resizing.flixster.com/IHsuuyne87RTC_G_StnIEL5KVng=/206x305/v1.bTsxMTE2ODAyOTtqOzE4NDg5OzEyMDA7ODAwOzEyMDA"

    },
    {
        title: "Oldboy",
        poster: "https://lh3.googleusercontent.com/proxy/ghpKgEjT8hIcJOjYIs0BVgk7PUvv8qKHP6_ZE5y1dsymd1E4nW53MjRw4tdEb9cqoyDvEuNvdwqE-_ZA_GM3ZmkQVrZVcPuDQ7V-FYDfwnX_FWSPePQU_W-NsnIyrznIn5rSSrNUalfuXj6gjWDtasKa10ANpZyBYEpt9aw"
    },
    {
        title: "Star Wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={movieTitles[0]} poster={movieImages[0]} />
                <Movie title={movieTitles[1]} poster={movieImages[1]} />
                <Movie title={movieTitles[2]} poster={movieImages[2]} />
                <Movie title={movieTitles[3]} poster={movieImages[3]} />
            </div>
        );
    }
}

export default App;