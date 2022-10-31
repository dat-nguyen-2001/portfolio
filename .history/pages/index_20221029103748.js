import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
export default function Home() {
  const looped = true
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'm a",
    titleThree: "Full-Stack Developer"
  })
  return (
    <div>
      <Head>
        <title>Dat Nguyen Van</title>
        <meta name="description" content="My web portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='overflow-x-hidden h-screen'>
        <div className='sticky w-screen h-[60px] bg-gradient-to-t from-gray-700 to-gray-800 flex space-between items-center px-10 nav'>
          <div className='flex space-x-2 nav-left'>
            <img src='logo.png' className='w-6 h-6' />
            <span>Dat Nguyen Van</span>
            <span className='pl-20 flex items-center space-x-2'>
              <EmailIcon />
              <p>
                datnguyenftu210@gmail.com
              </p>
            </span>
          </div>
          <div className='flex space-x-12 nav-right'>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
        <div className='home h-[35%]'>
          <div className='introduction flex flex-col space-y-3 text-5xl font-[900] h-[120px] ml-[8vw] mt-[30vh] w-auto'>
            <h1>Hi, my name is Dat</h1>
            <h1 className='flex'>I'm a <span className='pl-6 text-blue-400'><Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Full-Stack Developer",
                  "Front-End Developer",
                  "Life-Long Learner"
                ]
              }}
            /></span>
            </h1>
            <div className='flex space-x-10 py-5'>
              <a href='https://www.linkedin.com/in/datnguyen210/' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/linkedin--v2.png' />
              </a>
              <a href='https://github.com/dat-nguyen-2001' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/github--v1.png' />
              </a>
              <a href='https://stackoverflow.com/users/19545617/dat-nguyen' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png' />
              </a>
            </div>
            <div className=' w-[10%] h-[70px] rounded-md cursor-pointer bg-blue-500 text-white text-3xl'>
              <p className='mx-auto w-[75%] py-3'>Resume</p>
            </div>
          </div>
        </div>
      </main>
      <hr className='opacity-30 mx-28'></hr>
      <div className='px-28 mt-10'>
        <div className='about text-2xl flex flex-col space-y-4 mb-10'>
          <h1 className='text-4xl'>&lt;about&gt;</h1>
          <div>
            class DatNguyenVan = 	&#123;
          </div>
          <div className='pl-8'>
            name:&#123;
          </div>
          <div className='pl-16'>
            firstName: &#34;Dat&#34;,
          </div>
          <div className='pl-16'>
            lastName: &#34;Nguyen Van&#34;
          </div>
          <div className='pl-8'>
            &#125;,
          </div>
          <div className='pl-8'>
            from: &#34;Hanoi, Vietnam&#34;,
          </div>
          <div className='pl-8'>
            job: &#123;
          </div>
          <div className='pl-16'>
            title: &#34;Software Engineer&#34;,
          </div>
          <div className='pl-16'>
            details: [ &#34;Progressive Web Applications&#34;, &#34;Responsive Layouts&#34;, &#34;Fix Problems and Speed Up Your Website&#34; ]
          </div>
          <div>
            &#125;,
          </div>
          <div>
            others: &#123;
          </div>
          <div>
            languages: &#123;
          </div>
          <div>
            native: &#34;Vietnamese&#34;,
          </div>
          <div>
            proficient: &#34;English&#34;
          </div>
          <div>
            intermediate: &#34;Japanese&#34;
          </div>
          <div>
            &#125;,
          </div>
          <div>
            interests: [ &#34;Reading&#34;, &#34;Food&#34;, &#34;Music&#34; ]
          </div>
          <div>
            &#125;,
          </div>
          <h1 className='text-4xl'>&lt;/about&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='skills text-2xl flex flex-col space-y-4 my-10'>
          <h1 className='text-4xl'>&lt;skills&gt;</h1>
          <div>Console.log(DatNguyenVan.skills)</div>
          <div>&#123;</div>
          <div>
            frontend: [
          </div>
          <div className='flex'>
            &#34;HTML / HTML5&#34;
            <img className='ml-4' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'/>,
          </div>
          <div className='flex'>
            &#34;CSS / CSS3 / SCSS&#34;
            <img className='ml-4' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'/>,
          </div>
          <div className='flex'>
            &#34;TailwindCSS / Bootstrap4&#34;
            <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'/>
            <img className='ml-4' src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white'/>,

          </div>
          <div className='flex'>
            &#34;JavaScript / ES6 / TypeScript&#34;
            <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>,

          </div>
          <div className='flex'>
            &#34;jQuery / React.js / Next.js&#34;
            <img className='ml-4' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
            <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'/>
          </div>
          <div>
            ]
          </div>
          <div>
            backend: [
          </div>
          <div className='flex'>
            &#34;Node.js / Express&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'/>,

          </div>
          <div className='flex'>
            &#34;Nest.js&#34;,
            <img className='ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white'/>

          </div>
          <div>
            ]
          </div>
          <div>
            database: [
          </div>
          <div className='flex'>
            &#34;MySQL&#34;
            <img className='ml-4' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white'/>,

          </div>
          <div className='flex'>
            &#34;PostgreSQL&#34;
            <img className='ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'/>,

          </div>
          <div className='flex'>
            &#34;MongoDB&#34;
            <img className='ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'/>,

          </div>
          <div className='flex'>
            &#34;Redis&#34;
            <img className='ml-4' src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white'/>

          </div>
          <div>
            ]
          </div>
          <div>
            others: [
          </div>
          <div className='flex'>
            &#34;GIT&#34;
            <img className='ml-4' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white,
'/>

          </div>
          <div className='flex'>
            &#34;Firebase&#34;
            <img className='ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase'/>,

          </div>
          <div className='flex'>
            &#34;Socket.io&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101'/>,

          </div>
          <div className='flex'>
            &#34;Postman&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white'/>

          </div>
          <div>
            ]
          </div>

          <div>&#125;</div>
          <h1 className='text-4xl'>&lt;/skills&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='projects text-2xl flex flex-col space-y-4 my-10'>
          <h1 className='text-4xl'>&lt;projects&gt;</h1>
          <h1 className='text-4xl'>&lt;/projects&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='contact text-2xl flex flex-col space-y-4 mb-10'></div>
      </div>
    </div>
  )
}