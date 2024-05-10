import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import React from 'react';
import { TodosView } from './TodosView';
import { ErrorBoundaryFallback } from '../../components/ErrorBoundaryFallback';

export const TodosController: React.FC = () => {
  return (
    <ErrorBoundary
      onError={(error: Error) => {
        const { message } = error;
        return toast.error(message, {
          toastId: 'error-boundary',
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }}
      fallbackRender={ErrorBoundaryFallback}
      onReset={() => window.location.reload()}
    >
      <React.Suspense fallback={<h3>Loading Todos...</h3>}>
        <TodosView />
      </React.Suspense>
    </ErrorBoundary>
  );
};
