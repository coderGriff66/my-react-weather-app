import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() { 
  return(
    <div>
    <form className="Search">
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control" autofocus="on" autocomplete="off"/>
            </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success"/>
               </div>
                  <div className="col-3">
                    <button className="CurrentButton">CURRENT</button>
                  </div>
          </div>
    </form>
      <div>
        <h1>Detroit</h1>
      </div>
    </div>
  );
}
