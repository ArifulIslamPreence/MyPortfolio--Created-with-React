import DownloadIcon from "@mui/icons-material/Download";
import CertificateIcon from "../../assets/images/certificate.ico"

export default function Certification() {
    return(
        <div id="certification" className="min-h-screen flex-col text-center">
            <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
                Certifications
            </div>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-7 mt-7" >
                <ol className="relative border-l  border-gray-700 ml-9 mb-6">

                    <li className="mb-10" data-aos="zoom-out" data-aos-delay="700" >
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                                <a href={'https://www.coursera.org/account/accomplishments/records/2WV4ATZWVGRM'}>
                                <img
                                    src={require("../../assets/images/certificate.ico")}


                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"/>
                                </a>

                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">
                            DevOps Specialization on AWS .

                        </h3>

                        <p>
                            A 120 hours training on complete DevOps operation on AWS.
                        </p>

                    </li>
                    <li className="mb-10" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >

                    <a href= "">
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                    </a>
                            </div>

                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>

                        <h3 className="mb-1 text-lg font-semibold text-white">
                            Advanced Python and Django development course, CISCO.

                        </h3>

                        {/*<CertificateIcon />*/}
                        <p>
                            120 hours training of python advanced programming and Django framework with mongoDB.
                        </p>

                    </li>

                    <li data-aos="zoom-in"  data-aos="zoom-out" data-aos-offset={"-15"} data-aos-delay="1200">

           <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                                    <a href= 'https://coursera.org/share/b241a996a34210e4335ea74eb74b50b7'>
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                                </a>
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">
                            Getting started with JIRA, Coursera.
                        </h3>
                        <p> 80 hours training on Jira using a Kanban board for agile methodology, </p>
                        <p>creating issues, epics and tasks,setting up WIP limits, building a roadmap sharing work with team members</p>
                        <p> and managing the workflow with transitions.  </p>

                    </li>

                    <div>

                        <li className="mb-10" data-aos="zoom-out" data-aos-delay="1800">
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                               <a href= 'https://coursera.org/share/fdff33f3f003ea9f09e9a313bb64acbe'>
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                                   </a>
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                                Virtual Private Network (VPC) with AWS, Coursera.
                            </h3>

                            <p>
                                A 40 hours training on creating and working with a virtual private
                                cloud using Amazon Web Services.
                            </p>


                        </li>

                    </div>


                    <div>
                        <li className="mb-10" data-aos="zoom-out" data-aos-delay="1800">
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                               <a href= 'https://coursera.org/share/b241a996a34210e4335ea74eb74b50b7'>
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                                   </a>
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                                AWS S3 Specialization : Basic, Build, Maintain
                            </h3>

                            <p>
                                A 40 hours training on creating and working with a Amazon S3 Storage Bucket using Amazon Web Services.
                            </p>


                        </li>
                    </div>


                    <li className="mb-10" data-aos="zoom-out" data-aos-delay="700" >
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">
                            AWS Fundamentals Specialization, Coursera.

                        </h3>

                        <p>
                            A 40 hours training on current or aspiring professionals an
                            overview of the features, benefits, and capabilities of AWS.
                        </p>

                    </li>

                    <li className="mb-10" data-aos="zoom-out" data-aos-delay="1000">
            <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>


                         </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">
                              Game development and Model Transition in Unreal 4, EPIC Inc.

                        </h3>
                        <p>
                           120 hours of 3D model animation trainning and 120 hours of windows game development using Unreal 4.
                        </p>


                    </li>




                    <div class = "container">


                    <li data-aos="zoom-in"  data-aos="zoom-out" data-aos-offset={"-15"} data-aos-delay="1500">
           <span className="absolute flex items-center justify-center w-9 h-9   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">

                <div
                    className="bg-slate-800 w-9 h-9 rounded-full  border-secondary flex items-center justify-center cursor-pointer "
                >                   <a href= 'https://www.coursera.org/learn/modern-javascript-es6-basics/home/week/1'>
                                <img
                                    src={require("../../assets/images/certificate.ico")}
                                    alt={"certificate"}
                                    className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                                />
                    </a>
                            </div>
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>
                         </span>

                        <h3 className="mb-1 text-lg font-semibold text-white">
                            Modern Javascripts : ES6, Coursera.

                        </h3>
                        <p>
                            This project provides the fundamental ES6 features and practices with live hands-on examples.

                        </p>

                    </li>

                    </div>




                </ol>

                </div>

        </div>


    );
}