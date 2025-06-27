/**
 * Pathmaker UI - Visual Node Editor React Components
 * React components for building node-based interfaces
 */

import { PATHMAKER_VERSION } from '@pathmaker/core'
import type React from 'react'

// Basic component to test our setup
export interface PathmakerProps {
  className?: string
  children?: React.ReactNode
}

export const Pathmaker: React.FC<PathmakerProps> = ({ className, children }: PathmakerProps) => {
  return (
    <div className={className} data-pathmaker-version={PATHMAKER_VERSION}>
      {children || <div>Pathmaker Visual Node Editor v{PATHMAKER_VERSION}</div>}
    </div>
  )
}

// Export everything from core for convenience
export * from '@pathmaker/core'

// TODO: Add actual UI components as we build them
// export { NodeEditor } from './components/NodeEditor';
// export { Node } from './components/Node';
// export { Connection } from './components/Connection';
