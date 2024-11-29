import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import ProductsPage from "./pages/ProductsPage";



export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

    {
      /* */
    }
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-300 to-gray-900 opacity-30"></div>
      <div className="absolute insert-0 backdrop:-blur-sm"></div>
    </div>
<Sidebar/>
<Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/sales" element={<SalesPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/analytics" element={<AnalyticsPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
</Routes>
     </div>
  )
}