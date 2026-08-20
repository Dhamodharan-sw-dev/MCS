import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { RequireAuth } from './components/RequireAuth'
import { Home } from './pages/Home'
import { Faq } from './pages/Faq'
import { TrackOrder } from './pages/TrackOrder'
import { ContactUs } from './pages/ContactUs'
import { CreateAccount } from './pages/CreateAccount'
import { SignIn } from './pages/SignIn'
import { FindAStore } from './pages/FindAStore'
import { StaticPage } from './pages/StaticPage'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="account/sign-in" element={<SignIn />} />
        <Route path="account/create" element={<CreateAccount />} />

        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="find-a-store" element={<FindAStore />} />
          <Route path="pages/:slug" element={<StaticPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
