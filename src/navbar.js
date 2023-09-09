
import styled from "styled-components"

// style using styled componenet

const Nav = styled.div`
         width: 100%;
         height: 60px;

         background: linear-gradient(70deg, #00008B , #87CEEB);
         display: flex;
         justify-content: space-between;
         align-items:center;
         position:relative;
`
const Title = styled.div`
         font-size:30px;
         color:white;
         font-weight: 600; 
         text-transform: uppercase;
         margin-left:20px;
`
const CartContainer = styled.div`
         position:relative;
         cursor: pointer;
         margin-right: 20px;
`
const CartIcon = styled.img`
         height: 48px;
         margin-right: 20px;
`
const CartCount = styled.span`
background: ${(props) => props.col};
border-radius: 60%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;

`



function Navbar(props) {


    const { cart } = props

    return (
        <>
            <Nav>
                <Title>Movies-APP</Title>
                <CartContainer>
                    <CartIcon src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" alt="cart"></CartIcon>

                    <CartCount col="yellow" >{cart}</CartCount>
                </CartContainer>
            </Nav>
        </>
    )
}


export default Navbar;