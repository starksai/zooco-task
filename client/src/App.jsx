import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Favourite } from "./pages/Favourite/Favourite"
import { Reminders } from "./pages/Reminders/Reminders"
import { Account } from "./pages/Account/account"
import { ReminderCard } from "./components/Footer/ReminderCard/ReminderCard"
import { AddReminder } from "./pages/AddReminder/AddReminder"


function App() {

  return (
    <div className="bg-[#F3F4F6] w-full  h-full" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addReminder" element={<AddReminder />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App



