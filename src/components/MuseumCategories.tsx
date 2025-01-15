import React, { useState } from "react";
import { MapPin, Clock, Users, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Museum {
  name: string;
  location: string;
  hours: string;
  visitors: string;
  contact: string;
  image: string;
}

interface Category {
  name: string;
  description: string;
  click: string;
  museums: Museum[];
}

const categories: Category[] = [
  {
    name: "Art Museums",
    description:
      "Explore world-renowned collections of paintings, sculptures, and decorative arts",
    click: "Click Here →",
    museums: [
      {
        name: "National Gallery of Modern Art",
        location: "New Delhi , IND",
        hours: "10:00 AM - 5:30 PM",
        visitors: "6.2M annually",
        contact: "+91 (212) 535-7710",
        image:
          "https://media.gettyimages.com/id/170978068/photo/national-gallery-of-modern-art-in-delhi-is-situated-inside-the-jaipur-house-near-india-gate.jpg?s=612x612&w=0&k=20&c=ZyoCzk5s3xuaBiTC-WGfIZzM0d5AL3w9t1_qqBxbi28=",
      },
      {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        location: "Mumbai, IND",
        hours: "9:00 AM - 6:00 PM",
        visitors: "9.6M annually",
        contact: "+91 1 40 20 50 50",
        image:
          "https://media.gettyimages.com/id/557652511/photo/the-chhatrapati-shivaji-maharaj-vastu-sangrahalaya-or-prince-of-wales-museum-of-western-india.jpg?s=612x612&w=0&k=20&c=UhSnb0q-d6znOAGR-G51OSzQb9TOupL2DfnjbbBO_2o=",
      },
      {
        name: "Government Museum and Art Gallery",
        location: "Chandigarh, IND",
        hours: "9:00 AM - 6:00 PM",
        visitors: "9.6M annually",
        contact: "+91 1 40 20 50 50",
        image:
          "https://chdmuseum.gov.in//admin/uploads/background/6696a67dc61f8f3c273eb98e6f2cbdc2.jpg",
      },
    ],
  },
  {
    name: "Natural History",
    description:
      "Discover Earth's history through fossils, minerals, and wildlife exhibits",
    click: "Click Here →",
    museums: [
      {
        name: "Indian Museum",
        location: "Kolkata, IND",
        hours: "10:00 AM - 5:30 PM",
        visitors: "4.2M annually",
        contact: "+91 (202) 633-1000",
        image:
          "https://media.gettyimages.com/id/1234731153/photo/a-worker-sanitizes-visitors-seat-inside-the-museum-area-as-indian-museum-re-opens-after.jpg?s=612x612&w=0&k=20&c=9vTo4HTXWsriWiGfEI0CTvh7z4t5ZlaA5jReUHn3uq8=",
      },
      {
        name: "National Museum",
        location: "New Delhi, IND",
        hours: "10:00 AM - 5:30 PM",
        visitors: "4.2M annually",
        contact: "+91 (202) 633-1000",
        image:
          "https://media.gettyimages.com/id/577298266/photo/new-delhi-india-august-7-delhi-art-gallery-in-hauz-khas-on-august-7-2014-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=6vvxASSOEtq13JaFKRTrtffwrf2TCTznW_Zw3hlBro4=",
      },
      {
        name: "Salar Jung Museum",
        location: "Hyderabad, IND",
        hours: "10:00 AM - 5:30 PM",
        visitors: "4.2M annually",
        contact: "+91 (202) 633-1000",
        image:
          "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/71000/71509-Salar-Jung-Museum.jpg",
      },
    ],
  },
  {
    name: "Science Museums",
    description:
      "Interactive exhibits showcasing technological innovations and scientific discoveries",
    click: "Click Here →",
    museums: [
      {
        name: "Visvesvaraya Industrial and Technological Museum",
        location: "Bengaluru, IND",
        hours: "10:00 AM - 6:00 PM",
        visitors: "3.3M annually",
        contact: "+91 20 7942 4000",
        image:
          "https://media.gettyimages.com/id/684617044/photo/bengaluru-india-people-take-part-in-museum-walk-inside-visvesvaraya-industrial-and.jpg?s=612x612&w=0&k=20&c=LnmUvNzkv-_T4TyFmGxzTzb1NnQLvZo7ccAyj7cqcaQ=",
      },
      {
        name: "Birla Industrial & Technological Museum",
        location: "Kolkata, IND",
        hours: "10:00 AM - 6:00 PM",
        visitors: "3.3M annually",
        contact: "+91 20 7942 4000",
        image:
          "https://kolkatatourism.travel/images/places-to-visit/headers/birla-industrial-and-technological-museum-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      },
      {
        name: "Nehru Science Centre",
        location: "Mumbai, IND",
        hours: "10:00 AM - 6:00 PM",
        visitors: "3.3M annually",
        contact: "+91 20 7942 4000",
        image:
          "https://static.wanderon.in/wp-content/uploads/2024/05/nehru-science-centre.jpg",
      },
    ],
  },
];

const MuseumCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Museums by Category
          </h2>
          <p className="text-xl text-gray-600">
            Discover the world's finest museums across various disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedCategory?.name === category.name
                  ? "bg-[#C2AD8A] text-white"
                  : "bg-white hover:bg-[#C2AD8A]/10"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p
                className={`${
                  selectedCategory?.name === category.name
                    ? "text-white/90"
                    : "text-gray-600"
                }`}
              >
                {category.description}
              </p>
              <br></br>
              <p
                className={`${
                  selectedCategory?.name === category.click
                    ? "margin-top:2px"
                    : ""
                }`}
              >
                {category.click}
              </p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {selectedCategory.museums.map((museum) => (
                <div
                  key={museum.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="aspect-[16/9]">
                    <img
                      src={museum.image}
                      alt={museum.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-4">
                      {museum.name}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.visitors}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MuseumCategories;
