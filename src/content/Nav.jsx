function Nav() {
  return (
    <nav className="bg-red-50 h-32 mb-12 flex items-center">
      <h1 className="text-gray-700 ml-60">
        MY <span className="text-red-600">NETFLIX</span> DATA ANALYSIS
      </h1>
      <a
        href="https://github.com/TrashP"
        target="_blank"
        className="ml-auto mr-10 text-xl hover:text-blue-500"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/arnab-goswami-in/"
        target="_blank"
        className="mr-12 text-xl hover:text-blue-500"
      >
        LinkedIn
      </a>
    </nav>
  );
}

export default Nav;
