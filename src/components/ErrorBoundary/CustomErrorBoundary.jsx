import { ErrorBoundary } from 'react-error-boundary';

import React from 'react'

function CustomErrorBoundaryUI({error, resetErrorBoundary}) {
  return (
    <div className='h-[100vh] flex justify-center items-center px-6'>
        <div role='alert' className='alert alert-warning'>
            <p>Something went wrong</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>

        </div>
    </div>
  )
}

export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary 
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}