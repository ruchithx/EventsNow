import React from "react";
import Container from "./Container";
import GetReportComponent from "./GetReportComponent";

export default function Reports() {
  const getAttendanceReport = () => {};
  const getRevenueReport = () => {};
  return (
    <Container>
      <div className="pl-10 mb-5 grid gap-2 mt-8 mr-10 pb-8">
        <div className=" font-mono text-custom-orange font-medium text-3xl ">
          REPORTS
        </div>
        <div className=" text-[#455273] font-mono md:mr-8">
          Get your event report, identify what went well , what could be
          improved and make a better event in future.
        </div>

        <div className="mt-12 grid gap-8 lg:mr-16">
          <GetReportComponent
            reportName="ATTENDANCE REPORT"
            image="attendanceReport"
            getReport={getAttendanceReport}
            size={80}
          />
          <GetReportComponent
            reportName="REVENUE REPORT"
            image="revenueReport"
            getReport={getRevenueReport}
            size={95}
          />
        </div>
      </div>
    </Container>
  );
}
