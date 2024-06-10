Hello, JCWD-2802 Student(s)!

- How to Setup Next JS?

        npx create-next-app@latest project-name

- Server Component

        1. Tidak Boleh Ada Fitur React Hooks (Ex. useEffect, useRef, useState, dll)

        2. Tidak Boleh Ada Interaksi dengan User (Ex. Input, onClick Event)

- Fetching on Server Component

        1. SSR (Server Side Rendering) ---> Gunakan Value 'no-store' di Props 'cache'
        2. SSG (Static Site Generator) ---> Gunakan Value 'force-cache' di Props 'cache'
                - Sekali di NPM Run Dev, Halaman Akan dikonveri Menjadi HTML File
                - Fetching Datanya Hanya 1x, ketika NPM Run Dev di Execute
                - Ketika Ada Pembaharuan Data di Database, Halaman Tidak Akan Mendapatkan Data Terbarunya 
        3. ISR (Incremental Static Regeneration)

- Form Validation using Formik & Yup

        npm install formik --save
        npm install yup