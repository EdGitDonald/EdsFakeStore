import {useState, createContext, useEffect} from 'react'

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create my global state to  hold my favorite characters
    const [favorites, setFavorites] = useState([])

    useEffect(
        ()=>{
            console.log('context loaded')
            const storedFavorites = localStorage.getItem('favoritesList')
            
            //check if something was there and
            //if so use that value to initialize
            if (storedFavorites){
                //set with this value
                setFavorites(JSON.parse(storedFavorites))
            }

        }, [] //run one time when contex loads
    )

    

    useEffect(
        ()=>{
            
            //save new favorites when any changes
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]
    )


    //function to add products to cart 
    const addProduct = (prodToAdd) => {
        console.log('adding', prodToAdd)
        //add this product to state
        let newFavorites = [...favorites, prodToAdd]
        console.log(newFavorites)
        //store in state
        setFavorites(newFavorites)

    }

    //function to remove product
    const removeProduct = (prodId) =>{
        console.log('remove' , prodId)
        //remove this product from state
        let newFavorites = favorites.filter(item => item.id !== prodId)
        //store in state
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addProduct, removeProduct}}>
            {props.children}
        </FavoritesContext.Provider>
    )

}
