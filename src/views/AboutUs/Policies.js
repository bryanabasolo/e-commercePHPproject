import React from "react";

const Policies = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mb-16">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                CONDUCT OF LIBRARY USERS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                STUDENTS, FACULTY AND OTHER RESEARCHERS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                BOOKS AND NON-BOOK COLLECTIONS
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="font-semibold">
                  All library users should follow the instructions on the proper use of 
                  the Library as displayed in the Library or given verbally by the Library 
                  staff.
                  </p>
                    <ol class="list-decimal list-inside mt-5 space-y-2 text-justify text-gray-600">
                    <li>All students who are currently enrolled and faculty, administrator and staff are welcome and encouraged to use the library anytime within the library’s hour of operation.</li>
                    <li>DLRC users should deposit their bags and other belongings in the depository counter before entering. However, valuables may be carried inside the DLRC premises. Users are advised to take care of their valuables. The DLRC staff will not be responsible for any loss of personal belongings.</li>
                    <li>Observe silence. Idle conversations, loud laughter and other unnecessary noise must be avoided.</li>
                    <li>In order not to annoy other library patrons, activities such as eating, sleeping or doing industrial work are prohibited.</li>
                    <li>Keep the DLRC clean. Don’t litter on the floor or table. Wastebaskets are provided for the purpose.</li>
                    <li>Keep things in order. Arrange the chairs properly when you leave the DLRC so it won’t obstruct the movements of others.</li>
                    <li>Vandalism of any form will be dealt with strongly and accordingly.</li>
                    <li>Smoking, eating and drinking inside the DLRC are strictly prohibited.</li>
                    <li>Books must be returned properly.</li>
                    <li>Handle books and other reading materials with care.</li>
                    <li>Students should not commit acts such as hiding or stealing books or other library property. Tearing out pages of books or periodicals and forging signatures are subject to suspension of DLRC privileges. More serious misdemeanors shall be dealt with by the Student Affairs and Services (DSAS).</li>
                    <li>The general rules of discipline of the SDCA are to be observed in the DLRC.</li>
                    <li>Electronic gadgets must be turned off or switched to silent mode while inside the DLRC premises. It is also prohibited to use the power outlet of the library for charging CP and Laptop.</li>
                    <li>SILENCE must always be observed while inside the DLRC. Students who are noisy will be requested to step out of the DLRC.</li>
                    <li>Always keep the DLRC clean and orderly.</li>
                    </ol>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ol class="list-decimal list-inside space-y-2 text-justify text-gray-600">
                    <li>All students who are currently enrolled in, and Faculty members who are renewed and hired by the institution are required to personally apply the free membership at the DLRC to avail of the various library services.</li>
                    <li>All outside researchers or users may use the DLRC upon payment of One Hundred Pesos (Php100.00) and a referral letter from their Head Librarian.</li>
                    <li>DLRC users must deposit their bag and other belongings in the depository counter. However, they must bring their valuables with them because DLRC personnel will not be responsible for any loss.</li>
                    <li>Faculty members who would like to bring their class at the library for research must give their schedule to the Library staff a day before the scheduled date of research.</li>
                    <li>Faculty members who will conduct library research for their classes must accompany their students during their research period.</li>
                    <li>Users who will not comply with the DLRC Rules and Regulation are subject to disciplinary action.</li>
                    <li>Courtesy should be observed at all times specially when requesting for any assistance from the DLRC personnel.</li>
                    <li>Faculty can request certain titles of books to be placed on reserved.</li>
                    <li>Full time and part time faculty are required to return all borrowed books before their clearance can be signed.</li>
                  </ol>
                    
                  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  
                  <ol class="list-decimal list-inside space-y-2 text-justify text-gray-600">
                    <li>General Reference books and periodicals are not to be taken out from DLRC but can be photocopied. Books for classroom demonstration maybe arranged with the librarian.</li>
                    <li>Non-book materials like’s maps, globes; pictures, vertical files and newspaper clippings may be borrowed for room use only but it can be photocopied upon arrangement with the DLRC personnel.</li>
                    <li>Theses and dissertations cannot be borrowed outside the DLRC. Only the abstract can be photocopied in the business center within the school premises.</li>
                    <li>Lost or damaged books must be reported immediately to DLRC staff. This book must be replaced with the same title, author and edition of books. In case of older edition books can preferably replaced with the newest edition</li>
                    <li>One week before final examination, books and other DLRC materials will not be allowed to be checked out.</li>
                    <li>The Library practices the open shelve system students are free to get the books from the shelves however books should be returned on the book truck found at the center of the reading area.</li>
                    <li>All overdue books borrowed by students and faculty members are subject to penalty/dues.</li>
                    <li>Clearance is a must. Once clearance is signed students are no longer allowed to borrow books and use the computer.</li>
                    <li>Reserved books can be borrowed for a period of two (2) days.</li>
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;