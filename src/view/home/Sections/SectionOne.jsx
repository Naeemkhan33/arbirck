import React from 'react';
import { Col } from 'react-bootstrap';

const SectionOne = ({brickBalance,busdBalance,depositToVault,buyToken}) => {
  return (
    <section className='pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100'>
              {/* Heading start */}
              <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-start'>
                <span className='icon-size-2 me-3 me-md-5'>
                  <img
                    className='d-block h-100 w-100'
                    src='/assets/lock.svg'
                    alt='lock'
                  />
                </span>
                <span className='text-center mt-3'>
                  <h5 className='text-black-50 mb-0'>Portfolio total value </h5>
                  <div className='display-5 fw-bold'>£2,532,904</div>
                </span>
              </div>
              {/* Heading End */}
              <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-2 row-cols-xxl-3 justify-content-center mt-2 gy-4'>
                <Col>
                  <div className='bg-primary text-white p-3 rounded-xl shadow-sm h-100'>
                    <div className='d-flex align-items-center'>
                      <span className='icon-size p-2 me-3'>
                        <img
                          className='d-block h-100 w-100'
                          src='/assets/v-icon-0.svg'
                          alt='lock'
                        />
                      </span>
                      <h4 className='mb-0 fw-bold'>£125k</h4>
                    </div>
                    <div className='mt-1'>
                      <h5 className='mb-0 px-0 col-12 col-xl-9 mx-3'>
                        Total invested in Brick Shares
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='bg-primary text-white p-3 rounded-xl shadow-sm h-100'>
                    <div className='d-flex align-items-center'>
                      <span className='icon-size p-2 me-3'>
                        <img
                          className='d-block h-100 w-100'
                          src='/assets/v-icon-1.svg'
                          alt='lock'
                        />
                      </span>
                      <h4 className='mb-0 fw-bold'>£29k</h4>
                    </div>
                    <div className='mt-1'>
                      <h5 className='mb-0 px-0 col-12 col-xl-9 mx-3'>
                        Total paid out in Rent
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='bg-primary text-white p-3 rounded-xl shadow-sm h-100'>
                    <div className='d-flex align-items-center'>
                      <span className='icon-size p-3 me-3'>
                        <img
                          className='d-block h-100 w-100'
                          src='/assets/v-icon-2.svg'
                          alt='lock'
                        />
                      </span>
                      <h4 className='mb-0 fw-bold'>7.95%</h4>
                    </div>
                    <div className='mt-1'>
                      <h5 className='mb-0 px-0 col-12 col-xl-9 mx-3'>
                        Last month's return
                      </h5>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5 col-xxl-4 order-first order-lg-last mb-4 mb-lg-0'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 position-sticky top-20'>
              <div>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/wallet.svg'
                      alt='wallet'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <h4 className='fw-bold mb-0'>Wallet</h4>
                      <div className='d-flex align-items-baseline'>
                        <span className='me-2'>{brickBalance} </span>{' '}
                        <h6 className='mb-0 text-uppercase'>
                          <div>BRICKS</div> ~${brickBalance}
                        </h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-4'>
                  <input type='text' id="deposite"/>
                  <button
                  onClick={()=>depositToVault(document.getElementById("deposite").value)}
                    type='button'
                    className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                  >
                    Deposit into Vault
                  </button>
                </div>
              </div>
              <div className='mt-3'>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/rent.png'
                      alt='rent'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <div className='d-flex align-items-baseline'>
                        <span className='me-2'>{busdBalance}</span>{' '}
                        <h6 className='mb-0 text-uppercase'>BUSD</h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-4'>
                <input type='text' id="buy"/>
                  <button
                    type='button'
                    className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                    onClick={()=>buyToken(document.getElementById("buy").value)}
                  >
                    Reinvest Rent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
