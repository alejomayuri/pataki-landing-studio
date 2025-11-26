'use client'

import style from './Testimonials.module.css'
import { useEffect, useState } from "react"
import TestimonialItem from './TestimonialItem/TestimonialItem'

export const Testimonials = () => {
    const testimoniesData = [
        { 
            id: 1, 
            text: "“Sabíamos que nuestra marca necesitaba una revisión y “el equipo entregó exactamente lo que estábamos buscando”",
            name: "— Jon Hopkins, Immunity",
            image: "/demos/demosPublic/demo2/avatar-1.png"
        },
        {
            id: 2,
            text: "“Nuestra tasa de clics se duplicó en cuestión de días. Fue increible ¡Estamos muy contentos con los resultados!”",
            name: "— Jesse Ware, Devotion",
            image: "/demos/demosPublic/demo2/avatar-3.png"
        },
        {
            id: 3,
            text: "“Respondieron a nuestro encargo con entusiasmo. Su experiencia fue invaluable para nuestro negocio”",
            name: "— Will Saul, CLOSE",
            image: "/demos/demosPublic/demo2/avatar-2.png"
        }
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimoniesData.length);
        }, 5000);
    
        return () => clearInterval(intervalId);
    }, [testimoniesData.length]);

    return (
        <div id='testimonial' className={style.testimonials_container}>
            {testimoniesData.map((testimonial, index) => (
                <TestimonialItem
                    key={testimonial.id}
                    isActive={index === currentTestimonial}
                    {...testimonial}
                />
            ))}
        </div>
    )
}

export default Testimonials