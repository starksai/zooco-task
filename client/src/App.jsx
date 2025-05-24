import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Reminders } from "./pages/Reminders/Reminders"
import { AddReminder } from "./pages/AddReminder/AddReminder"
import { EditReminder } from "./pages/EditReminder/EditReminder"


function App() {

  return (
    <div className="bg-[#F3F4F6] w-full  h-full" >
      <Routes>
        <Route path="/" element={<Reminders />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/addReminder" element={<AddReminder />} />
        <Route path="/editReminder/:id" element={<EditReminder />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App



