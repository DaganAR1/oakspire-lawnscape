/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// This file is intentionally left empty as the entire site is built into index.html
// as requested by the user for a single-file delivery.
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {null}
    </StrictMode>,
  );
}
