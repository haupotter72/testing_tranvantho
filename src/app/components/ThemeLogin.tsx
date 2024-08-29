'use client'
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/asset/login.png";
import img2 from "@/asset/logo1.jpg";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from "@mui/icons-material/Email";
import { FormControlLabel, TextField } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Schedule, Search } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import img3 from "@/asset/user.png"
const ThemeLogin = () => {
     const [backgroundColor, setBackgroundColor] = useState('bg-black');
     function handleDivClick() {
  
  setBackgroundColor('bg-green-400');
}

  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-slate-900 w-[55%]">
          <div className=" mt-40 ml-36 ">
            <h2 className="text-[36px] text-slate-50">
              HELLO,{" "}
              <span className="text-emerald-500 font-semibold text-[36px]">
                Digital Fortress
              </span>
            </h2>
            <p className="text-[18px] text-gray-600 mt-6  ">
              Log in to platform to start creating magic.
            </p>

            
            <TextField
            className="w-[496px] h-[55px]   bg-slate-600 rounded-lg mt-10 border-solid border-2 border-green-500"
            
              variant="outlined"
              placeholder="
                     candidate.digitalfortress@gmail  "
              type="email"
              InputProps={{
                startAdornment: <EmailIcon />,
              }}
            />
             <TextField
            className="w-[496px] h-[55px]   bg-slate-600 rounded-lg mt-4 border-solid border-2 border-green-500"
           
              variant="outlined"
              placeholder="
                    Password  "
              type="password"
              InputProps={{
                startAdornment: <LockIcon />,
              }}
            />

            <div className="flex justify-between">
                <div className=" mt-8 flex justify-between ">
                      <FormControlLabel className="text-gray-500 text-xl" control={<Checkbox defaultChecked />} label="Remember me" />
                      <h2 className=" ml-48 mt-4 text-[16px] text-green-500">Forgot Password ?</h2>
                </div>

            </div>

            <Button className="w-[496px] h-[48px] bg-green-500 text-black font-mono mt-10" variant="contained">LOGIN</Button>
            <h2 className="mt-6 ml-20">Dont't have an account ? <span className="text-green-500"> sing Up</span></h2>
          </div>
        </div>

        <div className="relative">
          <Image src={img1} alt="login" width={720} height={1024} />
          <p className=" absolute text-[32px] px-12 top-72 max-w-90 left-0 text-white">Digital Fortress has been a game-changer for our content creation process. 

The AI-powered tools are incredibly user-friendly and have saved us countless</p>
<p className="text-white text-[20px] absolute top-[85%] px-12 ">Lily Alisson</p>
<p className="text-green-500 text-[14px] absolute top-[90%] px-12">CMO at Digital Fortress</p>

        </div>
      </div>
      <div className="mt-10 flex bg-black h-screen
      ">
        <div className="w-[20%]">
            <div className=" flex justify-between mt-6 pl-4 border-b-2 pb-4 border-solid">

                <Image src={img2} alt="logo" width={120} height={32}/>
                <ArrowCircleLeftIcon className="text-white "/>
            </div>

            <div className="mt-4">
                <div  className="bg-green-400  w-[286px]  h-[40px] flex   rounded-xl">
                    <DashboardIcon className="ml-2 mt-2"/>

                    <p className="text-[14px] ml-2 mt-2 text-gray-500 text-xl">Dashboard</p>

                    
                </div>
                 <div onClick={handleDivClick} className={`  w-[286px] mt-4 h-[40px] flex ${backgroundColor}  rounded-xl`}>
                    <AssignmentIcon className="ml-2 mt-2"/>

                    <p className="text-[14px] ml-2 mt-2 text-gray-500 text-xl">Task</p>


    

                    
                </div>

                 <div onClick={handleDivClick} className={`  w-[286px] mt-4 h-[40px] flex ${backgroundColor}  rounded-xl`}>
                    <SsidChartIcon className="ml-2 mt-2"/>

                    <p className="text-[14px] ml-2 mt-2 text-gray-500 text-xl">Project</p>


    

                    
                </div>
                 <div onClick={handleDivClick} className={`  w-[286px] mt-4 h-[40px] flex ${backgroundColor}  rounded-xl`}>
                    <Schedule className="ml-2 mt-2"/>

                    <p className="text-[14px] ml-2 mt-2 text-gray-500 text-xl">Schedule <span className="bg-green-400 p-2 rounded-lg ml-32">2</span></p>


    

                    
                </div>


            </div>
            

        </div>
        <div className="w-[70%]"
        ><div className="flex justify-between">
             <Stack className="mt-6 ml-4" spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        className="text-gray-500 bg-gray-600 rounded-lg"
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search Anything" />}
      />
   
    
      
    </Stack>
    <div className="mt-6 flex gap-6">
        <EmailIcon className="text-white "/>
    <NotificationsActiveIcon  className="text-white "/>
    <Image src={img3} alt="user" width={40} height={40} className="rounded-[100%]"/>

    </div>
    
           

        </div>

        </div>

      </div>
    </div>
  );
};

export default ThemeLogin;



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];