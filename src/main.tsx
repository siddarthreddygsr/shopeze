import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Button } from "@material-tailwind/react";
import Navigation from "./NavBar.tsx"
import CustomCard from './card.tsx'
import CardDisplay from './carddisplay.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation></Navigation>
    <div className='flex flex-wrap justify-center gap-4 mt-50'>
      <CardDisplay></CardDisplay>
      {/* <CustomCard
      title="UI/UX Review Check"
      imageUrl="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      content="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."
      ></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard> */}
    </div>
  </React.StrictMode>,
)
