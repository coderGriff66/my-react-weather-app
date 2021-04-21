import React from "react";

export default function SearchEngine() { 
  return(
    <div>
    <form className="Search">
          <div className="row">
            <div className="col-7">
              <input type="Search" placeholder="Enter City Name" autofocus="on" autocomplete="off"/>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success"/>
                  <div className="col-2">
                    <button className="CurrentButton">CURRENT</button>
                  </div>
               </div>
            </div>
          </div>
    </form>
      <div>
        <h1>Detroit</h1>
      </div>
    </div>
  );
}
