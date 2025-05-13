import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  return (
    <ContentProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div data-theme="luxury">
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </ContentProvider>
  );
}

export default App;
