

export default function ProductDetail(){
    return(

        <main class="bg-transparent">
       
  
        <section>
          <div
            class="container py-10 md:py-50px lg:py-70px 2xl:py-20 3xl:py-100px"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-30px">
              <div class="relative">
                <div class="md:sticky top-[100px]">
                  <div class="swiper product-details">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/1.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/2.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/3.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/4.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/5.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/6.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div
                          class="border border-borderColor dark:border-borderColor-dark"
                        >
                          <img
                            src="assets/images/products/7.jpg"
                            alt=""
                            class="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div
                    
                    class="swiper swiper product-details-thumb pt-10px"
                  >
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/1.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/2.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/3.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/4.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/5.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/6.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/7.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="text-balckColor dark:text-blackColor-dark">
                  <p
                    class="text-lg leading-1.2 text-blackColor dark:text-blackColor-dark mb-15px"
                  >
                    Book
                  </p>
                  <h4
                    class="text-size-21 md:text-size-26 lg:text-4xl font-bold text-blackColor dark:text-blackColor-dark mb-5"
                  >
                    <span class="leading-1.2">Book Lorem ipsum dolor.</span>
                  </h4>
                  <div class="flex items-center mb-5">
                    <p
                      class="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px"
                    >
                      <del>$110.00 </del>
                    </p>
                    <p
                      class="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px"
                    >
                      $80.00
                    </p>
                    <p
                      class="text-size-15 leading-1.8 text-whiteColor mr-6px px-10px bg-primaryColor rounded"
                    >
                      SALE
                    </p>
                    <p
                      class="text-size-15 leading-1.8 text-whiteColor dark:text-whiteColor-dark mr-6px px-10px bg-blackColor dark:bg-blackColor-dark rounded"
                    >
                      -27%
                    </p>
                  </div>
                  <div>
                    <div class="flex gap-1 items-center mb-15px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-clock timer__icon"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <h6
                        class="text-xl font-bold leading-1.2 text-blackColor dark:text-blackColor-dark"
                      >
                        Hurry up! Sale ends in
                      </h6>
                    </div>
                    <div
                      class="countdown flex gap-[6px] items-center mb-25px"
                      data-countdown="2025/06/01"
                    >
                      <div
                        class="w-15 h-15 md:w-70px md:h-70px bg-primaryColor text-whiteColor rounded-lg2 flex flex-col items-center justify-center"
                      >
                        <p
                          class="count text-size-15 md:text-lg lg:text-xl !leading-1"
                        >
                          418
                        </p>
                        <span
                          class="text-size-15 md:text-sm lg:text-base leading-1"
                          >Days</span
                        >
                      </div>
                      <div
                        class="w-15 h-15 md:w-70px md:h-70px bg-primaryColor text-whiteColor rounded-lg2 flex flex-col items-center justify-center"
                      >
                        <p
                          class="count text-size-15 md:text-lg lg:text-xl !leading-1"
                        >
                          15
                        </p>
                        <span
                          class="text-size-15 md:text-sm lg:text-base leading-1"
                          >Hrs</span
                        >
                      </div>
                      <div
                        class="w-15 h-15 md:w-70px md:h-70px bg-primaryColor text-whiteColor rounded-lg2 flex flex-col items-center justify-center"
                      >
                        <p
                          class="count text-size-15 md:text-lg lg:text-xl !leading-1"
                        >
                          56
                        </p>
                        <span
                          class="text-size-15 md:text-sm lg:text-base leading-1"
                          >Min</span
                        >
                      </div>
                      <div
                        class="w-15 h-15 md:w-70px md:h-70px bg-primaryColor text-whiteColor rounded-lg2 flex flex-col items-center justify-center"
                      >
                        <p
                          class="count text-size-15 md:text-lg lg:text-xl !leading-1"
                        >
                          44
                        </p>
                        <span
                          class="text-size-15 md:text-sm lg:text-base leading-1"
                          >Sec</span
                        >
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6
                      class="leading-1.2 font-bold text-blackColor dark:text-blackColor-dark mb-"
                    >Only 10 items in stock!</h6>
  
                    <div
                      class="h-1 w-full bg-blue-x-light rounded-md relative mt-15px mb-15px"
                    >
                      <div
                        class="text-center bg-primaryColor absolute top-0 left-0 w-1/2 h-full rounded-md leading-25px"
                      ></div>
                    </div>
                  </div>
  
                  <div>
                    <p class="leading-1.8 mt-5 mb-7px">Size: X</p>
                    <div class="flex items-center gap-x-5px text-center">
                      <div>
                        <button
                          class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                        >
                          x
                        </button>
                      </div>
                      <div>
                        <button
                          class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                        >
                          xl
                        </button>
                      </div>
                      <div>
                        <button
                          class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                        >
                          m
                        </button>
                      </div>
                      <div>
                        <button
                          class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                        >
                          s
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="leading-1.8 mt-5 mb-7px">Color: violet</p>
                    <div class="flex items-center gap-x-10px">
                      <div
                        class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt="" 
                          src="assets/images/products/1.jpg"
                        />
                      </div>
                      <div
                        class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt="" 
                          src="assets/images/products/2.jpg"
                        />
                      </div>
                      <div
                        class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt="" 
                          src="assets/images/products/3.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/4.jpg"
                        />
                      </div>
                      <div
                        class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                      >
                        <img
                          class="w-full"
                          loading="lazy" alt=""
                          src="assets/images/products/5.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-30px">
                    <p class="leading-1.8 mt-5 mb-7px">Quantity</p>
                    <div
                      class="flex items-center gap-x-10px md:gap-x-5px lg:gap-x-10px 2xl:gap-x-5"
                    >
                      <div
                        class="count-container max-w-150px h-55px leading-55px border-2 border-borderColor2 dark:border-borderColor2-dark rounded-full relative overflow-hidden"
                      >
                        <input
                          type="number"
                          value="1"
                          class="w-full rounded-full focus:outline-none bg-transparent text-center"
                        />
                        <div>
                          <button
                            class="mincount absolute left-[10px] top-1/2 -translate-y-1/2 text-blackColor dark:text-blackColor-dark p-x-10px leading-1.8 w-5 inline-block opacity-50"
                          >
                            -</button
                          ><button
                            class="maxcount absolute top-1/2 -translate-y-1/2 right-[10px] text-blackColor dark:text-blackColor-dark p-x-10px leading-1.8 w-5 inline-block"
                          >
                            +
                          </button>
                        </div>
                      </div>
  
                      <div
                        class="border-2 border-blackColor dark:border-blackColor-dark rounded-full"
                      >
                        <button
                          class="px-37px py-10px hover:text-primaryColor leading-1.8"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      class="text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1.8 px-60px md:px-90px lg:px-110px py-3 md:py-15px bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor rounded-full"
                    >
                      By it now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div class="container pb-100px">
            <div
              class="tab p-30px pb-37px border border-borderColor dark:border-borderColor-dark"
            >
              <div class="tab-links flex flex-wrap md:flex-nowrap rounded">
                <button
                  class="relative text-lg text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active"
                >
                  Description
                </button>
  
                <button
                  class="relative text-lg text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
                >
                  Video
                </button>
  
                <button
                  class="relative text-lg text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
                >
                  Product Type
                </button>
                <button
                  class="relative text-lg text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
                >
                  Delivery System
                </button>
              </div>
              <div class="tab-contents">
                <div class="transition-all duration-300">
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    As opposed to using {"'Content here, content here'"}, making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for {"'lorem ipsum'"} will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose injected humour and the like. It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters
                  </p>
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                    nobis provident eius. Tenetur facilis, illo nesciunt numquam
                    non, odit iure, quia recusandae deleniti nihil excepturi?
                  </p>
                </div>
  
                <div class="hidden transition-all duration-300">
                  <div>
                    <div class="aspect-[16/9]">
                      <iframe
                        src="https://www.youtube.com/embed/vHdclsdkp28"
                        allowfullscreen=""
                        allow="autoplay"
                        class="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
  
                <div class="hidden transition-all duration-300">
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    As opposed to using {"'Content here, content here'"}, making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for {"'lorem ipsum'"} will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose injected humour and the like. It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters
                  </p>
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    If you are going to use a passage of Lorem Ipsum, you need to
                    be sure there {"isn't"} anything embarrassing hidden in the middle
                    of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of
                    over 200 Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words
                    etc
                  </p>
                </div>
  
                <div class="hidden transition-all duration-300">
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    As opposed to using {"'Content here, content here'"}, making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for {"'lorem ipsum'"} will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose injected humour and the like. It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters
                  </p>
                  <p
                    class="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px"
                  >
                    If you are going to use a passage of Lorem Ipsum, you need to
                    be sure there {"isn't"} anything embarrassing hidden in the middle
                    of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of
                    over 200 Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words
                    etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="container pb-50px">
            <div class="fees faq grid grid-cols-1 lg:grid-cols-12 gap-30px">
              <div class="lg:col-start-1 lg:col-span-3" data-aos="fade-up">
                <div class="lg:-rotate-90 lg:translate-y-3/4 relative">
                  <h4
                    class="text-size-150 lg:text-size-140 2xl:text-size-200 text-lightGrey dark:text-blackColor-dark opacity-50 uppercase font-bold leading-[1]"
                  >
                    faq
                  </h4>
                </div>
              </div>
              <div class="lg:col-start-4 lg:col-span-9" data-aos="fade-up">
                <ul class="accordion-container rounded-md">
                  <li class="accordion active">
                    <div
                      class="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark"
                    >
                      <div>
                        <button
                          class="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        >
                          <span>Can I cancel my account at any time?</span>
  
                          <svg
                            class="transition-all duration-500 rotate-0"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        class="accordion-content transition-all duration-500 overflow-hidden"
                      >
                        <div class="content-wrapper py-4 px-5">
                          <p
                            class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px"
                          >
                            Non similique culpa in provident quos sit commodi
                            beatae ea laborum suscipit id autem velit aut iusto
                            odio et deleniti quis et doloremque enim vel
                            consequuntur quos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="accordion">
                    <div
                      class="bg-whiteColor border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark"
                    >
                      <div>
                        <button
                          class="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        >
                          <span>What happens after the license expires?</span>
                          <svg
                            class="transition-all duration-500 rotate-0"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        class="h-0 accordion-content transition-all duration-500 overflow-hidden"
                      >
                        <div class="content-wrapper py-4 px-5">
                          <p
                            class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px"
                          >
                            Non similique culpa in provident quos sit commodi
                            beatae ea laborum suscipit id autem velit aut iusto
                            odio et deleniti quis et doloremque enim vel
                            consequuntur quos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="accordion">
                    <div
                      class="bg-whiteColor border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark"
                    >
                      <div>
                        <button
                          class="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        >
                          <span>Does Harry have any documentations?</span>
                          <svg
                            class="transition-all duration-500 rotate-0"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        class="h-0 accordion-content transition-all duration-500 overflow-hidden"
                      >
                        <div class="content-wrapper py-4 px-5">
                          <p
                            class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px"
                          >
                            Non similique culpa in provident quos sit commodi
                            beatae ea laborum suscipit id autem velit aut iusto
                            odio et deleniti quis et doloremque enim vel
                            consequuntur quos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="accordion">
                    <div
                      class="bg-whiteColor border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark"
                    >
                      <div>
                        <button
                          class="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        >
                          <span>How long do I get support &amp; updates?</span>
                          <svg
                            class="transition-all duration-500 rotate-0"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        class="h-0 accordion-content transition-all duration-500 overflow-hidden"
                      >
                        <div class="content-wrapper py-4 px-5">
                          <p
                            class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px"
                          >
                            Non similique culpa in provident quos sit commodi
                            beatae ea laborum suscipit id autem velit aut iusto
                            odio et deleniti quis et doloremque enim vel
                            consequuntur quos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <div class="pt-100px">
            <div class="container-fluid-2">
              <div data-aos="fade-up">
                <h3
                  class="text-3xl md:text-[35px] lg:text-size-42 leading-[45px] 2xl:leading-[45px] md:leading-[50px] font-bold mb-5 md:mb-10 text-blackColor dark:text-blackColor-dark"
                  data-aos="fade-up"
                >
                  Featured Products
                </h3>
              </div>
  
  
              <div data-aos="fade-up" class="sm:-mx-15px modal-container">
                <div class="swiper featured-courses">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/1.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold"
                                >
                                  Sale
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to Cart">
                                  <button
                                    class="text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Book stand about Software
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Sports</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/2.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold"
                                >
                                  New
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nice stand about peek
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $56.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $99.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Coocking</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(98)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/3.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold"
                                >
                                  Sold Out
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nided minid lnided codad
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $57.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $88.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Drama</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/4.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold"
                                >
                                  20% off
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Pendi mandie kond maedsd
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $88.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $99.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Design</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(45)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/5.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold"
                                >
                                  Sale
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Book stand about Software
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Development</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/6.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold"
                                >
                                  New
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nice stand about peek
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              56.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $99.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Business</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(98)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/7.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold"
                                >
                                  Sold Out
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nided minid lnided codad
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $57.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $88.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Affiliate</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(45)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide group">
                      <div class="tab-content-wrapper sm:px-15px mb-30px">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative">
                            <a
                              href="product-details.html"
                              class="w-full overflow-hidden"
                            >
                              <img
                                src="assets/images/products/8.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold"
                                >
                                  20% off
                                </p>
                              </div>
  
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
  
                            <div
                              class="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5"
                            >
                              <ul
                                class="flex gap-[6px] justify-center items-center"
                              >
                                <li class="h-46px">
                                  <a
                                    href="#"
                                    data-tip="Add to compare"
                                    class="tooltip"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                      ></path>
                                      <circle
                                        cx="112"
                                        cy="96"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <circle
                                        cx="400"
                                        cy="416"
                                        r="48"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></circle>
                                      <path
                                        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li class="h-46px tooltip" data-tip="Add to cart">
                                  <button
                                    class="tooltip text-sm h-full leading-46px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor transition-all duration-300 rounded"
                                  >
                                    Add to cart
                                  </button>
                                </li>
                                <li class="h-46px">
                                  <button
                                    data-tip="Quick View"
                                    class="tooltip modal-open"
                                  >
                                    <svg
                                      class="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
                                      xmlns="http://www.w3.org/2000/svg"
                                      
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                      ></path>
                                      <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                      ></circle>
                                    </svg>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <a
                              href="product-details.html"
                              class="text-xl md:text-size-22 font-medium text-blackColor mb-10px mt-5 font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Pendi mandie kond maedsd
                            </a>
                            <div
                              class="text-2xl font-semibold text-primaryColor font-inter mb-4"
                            >
                              $88.00
                              <del class="text-base text-lightGrey4 font-semibold"
                                >/ $99.00</del
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                                  >Sports</a
                                >
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(45)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
  
                <div
                  class="modal hidden fixed top-0 left-0 w-full h-full z-xxsmall transition-all duration-500 bg-lightBlack opacity-0 overflow-y-auto"
                >
                  <div
                    class="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall"
                  ></div>
  
                  <div
                    class="modal-content transition-all duration-500 -translate-y-20 bg-whiteColor dark:bg-whiteColor-dark p-15px max-w-250 mx-15px md:mx-auto mb-50px mt-110px md:my-150px relative z-small rounded-lg"
                  >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-30px">
                      <div class="relative">
                        <div class="md:sticky md:top-[100px]">
                          <div class="swiper product-details">
                            <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/1.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/2.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/3.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/4.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/5.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/6.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div
                                  class="border border-borderColor dark:border-borderColor-dark"
                                >
                                  <img
                                    src="assets/images/products/7.jpg"
                                    alt=""
                                    class="w-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div
                            
                            class="swiper swiper product-details-thumb pt-10px"
                          >
                            <div class="swiper-wrapper">
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/1.jpg"
   />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/2.jpg"
                               />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/3.jpg"
                                />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/4.jpg"
                                />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/5.jpg"
                               />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/1.jpg"
                                />
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy" alt=""
                                  src="assets/images/products/7.jpg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-balckColor dark:text-blackColor-dark">
  
                          <div class="mb-15px mt-1">
                            <p
                              class="text-lg leading-1.2 text-blackColor dark:text-blackColor-dark"
                            >
                              Book
                            </p>
                          </div>
                          <h4
                            class="text-size-21 md:text-size-26 lg:text-4xl font-bold mb-5"
                          >
                            <a
                              href="product-details.html"
                              class="leading-1.2 text-contentColor dark:text-contentColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
                              >Book stand about Software</a
                            >
                          </h4>
                          <div class="flex items-center mb-5">
                            <p
                              class="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px"
                            >
                              <del>$110.00 </del>
                            </p>
                            <p
                              class="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px"
                            >
                              $80.00
                            </p>
                            <p
                              class="text-size-15 leading-1.8 text-whiteColor mr-6px px-10px bg-primaryColor rounded"
                            >
                              SALE
                            </p>
                            <p
                              class="text-size-15 leading-1.8 text-whiteColor dark:text-whiteColor-dark mr-6px px-10px bg-blackColor dark:bg-blackColor-dark rounded"
                            >
                              -27%
                            </p>
                          </div>
  
                          <div>
                            <p class="leading-1.8 mt-5 mb-7px">Size: X</p>
                            <div class="flex items-center gap-x-5px text-center">
                              <div>
                                <button
                                  class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                                >
                                  x
                                </button>
                              </div>
                              <div>
                                <button
                                  class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                                >
                                  xl
                                </button>
                              </div>
                              <div>
                                <button
                                  class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                                >
                                  m
                                </button>
                              </div>
                              <div>
                                <button
                                  class="hover:bg-blackColor dark:hover:bg-blackColor-dark hover:text-whiteColor dark:hover:text-whiteColor-dark border border-borderColor dark:border-borderColor-dark w-10 h-10 leading-10 rounded"
                                >
                                  s
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p class="leading-1.8 mt-5 mb-7px">Color: violet</p>
                            <div class="flex items-center gap-x-10px">
                              <div
                                class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy"
                                  src="assets/images/products/1.jpg"
                                alt=""/>
                              </div>
                              <div
                                class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                             >
                                <img
                                  class="w-full"
                                  loading="lazy"
                                  src="assets/images/products/2.jpg"
                                alt=""/>
                              </div>
                              <div
                                class="cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                             >
                                <img
                                  class="w-full"
                                  loading="lazy"
                                  src="assets/images/products/3.jpg"
                                alt=""/>
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy"
                                  src="assets/images/products/4.jpg"
                                alt=""/>
                              </div>
                              <div
                                class="swiper-slide cursor-pointer border border-borderColor dark:border-borderColor-dark max-w-9 md:max-w-10 lg:max-w-15"
                              >
                                <img
                                  class="w-full"
                                  loading="lazy"
                                  alt=""
                                  src="assets/images/products/5.jpg"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="mb-30px">
                            <p class="leading-1.8 mt-5 mb-7px">Quantity</p>
                            <div
                              class="flex items-center gap-x-10px md:gap-x-5px lg:gap-x-10px 2xl:gap-x-5"
                            >
                              <div
                                class="count-container max-w-150px h-55px leading-55px border-2 border-borderColor2 dark:border-borderColor2-dark rounded-full relative overflow-hidden"
                              >
                                <input
                                  type="number"
                                  value="1"
                                  class="w-full rounded-full focus:outline-none bg-transparent text-center"
                                />
                                <div>
                                  <button
                                    class="mincount absolute left-[10px] top-1/2 -translate-y-1/2 text-blackColor dark:text-blackColor-dark p-x-10px leading-1.8 w-5 inline-block opacity-50"
                                  >
                                    -</button
                                  ><button
                                    class="maxcount absolute top-1/2 -translate-y-1/2 right-[10px] text-blackColor dark:text-blackColor-dark p-x-10px leading-1.8 w-5 inline-block"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
  
                              <div
                                class="border-2 border-blackColor dark:border-blackColor-dark rounded-full"
                              >
                                <button
                                  class="px-37px py-10px hover:text-primaryColor leading-1.8"
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              class="text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1.8 px-60px md:px-90px lg:px-110px py-3 md:py-15px bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor rounded-full"
                            >
                              By it now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="absolute top-4 right-3 z-xxl">
                      <button
                        class="modal-close group dark:bg-whiteColor rounded focus:shadow-select opacity-50 hover:opacity-75 p-1 inline-block"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          class="w-4 h-4 fill-blackColor"
                          fill="#000"
                        >
                           <path
                            d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z"
                          ></path>
                          </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <div class="container-fluid-2 py-100px">
            <div class="mb-5 md:mb-10" data-aos="fade-up">
              <div class="text-center">
                <span
                  class="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block"
                >
                  Course List
                </span>
              </div>
  
              <h3
                class="text-3xl md:text-[35px] lg:text-size-38 3xl:text-size-42 leading-10 mf:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark text-center"
              >
                Perfect Online
                <span
                  class="relative after:w-full after:h-[7px] z-0 after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]"
                  >Course</span
                >
                <br />
              </h3>
            </div>
            <div class="tab product-details-course">
              <div
                class="tab-links flex justify-center flex-wrap md:flex-nowrap rounded"
              >
                <button
                  class="relative text-xl font-medium text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 hover:text-primaryColor dark:hover:text-primaryColor active"
                >
                  Description
                </button>
  
                <button
                  class="relative text-xl font-medium text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Hot Sale
                </button>
  
                <button
                  class="relative text-xl font-medium text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Best Selling
                </button>
              </div>
              <div class="tab-contents">
                <div class="transition-all duration-300">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 xl:grid-cols-4 gap-30px"
                  >
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_1.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold"
                                >
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >23 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >1 hr 30 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Foundation course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span class="flex">Micle john</span>
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_2.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold"
                                >
                                  Mechanical
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >29 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >2 hr 10 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nidnies course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-greencolor"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_2.jpg"
                                    alt=""
                                  />Rinis Jhon
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_3.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold"
                                >
                                  Development
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    25 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    1 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Minws course to under stand about solution
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_3.jpg"
                                    alt=""
                                  />Micle John
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_4.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold"
                                >
                                  Ui &amp; UX Design
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    36 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >3 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Design course to under stand about solution
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_4.jpg"
                                    alt=""
                                  />
                                  <span class="flex flex-shrink-0"
                                    >Micle Robin</span
                                  >
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="hidden transition-all duration-300">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 xl:grid-cols-4 gap-30px"
                  >
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/kid_1.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold"
                                >
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >23 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >1 hr 30 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Foundation course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span class="flex">Micle john</span>
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/kid_2.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold"
                                >
                                  Mechanical
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >29 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >2 hr 10 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nidnies course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-greencolor"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_2.jpg"
                                    alt=""
                                  />Rinis Jhon
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/kid_3.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold"
                                >
                                  Development
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    25 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    1 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Minws course to under stand about solution
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_3.jpg"
                                    alt=""
                                  />Micle John
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/kid_4.jpg"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold"
                                >
                                  Ui &amp; UX Design
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    36 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >3 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Design course to under stand about solution
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_4.jpg"
                                    alt=""
                                  />
                                  <span class="flex flex-shrink-0"
                                    >Micle Robin</span
                                  >
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden transition-all duration-300">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 xl:grid-cols-4 gap-30px"
                  >
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_5.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-orange rounded font-semibold"
                                >
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >36 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >3 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Data course to under stand about solution
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span class="flex flex-shrink-0"
                                    >Micle Robin</span
                                  >
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_6.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold"
                                >
                                  Big Data
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                  >
                                    30 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >3 hr 40 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Big data to under stand about solution pacage
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $40.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                >
                                  Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span class="flex flex-shrink-0"
                                    >Micle Robin</span
                                  >
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_1.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold"
                                >
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >23 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >1 hr 30 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Foundation course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-secondaryColor3"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span class="flex">Micle john</span>
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="group">
                      <div class="tab-content-wrapper" data-aos="fade-up">
                        <div
                          class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark"
                        >
                          <div class="relative mb-4">
                            <a
                              href="course-details.html"
                              class="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_2.png"
                                alt=""
                                class="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div
                              class="absolute left-0 top-1 flex justify-between w-full items-center px-2"
                            >
                              <div>
                                <p
                                  class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold"
                                >
                                  Mechanical
                                </p>
                              </div>
                              <a
                                class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                                ><i
                                  class="icofont-heart-alt text-base py-1 px-2"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <div>
                            <div class="grid grid-cols-2 mb-15px">
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-book-alt pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >29 Lesson</span
                                  >
                                </div>
                              </div>
                              <div class="flex items-center">
                                <div>
                                  <i
                                    class="icofont-clock-time pr-5px text-primaryColor text-lg"
                                  ></i>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-black dark:text-blackColor-dark"
                                    >2 hr 10 min</span
                                  >
                                </div>
                              </div>
                            </div>
                            <a
                              href="course-details.html"
                              class="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nidnies course to under stand about softwere
                            </a>
                            <div
                              class="text-lg font-semibold text-primaryColor font-inter mb-4"
                            >
                              $32.00
                              <del class="text-sm text-lightGrey4 font-semibold"
                                >/ $67.00</del
                              >
                              <span class="ml-6"
                                ><del
                                  class="text-base font-semibold text-greencolor"
                                  >Free</del
                                ></span
                              >
                            </div>
                            <div
                              class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor"
                            >
                              <div>
                                <a
                                  href="../dashboards/instructor-details.html"
                                  class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                  ><img
                                    class="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_2.jpg"
                                    alt=""
                                  />Rinis Jhon
                                </a>
                              </div>
                              <div class="text-start md:text-end">
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <i
                                  class="icofont-star text-size-15 text-yellow"
                                ></i>
                                <span class="text-xs text-lightGrey6">(44)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}