import React, { useState, useEffect } from "react";
import { Carousel, ProgressBar } from "react-bootstrap";
import { useSinglePrismicDocument } from "@prismicio/react";

const SectionThree = () => {
  const now = 60;
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();
  const [section3] = useSinglePrismicDocument("section_3");

  useEffect(() => {
    if (section3) {
      setList(JSON.parse(section3.data.table[0].text));
      setIsLoading(false);
    }
  }, [section3]);

  return (
    <section className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100">
              {!isLoading && section3 && (
                <>
                  <div className="text-center mb-5 px-0 col-12 col-md-8 col-lg-10 col-xl-6 mx-auto">
                    <h4 className="mb-0 fw-bold">
                      {section3.data.section_3_title[0].text}
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="bg-primary text-white shadow rounded-xl p-4">
                        <h5 className="mb-4 fw-bold text-center font-italic">
                          {section3.data.card_title[0].text}
                        </h5>
                        <div>
                          <ul className="nav flex-column h6 mb-0">
                            {list.map((item, index) => (
                              <li className="mt-2" key={index}>
                                <div
                                  className={`d-flex ${
                                    item.bold && "fw-bold font-italic"
                                  }`}
                                >
                                  <span>{item.name}</span>
                                  <span className="ms-auto">{item.value}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 mb-4 mb-xl-0 order-first order-xl-last">
                      <div className="h-100-all height-size">
                        <Carousel indicators={false}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 rounded-xl shadow-sm"
                              src="https://source.unsplash.com/user/erondu"
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 rounded-xl shadow-sm"
                              src="https://source.unsplash.com/user/tom"
                              alt="Second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 rounded-xl shadow-sm"
                              src="https://source.unsplash.com/user/john"
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 order-first order-lg-last mb-4 mb-lg-0">
            <div className="bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 position-sticky top-20">
              <div>
                <div className="text-center mb-5">
                  <h4 className="mb-0 fw-bold">Investment Round #23</h4>
                </div>
                <div className="d-flex align-items-center">
                  <span className="icon-size-1 me-3">
                    <img
                      className="d-block h-100 w-100"
                      src="/assets/investment.svg"
                      alt="investment"
                    />
                  </span>
                  <span className="d-flex">
                    <div className="h2 mb-0 fw-bold">
                      <h5 className="fw-normal mb-0">Remaining Tokens</h5>
                      <div className="d-flex align-items-baseline">
                        <span className="me-2">11,250</span>{" "}
                        <h6 className="mb-0 text-uppercase">
                          <div>BRICKS</div> ~$2,250
                        </h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className="mt-4">
                  <ProgressBar
                    variant="blue"
                    now={now}
                    label={`${now}% Raised`}
                  />
                </div>

                <div className="mt-4 pt-4 d-flex justify-content-between">
                  <div style={{ width: "48%" }}>
                    <button
                      type="button"
                      className="w-100 h-100 btn btn-lg btn-primary rounded-lg"
                    >
                      <small>Buy with FIAT</small>
                    </button>
                  </div>
                  <div style={{ width: "48%" }}>
                    <button
                      type="button"
                      className="w-100 h-100 btn btn-lg btn-primary rounded-lg"
                    >
                      <small>Buy with BUSD</small>
                    </button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h5 className="mb-0 fw-normal">Minimum Investment $500</h5>
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
