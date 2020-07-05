import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { AddTask } from '../AddTask'

export const Header = ({ darkMode, setDarkMode }) => {
    const [shouldShowMain, setShouldShowMain] = useState(false)
    const [showQuickAddTask, setShowQuickAddTask] = useState(false)



    return (
        <header className={darkMode ? 'bg-gray-900' : 'bg-red-600'}>
            <nav className="relative flex justify-between items-center p-2 max-w-screen-md mx-auto">
                <div className="cursor-pointer">
                    <svg className="h-8" viewBox="0 0 93 92" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" d="M80.8 0.0999756H12C5.7 0.0999756 0.5 5.29998 0.5 11.6V80.4C0.5 86.7 5.7 91.9 12 91.9H80.8C87.1 91.9 92.3 86.7 92.3 80.4V11.6C92.3 5.29998 87.3 0.0999756 80.8 0.0999756Z"/>
                        <path fill="#E44432" d="M20.1 43.1C21.8 42.3 56.4 22.2 57.2 21.8C58 21.4 58 19.9 57.2 19.5C56.4 19.1 54.7 18 54.1 17.6C53.5 17.2 52.2 17 51.2 17.6C50.8 17.8 21.2 34.9 20.1 35.5C18.8 36.1 17.4 36.1 16.3 35.5C15.5 34.9 0.699951 26.3 0.699951 26.3V34C4.49995 36.3 14 41.7 16.3 43C17.6 43.9 18.9 43.9 20.1 43.1Z" />
                        <path fill="#E44432" d="M20.0999 58.5C21.7999 57.7 56.3999 37.6 57.1999 37.2C57.9999 36.8 57.9999 35.3 57.1999 34.9C56.3999 34.5 54.6999 33.4 54.0999 33C53.4999 32.6 52.1999 32.4 51.1999 33C50.7999 33.2 21.1999 50.3 20.0999 50.9C18.7999 51.5 17.3999 51.5 16.2999 50.9C15.2999 50.3 0.399902 41.7 0.399902 41.7V49.4C4.1999 51.7 13.6999 57.1 15.9999 58.4C17.5999 59.3 18.8999 59.3 20.0999 58.5Z" />
                        <path fill="#E44432" d="M20.1 73.8999C21.8 73.0999 56.4 52.9999 57.2 52.5999C58 52.1999 58 50.6999 57.2 50.2999C56.4 49.8999 54.7 48.7999 54.1 48.3999C53.5 47.9999 52.2 47.7999 51.2 48.3999C50.8 48.5999 21.2 65.6999 20.1 66.2999C18.8 66.8999 17.4 66.8999 16.3 66.2999C15.5 65.6999 0.699951 57.0999 0.699951 57.0999V64.7999C4.49995 67.0999 14 72.4999 16.3 73.7999C17.6 74.7999 18.9 74.7999 20.1 73.8999Z" />
                    </svg>
                </div>


                <div>
                    <ul className="flex items-center">
                        <li
                            className="p-2 flex justify-center items-center text-white cursor-pointer select-none hover:bg-gray-500 hover:bg-opacity-25 rounded-sm"
                            onClick={() => {
                                setShowQuickAddTask(!showQuickAddTask)
                                setShouldShowMain(!shouldShowMain)
                            }}
                        >
                            + Add
                        </li>




                        <li
                            className="p-2 flex justify-center items-center ml-4 text-white cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 rounded-sm"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FaPizzaSlice />
                        </li>
                    </ul>



                    <AddTask
                        showAddTaskMain={false}
                        shouldShowMain={shouldShowMain}
                        showQuickAddTask={showQuickAddTask}
                        setShowQuickAddTask={setShowQuickAddTask}
                    />

                </div>
            </nav>
        </header>
    )
}