import React from 'react';
import search from '../images/1x/baseline_search_black_24dp.png'

export function Nav() {
    return (
        <nav className="col-12 sticky-top">
            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Navigation bar">    
                <div className="btn-group" role="group">
                    <button className="btn btn-primary">Home</button>
                    <button className="btn btn-primary">Favorites</button>
                </div>
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search..."></input>
                    <div className="input-group-prepend">
                        <button className="btn btn-primary"><img src={search} className="img-fluid" alt="search icon"></img></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}