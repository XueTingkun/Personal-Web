import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  const basename = import.meta.env.MODE === 'production' ? '/Personal-Web' : '/';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
