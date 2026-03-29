import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js Link
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return children
  }
})

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return React.createElement('img', props)
  },
}))

// Helper to filter out framer-motion props
const filterFramerProps = (props) => {
  const { children, ...rest } = props
  const filtered = {}
  Object.keys(rest).forEach(key => {
    // Filter out framer-motion specific props
    if (!key.startsWith('while') && !key.startsWith('animate') && !key.startsWith('initial') && !key.startsWith('exit') && !key.startsWith('transition') && !key.startsWith('variants')) {
      filtered[key] = rest[key]
    }
  })
  return { ...filtered, children }
}

// Mock framer-motion - IMPORTANT: Must return proper React components
jest.mock('framer-motion', () => {
  const React = require('react')
  const filterProps = (props) => {
    const { children, ...rest } = props
    const filtered = {}
    Object.keys(rest).forEach(key => {
      if (!key.startsWith('while') && !key.startsWith('animate') && !key.startsWith('initial') && !key.startsWith('exit') && !key.startsWith('transition') && !key.startsWith('variants')) {
        filtered[key] = rest[key]
      }
    })
    return filtered
  }
  
  return {
    motion: {
      div: React.forwardRef(({ children, ...props }, ref) => 
        React.createElement('div', { ref, ...filterProps(props) }, children)
      ),
      button: React.forwardRef(({ children, ...props }, ref) => 
        React.createElement('button', { ref, ...filterProps(props) }, children)
      ),
      a: React.forwardRef(({ children, ...props }, ref) => 
        React.createElement('a', { ref, ...filterProps(props) }, children)
      ),
      span: React.forwardRef(({ children, ...props }, ref) => 
        React.createElement('span', { ref, ...filterProps(props) }, children)
      ),
      article: React.forwardRef(({ children, ...props }, ref) => 
        React.createElement('article', { ref, ...filterProps(props) }, children)
      ),
    },
    AnimatePresence: ({ children }) => children,
  }
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
