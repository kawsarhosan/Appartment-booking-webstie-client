import React from 'react';

const Services = () => {
    return (
        <div className=' my-5'>
            <div className="text-center custom-color my-4">
                <p>Service</p>
                <h3 className="fw-bold">We're an agency tailored to all <br/>
                    clients' needs that always delivers</h3>
            </div>
            <div className='bg-light p-3'>
              <div className='container'>
                <div className=" row row-cols-1 row-cols-md-3  g-4">
                    
                    <div className="col ">
                      <div className="card border-0 p-3 text-center">
                        <img
                          src="/Images/icon1.png"
                          className="card-img-top mx-auto w-25"
                          alt="..."
                        />
                        <div className="card-body custom-color">
                          <h5 className="card-title fw-bold text-center">Wide Range of Properties</h5>
                          <small >With a robust selection of popular properties on hand, as well as leading properties from experts.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="card border-0 p-3 text-center">
                        <img
                          src="/Images/icon2.png"
                          className="card-img-top mx-auto w-25"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title fw-bold text-center">Financing Made Easy</h5>
                          <small  >Our stress-free finance department that can find financial solutions to save you money.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="card border-0 p-3 text-center">
                        <img
                          src="/Images/icon3.png"
                          className="card-img-top mx-auto w-25"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5  className="card-title fw-bold text-center">Trusted by Thousands</h5>
                          <small>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
    );
};

export default Services;