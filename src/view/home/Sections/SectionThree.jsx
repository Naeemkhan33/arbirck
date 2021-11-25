import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const SectionThree = () => {
  const now = 60;

  const list = [
    { bold: true, name: 'Target funds', value: '$5,000' },
    { name: 'Expected APR', value: '84%' },
    { name: 'Share/Token price', value: '$0.20' },
    { name: 'Expected rent', value: '$2700' },
    { name: 'Property Leasing', value: '-$1,100' },
    { name: 'Maintenance Expenses', value: '-$300' },
    { name: 'Utilities', value: '-$150' },
    { name: 'Set up fee (2%)', value: '-$100' },
  ];

  return (
    <section className='pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100'>
              {/* Heading start */}
              <div className='text-center mb-5 px-0 col-12 col-md-8 col-lg-10 col-xl-6 mx-auto'>
                <h3 className='mb-0 fw-bold'>
                  18 Cinnamon Street, E1W 3NJ Wapping London
                </h3>
              </div>
              {/* Heading End */}
              <div className='bg-primary shadow rounded-xl p-4 p-xxl-5'>
                <h4 className='mb-4 fw-bold text-center font-italic'>
                  Next Property Investment Breakdown
                </h4>
                <div className='px-0 col-12 col-md-10 col-lg-12 col-xxl-8 mx-auto'>
                  <ul className='nav flex-column h5 mb-0'>
                    {list.map((item) => (
                      <li className='mt-2'>
                        <div
                          className={`d-flex ${
                            item.bold && 'fw-bold font-italic'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className='ms-auto'>{item.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5 col-xxl-4 order-first order-lg-last mb-4 mb-lg-0'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 position-sticky top-20'>
              <div>
                <div className='text-center mb-5'>
                  <h3 className='mb-0 fw-bold'>Investment Round #23</h3>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/investment.svg'
                      alt='investment'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='display-4 fw-bold'>
                      <h5 className='fw-normal mb-0'>Remaining Tokens</h5>
                      <div className='d-flex align-items-end'>
                        <span>11,250</span>{' '}
                        <h6 className='text-uppercase'>BRICKS ~$2,250</h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-4'>
                  <ProgressBar
                    variant='blue'
                    now={now}
                    label={`${now}% Raised`}
                  />
                </div>

                <div className='mt-4 pt-4 d-flex justify-content-between'>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 btn btn-lg btn-primary rounded-lg'
                    >
                      <small>Buy with FIAT</small>
                    </button>
                  </div>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 btn btn-lg btn-primary rounded-lg'
                    >
                      <small>Buy with USDC</small>
                    </button>
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <h5 className='mb-0 fw-normal'>Minimum Investment $500</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;