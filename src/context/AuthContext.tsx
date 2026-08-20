import { createContext, useContext, useState, type ReactNode } from 'react'

// Demo-only credentials — this is a static site with no backend, so this is
// a mock gate, not real authentication.
const DEMO_USERNAME = 'sampleuser'
const DEMO_PASSWORD = 'samplepassword'
const STORAGE_KEY = 'shopswift-demo-auth'

type AuthContextValue = {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true',
  )

  const login = (username: string, password: string) => {
    const ok = username === DEMO_USERNAME && password === DEMO_PASSWORD
    if (ok) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setIsAuthenticated(true)
    }
    return ok
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
