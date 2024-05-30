Hello, JCWD-2802 Student(s)!

 - How to Setup React JS with Vite?

            1. Create Project

                    npm create vite@latest
            
            2. Inside Your New Vite Project

                    npm i 
            
            3. Execute Vite Project

                    npm run dev

- How to Setup React Router DOM (Version 6xx)?

            1. Install 

                    npm i react-router-dom@6

            2. Setup Router at "main.jsx"

                    const router = createBrowserRouter([
                        {
                            element: <App />,
                            children: [
                            {
                                path: '/', 
                                element: <HomePage />
                            },
                            {
                                path: '/profile', 
                                element: <ProfilePage />
                            }, 
                            {
                                path: '/admin', 
                                element: <AdminPage />
                            }
                            ]
                        }
                    ])

                    ReactDOM.createRoot(document.getElementById('root')).render(
                    <RouterProvider router={router}>
                        <App />
                    </RouterProvider>,
                    )

            3. Place "<Outlet />" Component at "App.jsx"

                    function App(){
                        return(
                            <Outlet />
                        )
                    }

            4. Create Page(s) and Register to "main.jsx" Routers

- How to Install Tailwind CSS?
  
           https://tailwindcss.com/docs/guides/vite
