import { DemoEntry } from '@src/types/demo'
import React from 'react'

interface EntriesTableProps {
    entries: DemoEntry[];
}
export default function EntriesTable(props: EntriesTableProps) {
    const { entries } = props

    return (
        <div className="overflow-x-auto">
            <table className="table w-full text-sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>API</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((e, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{e.API}</td>
                            <td>
                                <a className="link" href={e.Link} target="_blank">{e.Link}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}