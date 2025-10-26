import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";
import currencyStore from '../state/store'

function useFetchCoinHistory({coinId}) {
    const {currency} = currencyStore();

    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');

    const {data: historicData, isLoading, isError} = useQuery({
        queryKey: ['historicData', {id: coinId, days, interval, currency}],
        queryFn: () => fetchCoinHistoricData({id: coinId, days, interval, currency}),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2,
    })

    return {
        historicData,
        isLoading,
        isError,
        days,
        setDays,
        setCoinInterval,
        currency

    }
}

export default useFetchCoinHistory