import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Coursecard from "./Coursecard.jsx";

const CoursesCarousel = ({ courses }) => {
    const containerRef = useRef(null);
    const cardWidth = 300; // width of each Coursecard in px
    const gap = 24; // gap between cards (Tailwind's gap-6 ≈ 24px)

    const scroll = (direction) => {
        if (!containerRef.current) return;
        const scrollAmount = (cardWidth + gap) * 3; // scroll 3 cards at a time
        containerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full mt-10">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
            >
                <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>

            {/* Courses Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-hidden scroll-smooth gap-6 px-10"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px]"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <Coursecard
                            title={course.title}
                            category={course.category}
                            img={course.img}
                            author={course.author}
                            duration={course.duration}
                            evalution={course.evalution}
                            diff={course.diff}
                        />
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
            >
                <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>
        </div>
    );
};

export default CoursesCarousel;
