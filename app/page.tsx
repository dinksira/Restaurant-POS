// app/page.tsx
import { Header } from "../components/header"
import { DiningMode } from "../components/dining-mode"
import { CategoryFilter } from "../components/category-filter"
import { FoodGrid } from "../components/food-grid"
import { Cart } from "../components/cart"
import { Footer } from "../components/footer"
import { SidebarNav } from "../components/sidebar-nav"
  
export default function POSPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar navigation */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 flex overflow-hidden">
          {/* Main area with filters and food grid */}
          <main className="flex-1 overflow-auto p-4">
            
            <DiningMode />
            <FoodGrid />
          </main>

          {/* Cart sidebar */}
          <Cart />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
