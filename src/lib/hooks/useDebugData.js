'use client'

import { useEffect } from 'react';

export function useDebugData(data, componentName = '') {
  if (process.env.NODE_ENV === 'development') {
    useEffect(() => {
      console.log(`🔍 Debug ${componentName}:`, data);
    }, [data, componentName]);
  }
}