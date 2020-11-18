import React from 'react'
import "./DetailedRows.css"
import DetailedContentImage from "./DetailedContentJobs/DetailedContentImage"


function DetailedRows() {
    return (
        <div className="detailedRows">
        <h2>Other Jobs at XYZ Facility</h2>
        <div className="detailedRows__img1">
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>

           
            </div>
            <h2>Other Jobs you might be interested in</h2>
            <div className="detailedRows__img2">
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>
          <DetailedContentImage/>

             
                </div>
            
        </div>
    )
}

export default DetailedRows
