import React, { useState } from 'react'
import rasm1 from '../img/img_swipper/rasm1.jpg'
import rasm2 from '../img/img_swipper/rasm2.jpg'
import rasm3 from '../img/img_swipper/rasm3.webp'
import { Element } from '../Assets/Data';
import { Link } from 'react-router'

// Fake data (har xil film list)
const movies = [
  { id: 1, title: "Fantastik Four", age: "18+", img: rasm1 },
  { id: 2, title: "Qasoskorlar 3", age: "18+", img: rasm2 },
  { id: 3, title: "Birinchi qasoskor 2", age: "16+", img: rasm3 },
  { id: 4, title: "Fantastik Four 2", age: "14+", img: rasm1 },
  { id: 5, title: "Qasoskorlar 4", age: "12+", img: rasm2 },
  { id: 6, title: "Qasoskorlar Final", age: "10+", img: rasm3 },
  { id: 7, title: "Iron Man", age: "16+", img: rasm1 },
  { id: 8, title: "Spider Man", age: "12+", img: rasm2 },
  { id: 9, title: "Doctor Strange", age: "18+", img: rasm3 },
  { id: 10, title: "Hulk", age: "10+", img: rasm1 },
  { id: 11, title: "Thor", age: "14+", img: rasm2 },
  { id: 12, title: "Black Panther", age: "16+", img: rasm3 },
  { id: 13, title: "Deadpool", age: "18+", img: rasm1 },
  { id: 14, title: "Guardians", age: "12+", img: rasm2 },
  { id: 15, title: "Ant Man", age: "10+", img: rasm3 },
]

const Home = () => {
  // Boshida 30 ta card chiqaramiz (random tanlaymiz)
  const getInitialMovies = () => {
    const result = []
    for (let i = 0; i < 30; i++) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      result.push({ ...randomMovie, uniqId: i + 1 }) // uniq id qo‘shdik
    }
    return result
  }

  const [visibleMovies, setVisibleMovies] = useState(getInitialMovies)
  const [buttonClicked, setButtonClicked] = useState(false)

  // Random qo'shish funksiyasi (faqat 1 marta ishlaydi)
  const addRandomMovies = () => {
    if (buttonClicked) return
    const count = Math.floor(Math.random() * (12 - 6 + 1)) + 6 // 6–12 oralig‘ida
    const result = []
    for (let i = 0; i < count; i++) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      result.push({ ...randomMovie, uniqId: visibleMovies.length + i + 1 })
    }
    setVisibleMovies(prev => [...prev, ...result])
    setButtonClicked(true) // endi tugma ishlamaydi
  }

  // Card listini render qiluvchi funksiya
  const renderMovies = () => (
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6'>
      {visibleMovies.map(movie => (
        <li key={movie.uniqId}>
          <Link className='relative z-40'>
            <span className='absolute left-2 top-2 bg-black/40 rounded-md px-1 py-1 text-red-500 z-50'>
              {movie.age}
            </span>
            <img
              width={175}
              height={252}
              className='rounded-lg hover:scale-105 hover:transition-all hover:duration-200 mb-1'
              src={movie.img}
              alt={movie.title}
            />
            <p className='text-lg font-bold'>{movie.title}</p>
            <span className='text-sm text-sky-600'>Obuna</span>
          </Link>
        </li>
      ))}
    </ul>
  )

  // Section component
  const Section = ({ title }) => (
    <section className="my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 mb-3">
        {title} <span className="text-sky-500">:</span>
      </h2>
      {renderMovies()}
      {!buttonClicked && (
        <button
          onClick={addRandomMovies}
          className="bg-white/40 px-8 sm:px-16 md:px-24 py-3 rounded-xl mt-8 block mx-auto"
        >
          <span className="font-semibold text-lg">Ko‘proq ko‘rsatish</span>
        </button>
      )}
    </section>
  )

  return (
    // pb-20 => 80px; lg:pb-0 => desktopda olib tashlanadi
    <section className={`${Element.Container} h-full pb-20 lg:pb-0`}>
      <Section title="Filmlar" />
      <Section title="Animelar" />
      <Section title="Seriallar" />
      <Section title="Multfilmlar" />

      {/* Qo'shimcha ishonch uchun: 80px bo'sh joy (faqat mobil/planshet) */}
      <div className="h-20 lg:hidden" />
    </section>
  )
}

export default Home
