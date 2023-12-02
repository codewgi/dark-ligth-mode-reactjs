import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === "dark") {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if(darkMode !== null) {
            if(darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }
    }, [darkMode])

    return ( 
        <div className="py-5 px-14 rounded-3xl cursor-pointer hover:bg-neutral-900 dark:hover:bg-white dark:text-white dark:hover:text-orange-600 hover:text-white  text-[120px] duration-200 group" onClick={() => setDarkMode(!darkMode)}>
            <span className="inline-block dark:hidden group-hover:-rotate-[20deg] duration-200">
                <FontAwesomeIcon icon={faMoon}/>
            </span>
            <span className="hidden dark:inline-block group-hover:rotate-[20deg] duration-200">
                <FontAwesomeIcon icon={faSun}/>
            </span>
        </div>
     );
}
 
export default Toggle;