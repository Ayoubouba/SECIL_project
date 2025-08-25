import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Clock, Award, TrendingUp } from "lucide-react";

const stats = [
    { icon: <Users className="h-8 w-8 mx-auto mb-3 text-orange-600" />, number: "2,840", text: "SECIL Employees Trained" },
    { icon: <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />, number: "18,650", text: "Training Hours Completed" },
    { icon: <Award className="h-8 w-8 mx-auto mb-3 text-orange-600" />, number: "1,420", text: "Certifications Earned" },
    { icon: <TrendingUp className="h-8 w-8 mx-auto mb-3 text-orange-600" />, number: "87%", text: "Safety Incidents Reduced" },
];

const Head = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[600px] flex flex-col lg:flex-row items-center justify-between px-10 py-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-b-3xl ">

            {/* Floating decorative blobs */}
            <motion.div
                className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-40 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Left: Text + CTA */}
            <motion.div
                className="flex flex-col max-w-xl z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <span className="inline-block text-sm font-semibold tracking-wide text-white bg-orange-600 px-4 py-1 rounded-full w-fit mb-6 shadow-md">
                    SECIL Corporate Learning Platform
                </span>
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                    Excellence Through <span className="text-orange-600">Continuous Learning</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Comprehensive training programs designed to enhance skills, ensure safety,
                    and drive operational excellence across all SECIL facilities.
                </p>
                <div className="flex gap-6">
                    <button
                        onClick={() => navigate("/CoursePage")}
                        className="px-8 py-4 text-lg font-semibold rounded-xl bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition"
                    >
                        Explore Training Programs
                    </button>
                    <button
                        className="px-8 py-4 text-lg font-semibold rounded-xl bg-gray-100 text-blue-900 shadow-lg hover:bg-gray-200 transition"
                    >
                        Watch Safety Overview
                    </button>
                </div>
            </motion.div>

            {/* Right: Stats cards with icons */}
            <motion.div
                className="grid grid-cols-2 gap-6 mt-12 lg:mt-0 lg:ml-12 z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="p-6 bg-white rounded-2xl text-center shadow-md hover:shadow-xl border border-gray-200 transition transform hover:-translate-y-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        {stat.icon}
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.text}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Head;
