import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes} from '../components/lib/api'
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NewQuotesFound from '../components/quotes/NoQuotesFound';
const DUMY_QUOTES = [

    {
        id: 'q1', author: 'q2', author: 'max', text: 'Learning React is Great'
    },
    {
        id: 'q1', author: 'q2', author: 'mini', text: 'Learning React is Great'
    },


];



const AllQuotes = () => {
     const {sendRequest , status , data: loadedQuotes , error} =  useHttp(
        getAllQuotes, 
        true
        );

        useEffect(()=> {
            sendRequest();

        }, [sendRequest]);

        if(status === 'pending')
        {
            return <div className='centered'>
                <LoadingSpinner />
            </div>
        }

        if(error)
        {
            return <p className='centered focused'>{error}</p>
        }
        if(status==='completed' && (!loadedQuotes || loadedQuotes.length === 0))
        {
            return <NewQuotesFound />
        }
    return (

        <QuoteList quotes={loadedQuotes} />

    );

};

export default AllQuotes;
