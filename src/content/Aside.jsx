function Aside() {
  return (
    <aside className="bg-red-50 p-8 h-64 mt-40 text-xl rounded-lg text-gray-600 sticky top-20 max-[800px]:hidden">
      <ul className="flex flex-col justify-evenly gap-2 h-full">
        <a href="#introduction" className="hover:text-gray-900">
          <li>Introduction</li>
        </a>
        <a href="#readData" className="hover:text-gray-900">
          <li>Read Data</li>
        </a>
        <a href="#preprocessing" className="hover:text-gray-900">
          <li>Preprocessing</li>
        </a>
        <a href="#dataAnalysis" className="hover:text-gray-900">
          <li>Data Analysis</li>
        </a>
        <a href="#conclusion" className="hover:text-gray-900">
          <li>Conclusion</li>
        </a>
        <a href="#contact" className="hover:text-gray-900">
          <li>Contact</li>
        </a>
      </ul>
    </aside>
  );
}

export default Aside;
