import React from 'react';
import { Col } from 'react-bootstrap';
import Chartbar from '../../components/Chartbar';
import MonochromePie from '../../components/MonochromePie';
import PeriodCountdown from '../../components/PeriodCountdown';

const SectionTwo = () => {
  return (
    <section className='pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100'>
              {/* Heading start */}
              <div className='d-flex flex-wrap align-items-center'>
                <span className='icon-size-3 me-3 me-md-5'>
                  <img
                    className='d-block h-100 w-100'
                    src='/assets/percentage.svg'
                    alt='percentage'
                  />
                </span>
                <span className='text-center'>
                  <h5 className='text-black-50 mb-0'>
                    Portfolio annual percentage yield
                  </h5>
                  <div className='display-5 fw-bold'>125.22 % APY</div>
                </span>
              </div>
              {/* Heading End */}
              <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 row-cols-xl-2 justify-content-center mt-2 gy-4'>
                <Col>
                  <div>
                    <MonochromePie />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Chartbar />
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
                      src='/assets/vault.png'
                      alt='vault'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <h4 className='fw-bold mb-0'>Vault</h4>
                      <div className='d-flex align-items-baseline'>
                        <span>150,000</span>{' '}
                        <h6 className='mb-0 text-uppercase'>
                          <div>BRICKS</div> ~$30,000
                        </h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-4 d-flex justify-content-between'>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 btn btn-lg btn-primary rounded-lg'
                    >
                      Deposit
                    </button>
                  </div>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 btn btn-lg btn-primary rounded-lg'
                    >
                      Withdraw*
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-3'>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/v-icon-1.svg'
                      alt='...'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <div className='d-flex align-items-baseline'>
                        <span>$1,250</span>{' '}
                        <h6 className='mb-0 text-uppercase'>USDC</h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-2'>
                  <button
                    type='button'
                    className='w-100 btn btn-lg btn-primary rounded-lg'
                  >
                    Collect Rent
                  </button>
                </div>
                <div className='text-center mt-4'>
                  <h5 className='mb-0 fw-normal'>Lock up period - Countdown</h5>
                  <div className='my-2'>
                    <PeriodCountdown />
                  </div>
                  <h6 className='mb-0 fw-normal'>
                    *Early withdrawal includes a 50% penalty fee.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
