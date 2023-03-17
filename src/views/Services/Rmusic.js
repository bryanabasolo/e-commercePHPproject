import React from "react";
import Facilities from "./Facilities";

const Rmusic = () => {
  return (
    <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(/img/sdcabg.jpg)"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                        
                    </div>
                  </div>
                
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 mt-5">
                          DLRC Library Services
                        </span>
                      </div>                     
                    </div>
                  </div>

                </div>

                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-red-500 mb-2">
                  'R MUSIC'
                  </h3>
                
                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Research and Product Development
                    </h3>
                  </div>
                
                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Bibliographic Searching
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Use of OPAC (Online Public Access Catalog) in searching for library collection.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Indexing Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Bibliographic access of journal articles though the use of the OPAC.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Internet/Computer Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Use of the computer and internet access for academic purposes.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Reference Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library service that provides the library users with direction to library 
                      materials, advice on library collections, services and expertise on multiple 
                      kinds of information sources.
                      </p>
                    
                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Theses Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of SDCA students’ theses in print format.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Vertical File Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of clippings of newspaper articles in various subject areas.
                      </p>

                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Moral and Spiritual Accountability
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Book Therapy
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of inspirational and motivational books for personal development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Multicultural Advocacy
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    One Asia Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      These is publications dealing with the Asia in whatever language and place
                      it were published. These materials are required for studying the Asia as the name of the college suggests.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Language Learning Nook
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of audio files for basic learning of the different languages.
                      </p>

                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Understanding the Discipline
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Bibliographic Searching
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Use of OPAC (Online Public Access Catalog) in searching for library collection.
                      </p>
                      
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Indexing Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Bibliographic access of journal articles though the use of the OPAC.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Pathfinder
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of the compilation of bibliographies of the available references 
                      in the library of the specific terms in various subject areas.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Theses Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of SDCA students’ theses in print format.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Vertical File Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of clippings of newspaper articles in various subject areas.
                      </p>
                                       
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Self-Directed Learning
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Borrowing Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A service that allow students, faculty and staff to borrow library materials for a certain period of time.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Current Awareness Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library service that provides up-to-date information related to: -Current Events. Newspaper Subscriptions
                      -Subject Specific updates. Periodical/Journal Subscriptions
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    E-Books/e-Audiobooks Kiosk
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Is the new section of the DLRC that promotes reading through books in 
                      digital and audio format using the Tablets provided in the Kiosk. All 
                      bonafide students and Faculty of SDCA are allowed to use the tablets.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Library Instruction
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library orientation on the use of the library and its services for the new students, faculty and staff.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Pathfinder
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of the compilation of bibliographies of the available references 
                      in the library of the specific terms in various subject areas.
                      </p>
                    
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Information and Technology Literacy
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Bibliographic Searching
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Use of OPAC (Online Public Access Catalog) in searching for library collection.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Indexing Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Bibliographic access of journal articles though the use of the OPAC.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Electronic Resources Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of STARBOOKS, Electronic Books, Theses and DVD collections.
                      </p>

                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Internet/Computer Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library orientation on the use of the library and its services for the new students, faculty and staff.
                      </p>
                    
                      <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                      Dominican Online Reference Assistant (DORA)
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Is a virtual reference assistant that provides instant answers on the 
                      queries about about access and retrieval of information. DORA is available
                       in Facebook and Messenger through this link https://www.facebook.com/doraDlrc/
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Critical Thinking
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Bibliographic Searching
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Use of OPAC (Online Public Access Catalog) in searching for library collection.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Indexing Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Bibliographic access of journal articles though the use of the OPAC.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Library Instruction
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library orientation on the use of the library and its services for the new students, faculty and staff.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Pathfinder
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of the compilation of bibliographies of the available references 
                      in the library of the specific terms in various subject areas.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Reference Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library service that provides the library users with direction to library 
                      materials, advice on library collections, services and expertise on multiple 
                      kinds of information sources.
                      </p>
                    
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Vertical File Collection
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of clippings of newspaper articles in various subject areas.
                      </p>
                    
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Communication Skills
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Language Learning Nook
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of audio files for basic learning of the different languages.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Human Library
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      It is composed of human books that a “reader” can interact with. Human 
                      books are people who are subjected to stereotyping and prejudices.
                      </p>

                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Creativity and Innovation
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Book Therapy
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      Access of inspirational and motivational books for personal development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">

                  <div className="mb-2 text-gray-700 mt-10">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-red-500">
                    Collaboration and Community
                    </h3>
                  </div>

                </div>

                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    Referral Service
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      A library service that provides a request letter for the SDCA students,
                       faculty and staff who would like to access other library and information centers.
                      </p>

                    <h3 className="fas fa-briefcase mr-2 text-xl font-semibold text-gray-800">
                    DLRC Knowledge Exchange Wall
                    </h3>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-gray-600">
                      This new service is an adaptation of “the little free library” that 
                      allows students to exchange thoughts and knowledge with other students
                       through leaving a book at the customized shelf near the baggage area .
                      </p>

                    

                    </div>
                  </div>
                </div>
                <Facilities />
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Rmusic;
