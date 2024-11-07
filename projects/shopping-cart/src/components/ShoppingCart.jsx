import { useState } from "react"


export function ShoppingCart(){
    const [open, setOpen] = useState(false)


    return(
        <>
            <button onClick={() => setOpen(!open)} className="fixed bottom-5 right-10 bg-teal-300 p-4 rounded-full hover:bg-teal-500 transition-colors">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </button>
            
            <div id="drawer-body-scrolling" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${open ? '' : '-translate-x-full'} bg-white w-64 dark:bg-gray-900`} tabindex="-1" aria-labelledby="drawer-body-scrolling-label">
                <h5 id="drawer-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Cart</h5>
                <button type="button" onClick={() => setOpen(!open)} data-drawer-hide="drawer-body-scrolling" aria-controls="drawer-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    
                </div>
            </div>
        </>
    )
}