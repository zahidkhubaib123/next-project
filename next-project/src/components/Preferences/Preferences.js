import React from "react"; 

const Preferences = () => {
  return <h2>Preferences</h2>;
};
export default Preferences;
// import React, { useContext, useState, useEffect } from "react";
// // import Image from "next/image";
// import styles from "./opd.module.scss";
// import { OPDTableHeadings, OPDEmployeeData, empFormOpd } from "Utils/data";
// import { Appcontext } from "src/components/libs/context/index";
// import { useRouter } from "next/router";
// import Search from "src/components/molecules/search";
// import { getAllOpd, getFilteredOpd } from "apis/opd";
// import { inputDateFormat, dropdownValueToName } from "Utils/helper";
// type ArrayItems = {
//   EmployeeID?: string;
//   Gender?: string;
//   Designation?: string;
//   Name?: string;
//   CompanyName?: string;
//   OPD_request_date?: string;
//   Amount?: string;
//   Status?: string;
//   OPD_limit?: string;
//   Limit_left?: string;
//   Heading?: string;
//   pay?: string;
// };
// interface Props {
//   OPDEmployeeData?: ArrayItems[];
// }
// const OPDEmployeeDetail = () => {
//   const { opdData, show, setShow }: any = useContext(Appcontext);
//   const [optSelect, setOptSelect] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [Pay, setPay] = useState<boolean>(false);
//   const [getOpd, setGetOpd] = useState([]);
//   const [filterdata, setfilterdata] = useState(getOpd);
//   const handleChange = (e: any) => {
//     console.log("handle", e.target.value);
//     setOptSelect(false);
//     handleFilter(e.target.value);
//     // if (e.target.value == 0) {
//     //   setShow(false);
//     //   setPay(false);
//     //   // setfilterdata(getOpd);
//     // } else if (e.target.value == 1) {
//     //   handleFilter("paid");
//     //   const totalOpdAmount = OPDEmployeeData.filter(
//     //     (item) => item.statusApproved === "Approved"
//     //   )
//     //     .map((item) => item.approvedAmount)
//     //     .reduce((prev, curr) => prev + curr,0);
//     //   setTotalAmount(totalOpdAmount);
//     //   setShow(true);
//     //   setPay(false);
//     // } else if (e.target.value == 2) {
//     //   handleFilter("unpaid");
//     //   setShow(false);
//     //   setPay(false);
//     // } else if(e.target.value == 3){
//     //   handleFilter("rejected");
//     //   setShow(false);
//     //   setPay(true);
//     // }
//     // else{
//     //   handleFilter("approved");
//     //   setShow(false);
//     //   setPay(true);
//     // }
//   };
//   const router = useRouter();
//   useEffect(() => {
//     const getAllOpdData = async () => {
//       const company = {
//         organization: sessionStorage.getItem("companyIndex"),
//       };
//       const res = await getAllOpd(company);
//       res && setGetOpd(res?.data);
//     };
//     getAllOpdData();
//     // console.log('getAllopd', getAllOpdData)
//   }, []);
//   const handleFilter = async (filter: string) => {
//     if (filter === "0") {
//       setfilterdata(getOpd);
//     } else {
//       const company = {
//         organization: sessionStorage.getItem("companyIndex"),
//       };
//       const test = {
//         filterValue: filter,
//       };
//       const result = await getFilteredOpd(test, company);
//       setfilterdata(result?.data);
//     }
//   };
//   useEffect(() => {
//     setfilterdata(getOpd);
//   }, [getOpd]);
//   // useEffect(()=>{
//   //   const getFilterdata = async(filter)=>{
//   //     const filterres= await getFilteredOpd(filter)
//   //     console.log("fiterres", filterres)
//   //   }
//   //   getFilterdata(filterdata)
//   // },[])
//   const handleSearch = (event) => {
//     const inputValue = event.target.value.toLowerCase();
//     const emp = getOpd.filter((val) =>
//       // val?.empId.indexOf(inputValue) === 0
//       console.log("val", val)
//     );
//     setfilterdata(emp);
//   };
//   const handleAsc =(e:any)=>{
//     console.log('hi',e.target.value)
//     setPay(false)
//     if(e.target.value == 0){
//       console.log('zahid')
      
//     }
//     else{
//       console.log("murshad")

//     }

//   }
//   return (
//     <div>
//       <div className={styles.button}>
//         <div className={styles.dropdown_warper}>
//           <div className={styles.select_warper}>
//             <select
//               className="select"
//               onChange={(e) => {
//                 handleChange(e);
//               }}
//             >
//               <option
//                 selected={optSelect ? true : false}
//                 value={0}
//                 className="select"
//               >
//                 {" "}
//                 All OPD
//               </option>
//               <option value={1} className="select">
//                 {" "}
//                 Approved OPD
//               </option>
//               <option value={2} className="select">
//                 {" "}
//                 Rejected OPD
//               </option>
//               <option value={3} className="select">
//                 {" "}
//                 paid OPD
//               </option>
//               <option value={4} className="select">
//                 {" "}
//                 unpaid OPD
//               </option>
//             </select>
//           </div>
//           <button
//             className="button"
//             onClick={() => {
//               router.push("/opd/opd-add");
//             }}
//           >
//             Add OPD Request
//           </button>
//         </div>
//         <div className={styles.opd_search}>
//           <Search onChange={(e) => handleSearch(e)} />
//         </div>
//       </div>
//       {getOpd.length ? (
//         <div className={styles.opdTable}>
//           <table className="table">
//           <tr>
// {OPDTableHeadings?.map((data, index) => {
//    const {label,dropdown,name,id,   option = [], Heading, payButton = false } = data;

//    return (
//      <>
//        {!payButton ? (<>
         
//          {Heading?(<th key={index}>{Heading}</th>):
//          (<><th> <label>{label}</label>
//          <div>
//            {dropdown ? (
//             <>
//               <select  className="select"
//                 id={id}
//                 name={name}
//                 onChange={(e) => {
//                   handleAsc(e);
//                 }}
//               >
//                 {option?.map((data: any, i: any) => {
//                   return (
//                     <option className="select"
//                       hidden={i === 0 ? true : false}
//                       value={i - 1}
//                       key={i}
//                     >
//                       {data.name}
//                     </option>
//                   );
//                 })}
//               </select>
//             </>
//           ):""
//            }
//          </div>
//          </th></>)}
//          </>
//        ) : Pay && (
//          payButton && <th key={index}>{Heading}</th>
//        )}
//      </>
//    );
// })}
// </tr>
//             {filterdata &&
//               filterdata?.map((data: any, index: any) => {
//                 const {
//                   actualPaymentDate,
//                   approvedAmount,
//                   approvedBy,
//                   createdDate,
//                   empId,
//                   remainingLimit,
//                   requestAmount,
//                   requestDate,
//                   statusApproved,
//                   statusPayment,
//                   tentativePaymentDate,
//                   pay,
//                 } = data;
//                 return (
//                   <tr key={index}>
//                     <td>{empId}</td>
//                     <td>{inputDateFormat(createdDate)}</td>
//                     <td>{inputDateFormat(requestDate)}</td>
//                     <td>{requestAmount}</td>
//                     <td>
//                       {dropdownValueToName(
//                         empFormOpd,
//                         "statusApproved",
//                         statusApproved
//                       )}
//                     </td>
//                     <td>
//                       {dropdownValueToName(
//                         empFormOpd,
//                         "statusPayment",
//                         statusPayment
//                       )}
//                     </td>
//                     <td>{approvedBy}</td>
//                     <td>{approvedAmount}</td>
//                     <td>{inputDateFormat(actualPaymentDate)}</td>
//                     <td>{inputDateFormat(tentativePaymentDate)}</td>
//                     <td>{remainingLimit}</td>
//                     {Pay && <td className={styles.payButton}>{pay}</td>}
//                   </tr>
//                 );
//               })}
//           </table>
//           {show && (
//             <div className={styles.totalPaidAmount}>
//               Total Amount of Paid OPD: {totalAmount}
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className={styles.record}> NO Record Found</div>
//       )}
//     </div>
//   );
// };
// export default OPDEmployeeDetail;