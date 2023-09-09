
import './styles.css';

function Moviecard(props) {




    const { add_star, movies, substract_star, fav_btn, cart_btn } = props;
    const { title, plot, price, rating, star_count, fav, isInCart,poster } = props.movies;
    return (
        <div className="main">

            <div className="movie-card">

                <div className="left">
                    <img alt="poster" src={poster}></img>
                </div>

                <div className="right">
                    <div className="title">
                        {title}
                    </div>

                    <div className="plot">
                        {plot}
                    </div>

                    <div className="price">
                        Rs{price}
                    </div>
                    {/* fotter start */}

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">

                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="decrease"
                                onClick={() => { substract_star(movies) }} />
                            <img src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
                                alt="star" className="stars" />


                            {/* binding this */}
                            {/* <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                alt="increase" onClick={this.increment.bind(this)} /> */}

                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                alt="increase" onClick={() => { add_star(movies) }} />
                            <span>{star_count}</span>

                        </div>

                        {fav ? <button className="unfavourite-btn" onClick={() => { fav_btn(movies) }}>Un-Favorites</button> :
                            <button className="favourite-btn" onClick={() => { fav_btn(movies) }}>Favorites</button>}




                        <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={() => { cart_btn(movies) }}>
                            {isInCart ? "Remove Cart" : "Add to Cart"}

                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}



export default Moviecard;