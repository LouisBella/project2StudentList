export default function Navbar()
{
    return(
        <header className='sticky flex flex-row justify-between bg-gray-400 border-b border-gray-100 p-6 rounded-b-xl'>
            <div>
                <h1 className='text-3xl text-gray-100 font-bold'>Untitled High School</h1>
                <h3 className='text-lg text-gray-800 font-semibold'>CPRG 306 - Assignment 2</h3>
            </div>
            <span className='text-xs text-gray-300 font-semibold rounded-full px-4 py-2'>Alex Dea, Louis Soberano, Aiden Larsen</span>
        </header>
    )
}