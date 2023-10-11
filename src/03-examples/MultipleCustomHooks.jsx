import { useCounter, useFetch } from "../hooks";
import { Character, LoadingCharacter } from "./index";

export const MultipleCustomHooks = () => {
    
    const {counter, increment, decrement, reset} = useCounter(1);


    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


    const {id, name, species} = !!data && data;

    return (
        <>
            <h1>Rick & Morty Characters</h1>
            <hr />
            {
                isLoading 
                    ? <LoadingCharacter /> 
                    : <Character id={id} name={name} />
                    
                
            }
            

            

            <button 
                className="btn btn-primary" 
                onClick={() => increment()}
                disabled={isLoading}>
                Next Character
            </button>

            
        </>
    );
}
