import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Favourite } from "./pages/Favourite/Favourite"
import { Reminders } from "./pages/Reminders/Reminders"
import { Account } from "./pages/Account/account"


function App() {

  return (
    <div className="bg-[#F3F4F6] w-screen  h-screen" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App



