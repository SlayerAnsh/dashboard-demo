import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface QueryWrapperProps {
    children?: ReactNode;
}
export default function QueryWrapper(props: QueryWrapperProps) {
    const { children } = props

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export const queryClient = new QueryClient()