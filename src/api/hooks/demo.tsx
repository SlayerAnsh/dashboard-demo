import { DemoAPI } from "@src/types/demo"
import { useQuery } from "react-query"
import { publicAxios } from "../axios"

export const useDemo = () => {
    return useQuery(
        ['demo'],
        () => {
            return publicAxios.get(`https://api.publicapis.org/entries`)
                .then(res => res.data as DemoAPI)
                .then(res => res.entries)
        }
    )
}