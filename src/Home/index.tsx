import { useDemo } from '@src/api/hooks/demo'
import React from 'react'
import EntriesTable from './EntriesTable'

interface HomeProps {

}
export default function Home(props: HomeProps) {
    const { } = props
    const { data: entries, isLoading } = useDemo()


    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-base-200 min-h-screen w-full">
            <div className="w-11/12 bg-base-100 p-6 rounded-lg border shadow-md flex flex-col gap-4">
                {isLoading && (
                    <span className="font-light text-gray-500 text-sm" >Loading...</span>
                )}

                {entries && (
                    <EntriesTable entries={entries.slice(0, 20)} />
                )}

            </div>
        </div>
    )
}