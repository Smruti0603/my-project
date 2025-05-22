export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-900 text-white fixed top-0 left-0">
        <div className="text-2xl font-bold">YourName</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </nav>
    );
  }
  