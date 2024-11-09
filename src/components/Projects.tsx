import React from 'react'
import Heading from './Heading';
import Card from './Card'

const data =[
   
    {
        id:0,
        title:"Currency Converter",
        desc:"A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
        img:"/project1.jpeg",
        tags:["HTML","Node","CSS","Typescript"],

    },
    {
        id:1,
        title:"Countdown Timer",
        desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
        img:"/project2.jpeg",
        tags:["Next.JS","Node","CSS","Typescript"],

    },
    {
        id:2,
        title:"Todo List",
        desc:"A React & Typescript based app for managing and organizing your tasks efficiently.",
        img:"/project3.jpeg",
        tags:["React","Node","CSS","Typescript"],

    },
    {
        id:3,
        title:"ATM Machine",
        desc:"A simple HTML & Typescript based tool for dispensing cash ,transfer,deposit or balance inquiries.",
        img:"/project4.jpeg",
        tags:["HTML","Node","CSS","Typescript"],

    },
    {
        id:4,
        title:"Weather Widget",
        desc:"A Next.Js & Typescript based tool for fetching and displaying real-time weather data.",
        img:"/project5.jpg",
        tags:["Next.JS","Node","CSS","Typescript"],

    }
]

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-6 xl:gap-0 xl:gap-y-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
