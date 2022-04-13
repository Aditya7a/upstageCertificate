import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import Button from "./Button";
import Nav from "./Nav";
import FormInput from "./FormInput";
import { BadgeCheckIcon, BookOpenSolid } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/outline";
import Tabs from "./Tabs";
import { PDFDocument } from "pdf-lib";
import readXlsxFile from "read-excel-file";
import axios from "axios";

const myFunction = () => {
  let x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
};

function Hero() {
  const [excel_data, setExcelData] = useState("");
  const [base64_pdf, setBase64PDF] = useState("");
  let check_excel = () => {
    let allowed_file_type = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "application/xls",
    ];
    let file_type = document.getElementById("result_excel").files[0].type;
    console.log(file_type);
    if (!allowed_file_type.includes(file_type)) {
      alert("Please select an excel file");
      document.getElementById("result_excel").value = "";
    } else {
      check_excel_data_format();
    }
  };
  const check_pdf = () => {
    let allowed_file_type = ["application/pdf"];
    let file_type = document.getElementById("pdf_template").files[0].type;
    console.log(file_type);
    if (!allowed_file_type.includes(file_type)) {
      alert("Please select an PDF file");
      document.getElementById("pdf_template").value = "";
    } else {
      check_pdf_template();
    }
  };
  const check_pdf_template = async () => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(document.getElementById("pdf_template").files[0]);
    reader.onload = async function () {
      let arrayBuffer = reader.result;
      let bytes = new Uint8Array(arrayBuffer);
      let pdfDoc = await PDFDocument.load(bytes);
      // try {
      //     let form = pdfDoc.getForm();
      //     let name = form.getTextField('name');
      //     let rank = form.getTextField('rank');
      // } catch (e) {
      //     alert(e);
      // }
    };
  };
  const check_excel_data_format = () => {
    let allowed_headers = ["Full Name", "Rank", "Email"];
    readXlsxFile(document.getElementById("result_excel").files[0]).then(
      (rows) => {
        setExcelData(rows);
        let header = rows[0];
        try {
          allowed_headers.forEach((e) => {
            if (!header.includes(e)) {
              alert("Excel does not include any header named : " + e);
            }
          });
        } catch (error) {
          alert(error);
        }
      }
    );
  };
  const upload_data = (data) => {
    let title = document.getElementById("title").value;
    let pdf_template = document.getElementById("pdf_template").files[0];
    let formData = new FormData();
    formData.append("title", title);
    formData.append("pdf", pdf_template);
    formData.append("data", JSON.stringify(data));
    //console.log(pdf_template);
    if (
      title !== "" ||
      document.getElementById("excel_file").files.length != 0 ||
      document.getElementById("pdf_template").files.length != 0
    ) {
      axios
        .post("https://admin.upstageindia.in/api/v1/certificate/send", formData)
        .then((result) => {
          if (result.status === "success") {
            alert("Mail sent successfully");
          } else {
            alert(result.message);
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      alert("Please fill all required fields");
    }
  };
  const create_json = () => {
    let json_obj = [];
    for (let i = 1; i < 5; i++) {
      if (
        document.getElementById("pdf_" + i).value != "" ||
        document.getElementById("excel_" + i).value != ""
      ) {
        json_obj.push({
          pdf_field: document.getElementById("pdf_" + i).value,
          excel_col: document.getElementById("excel_" + i).value,
        });
      }
    }
    let header = excel_data[0];
    json_obj.forEach((e) => {
      e.excel_col = header.indexOf(e.excel_col);
    });
    let final_object = "";
    let excel_data_len = excel_data.length;
    let json_obj_len = json_obj.length;
    for (let i = 1; i < excel_data_len; i++) {
      final_object = final_object + `{`;
      for (let j = 0; j < json_obj_len; j++) {
        final_object =
          final_object +
          `"${json_obj[j].pdf_field}":"${
            excel_data[i][json_obj[j].excel_col]
          }"`;
        if (j != json_obj_len - 1) {
          final_object = final_object + ",";
        }
      }
      final_object = final_object + `}`;
      if (i != excel_data_len - 1) {
        final_object = final_object + ",";
      }
    }
    final_object = "[" + final_object + "]";
    final_object = JSON.parse(final_object);
    //console.log(final_object);
    upload_data(final_object);
  };
  return (
    <>
      <div className=" grid h-screen grid-cols-12 gap-0 bg-[#F7FAFC] font-main">
        {/* Hero */}
        <div className="col-span-3 hidden h-screen bg-white md:grid ">
          <Nav />
        </div>

        {/*rightSIDE */}
        <div className=" col-span-9 mx-10 mt-8">
          <div>
            <h1 className="text-xl font-bold uppercase">E-Certificate</h1>
            <h2 className="mt-1 text-base font-medium text-[#8f8f8f]">
              Hello, ACIC. Welcome to UpStage E-Certificate
            </h2>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 flex-none items-center justify-center">
              <button
                type="button"
                className="col-span-1 flex h-12 w-12 items-center justify-center rounded-full bg-b1 text-center font-main text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
            <div className="w-64 flex-initial">
              <div className="col-span-9">
                <div className="text-base font-medium uppercase text-[#8f8f8f]">
                  ACIC BMU
                </div>
                <h1 className="mt-1 text-2xl font-bold uppercase">
                  Event Name
                </h1>
              </div>
            </div>
          </div>

          {/* Tab */}
          <Tabs />

          {/* Form */
          /* // htmlFor // label // type // id // placeHolder // buttonName */}
          <FormInput
            htmlFor="title"
            label="title"
            type="text"
            id="title"
            placeHolder="Event Title"
            buttonName="Next"
          />
          <FormInput
            htmlFor="template"
            label="template"
            type="file"
            id="title"
            placeHolder="Upload File"
            buttonName="Next"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
