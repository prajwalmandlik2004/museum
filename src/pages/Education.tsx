import React from 'react';
import { BookOpen, Video, Award, Users } from 'lucide-react';

const Education = () => {
  const courses = [
    {
      title: "Art History: Renaissance to Modern",
      level: "Intermediate",
      duration: "8 weeks",
      enrolled: "1.2k students",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
    },
    {
      title: "Understanding Classical Sculpture",
      level: "Beginner",
      duration: "6 weeks",
      enrolled: "890 students",
      image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af"
    }
  ];

  const resources = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Lectures",
      description: "Expert-led sessions on art history and techniques"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Materials",
      description: "Comprehensive guides and worksheets"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificates",
      description: "Earn certificates upon course completion"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Study Groups",
      description: "Join peer learning communities"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep into art history and cultural studies with our expert-led courses
            and comprehensive learning resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-[16/9]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-[#C2AD8A]/20 text-[#C2AD8A] px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span>{course.duration}</span>
                  <span>{course.enrolled}</span>
                </div>
                <button className="w-full bg-[#C2AD8A] text-white py-2 rounded-lg hover:bg-[#9A8B70]">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="text-[#C2AD8A] mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#C2AD8A] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="mb-6">Join thousands of students exploring art history and culture.</p>
          <button className="bg-white text-[#C2AD8A] px-8 py-3 rounded-full hover:bg-gray-100">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;