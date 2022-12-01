import React from 'react'

const ThriftPlan = () => {
    return (
        <section className="Thrift-plan padding-horizontal-xlg padding-vertical-xlg" title="Thrift-Plan">
        <div className="text-center mx-auto w-sm-100 w-75 pt-4 pb-2">
          <h2 className="text-center font-weight-bold">Thrift Plans</h2>
          <p className='font-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
            magna arcu, a malesuada nisl maximus at. Aliquam dapibus posuere diam.
            Cras interdum ac justo ac blandit. Quisque ut massa erat. Phasellus
            tincidunt lobortis vestibulum.
          </p>
        </div>
       <div className="plans row  py-4">
          <div className="col-md-4 align-self-end mt-md-4 mb-3">
            <div className="border-radius-sm slim-border-2 shadow-lg  mb-sm-3 py-4 px-4 border-blue">
              <div className="card-title m-sm-0 color1">
                <h2 className='m-sm-0'>Bronze</h2>
              </div>
              <div className="text-center my-3">
                <div className="subscription color2 bg-color1 p-5 mx-auto border-r-circle ">
                  <h5>5,000</h5>
                  <h6>/month</h6>
                </div>
              </div>
              <div className="benefit">
                <ul className="text-center pl-0 font-sm">
                  <li>
                    <span className='color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                    <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                </ul>
              </div>
              <button className="font-weight-600 font-md btn py-2 linear-gradient text-light full-width">
                Choose plan
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border-radius-sm slim-border2 shadow-lg py-4 px-4  mb-3 color2 bg-color1">
              <div className="card-title m-sm-0">
                <h2 className='m-sm-0'>Gold</h2>
              </div>
              <div className="text-center my-3">
                <div className="subscription color1 bg-light p-5 mx-auto border-r-circle ">
                  <h5>15,000</h5>
                  <h6>/month</h6>
                </div>
              </div>
              <div className="benefit">
                <ul className="text-center pl-0 font-sm">
                <li>
                    <span className='color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                    <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                </ul>
              </div>
              <button className="font-weight-600 btn font-md py-2 btn-light full-width">
                Choose plan
              </button>
            </div>
          </div>
    
          <div className="col-md-4  align-self-end">
            <div className="border-radius-sm slim-border-2  shadow-lg  py-4  px-4 border-blue border-r-circle">
              <div className="card-title m-sm-0 color1">
                <h2 className='m-sm-0'>Silver</h2>
              </div>
              <div className="text-center my-3">
                <div className="subscription color2 bg-color1 p-5 mx-auto border-r-circle ">
                  <h5>10,000</h5>
                  <h6>/month</h6>
                </div>
              </div>
              <div className="benefit">
                <ul className="text-center pl-0 font-sm">
                <li>
                    <span className=' color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-green font-weight-bold '>&#10004;</span> Cras interdum ac justo
                  </li>
                  <li>
                    <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                  <li>
                  <span className='color-danger font-weight-bold '>&#10006;</span> Cras interdum ac justo
                  </li>
                </ul>
              </div>
              <button className="btn linear-gradient font-weight-600 font-md py-2 text-light full-width">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default ThriftPlan