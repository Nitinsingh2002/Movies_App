
import Moviecard from "./moviecard";



function Movielist(props) {







    const { movies, add_star, substract_star, fav_btn, cart_btn } =props


    return (
        <>
            {/* <Moviecard movies={this.state} /> */}
            {movies.map((num) => <Moviecard
                movies={num}
                add_star={add_star}
                substract_star={substract_star}
                fav_btn={fav_btn}
                cart_btn={cart_btn}

                key={num.id} />
            )}

        </>
    )
}



export default Movielist;




