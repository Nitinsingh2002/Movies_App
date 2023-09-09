import React from 'react';
import Movielist from './movieList';
import Navbar from './navbar';
import movies from './moviesData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  increment = (num) => {

    const { movies } = this.state
    const movieid = movies.indexOf(num);

    if (movies[movieid].star_count >= 5) {
      return;
    }

    movies[movieid].star_count += 0.5


    this.setState({
      movies: movies
    })
  }


  star_decrement = (num) => {
    const { movies } = this.state
    const movieid = movies.indexOf(num);

    if (movies[movieid].star_count <= 0) {
      return;
    }
    movies[movieid].star_count -= 0.5;

    this.setState({
      movies: movies
    })
  }

  handlefav = (num) => {
    const { movies } = this.state;
    const movieid = movies.indexOf(num);

    movies[movieid].fav = !movies[movieid].fav
    this.setState({
      movies: movies
    })
  }

  handlecart = (num) => {

    let { movies,cartCount } = this.state;
    const movieid = movies.indexOf(num);

    movies[movieid].isInCart = !movies[movieid].isInCart
    console.log(movies[movieid].isInCart)

    if (movies[movieid].isInCart) {
      cartCount++;
    }
    else {
      cartCount = cartCount - 1;
    }

    this.setState({
      movies: movies,
      cartCount: cartCount
    })

    console.log(cartCount)
  }

  render() {
    const { movies } = this.state
    return (
      <>
        <Navbar  cart={this.state.cartCount} />


        <Movielist movies={movies}
          add_star={this.increment}
          substract_star={this.star_decrement}
          fav_btn={this.handlefav}
          cart_btn={this.handlecart} />
      </>
    );
  }
}

export default App;
