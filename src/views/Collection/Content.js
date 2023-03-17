import React from "react";

const Content = () => {
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
                          Collection
                        </span>
                      </div>                     
                    </div>
                  </div>

                </div>

              {/* Try content starts here */}
        <section className="relative py-20"> 

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/RESERVE.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  RESERVE COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This collection is of high demands. Reserved collections are under maximum supervision
                   of the circulation librarian and can’t be checked out of the library. For accessing the
                    reserved collections, ask the librarian for assistance.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/THESIS.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  THESIS AND E-THESIS COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  Holds archival copies of all Undergraduate research and thesis completed at the 
                  St Dominic College of Asia in both printed and electronic format.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/ONEASIA.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  ONE ASIA COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  These are publications dealing with the Asia in whatever language and place it 
                  were published. These materials are required for studying the Asia as the name 
                  of the college suggests.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/FILIPINIANA.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  FILIPINIANA COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  These are materials or publications written by Filipino authors or foreign 
                  authors about the Philippines, its people and culture regardless of the 
                  language used except theses and dissertations.
                  </p>
                </div>
              </div>

            </div>
          </div>


          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/THERAPY.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  BOOK THERAPY COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This is collection anchored on the principles of therapeutic reading to 
                  relieve stress and anxiety also of the reader. Bibliotherapy is an expressive 
                  therapy that uses literature to support good mental health. These results 
                  have been shown to be long-lasting.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/CIRCULATION.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  CIRCULATION COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This is the largest collection of the library that houses the core collections 
                  and books about the curricular offering of the SDCA. They are displayed in an 
                  open shelves system by which library users can borrow and loan circulated books.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/REFERENCE.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  GENERAL REFERENCE COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This contains reference materials such as encyclopedia, handbooks, guides, 
                  directories, yearbooks, almanacs, and maps. Reference books are usually not 
                  read straight through, but are only referred to when needed. Thus, these 
                  items are not for home-reading so that they are always available for use 
                  in the library.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/PERIODICALS.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  PERIODICALS COLLECTION
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This collection includes magazines, scholarly journals, newspapers, and 
                  newsletters. They are publications that are published at regular intervals. 
                  Daily newspapers, weekly magazines, and quarterly journals are all 
                  periodicals both local and internationally published.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-3/12 ml-auto mr-auto mt-12 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/ONEASIA.jpg"}
                />
              </div>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-12 px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-2xl font-semibold text-red-500">
                  ONE ASIA HERITAGE
                  </h3>
                  <p className="mt-4 text-m text-justify text-justify leading-relaxed text-gray-600">
                  This are permanent exhibitions of precious pieces of art and artifacts from 
                  27 Asian countries collected by Ambassador Rosalinda Valenton Tirona during 
                  her tour of duty when she served as an Ambassador, Charge de Affairs and 
                  Consul General of the Philippines. A milestone in Bacoor and the entire 
                  Calabarzon region, the One Asia Heritage exhibition aims to showcase the common 
                  heritage of countries over Asia and promote the spirit of unity and vigor 
                  across the region. The collection comes from South Asia, North East Asia, 
                  Middle East, Pacific, and ASEAN countries, namely: Brunei, Cambodia, Indonesia, 
                  Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam, Bangladesh, 
                  India, Nepal, Pakistan, Sri Lanka, China, Mongolia, Japan, South Korea, Iran, 
                  Jordan, Israel, Lebanon, Saudi Arabia, United Arab Emirates, Australia, and 
                  New Zealand. St. Dominic College of Asia takes the leadership role as an academic 
                  institution and use the One Asia Heritage exhibit as the main vehicle to impart 
                  the younger generation the significance of Asian culture as Asian learners 
                  and scholars.
                  </p>
                </div>
              </div>

            </div>
          </div>
 
        </section>
              {/* Try content starts here */}

              </div>
            </div>
          </div>
        </section>
      </main>

  );
};

export default Content;
