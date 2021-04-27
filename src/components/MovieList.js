import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	
	
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container flex-wrap justify-content-start m-3'>
					<img src={movie.Poster} alt={movie.title}></img>
					<div className="movie-info">
						<h4>{movie.Title}</h4>
						
						<span>{movie.Year}</span>
					</div>
					
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;