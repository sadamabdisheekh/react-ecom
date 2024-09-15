const Header = () => {
    return <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md shadow z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
                    <h1 className="text-xl font-semibold text-gray-700">Logo</h1>
                    <ul className="flex space-x-8 text-gray-700">
                    <a className="hover:text-pink-700" href="">Home</a>
                    <a className="hover:text-pink-700" href="">About</a>
                    <a className="hover:text-pink-700" href="">Contact</a>
                    </ul>
        </div>
    </div>
}

export default Header;