

export default function Wishlist(){
    return(
        <main class="bg-transparent">
    

      <div>
        <div class="container py-50px lg:py-60px 2xl:py-20 3xl:py-100px">
          <div
            class="text-contentColor dark:text-contentColor-dark text-size-10 md:text-base overflow-auto"
          >
            <table
              class="table-fixed md:table-auto leading-1.8 text-center w-150 md:w-full overflow-auto border border-borderColor dark:border-borderColor-dark box-content md:box-border"
            >
              <thead>
                <tr
                  class="md:text-sm text-blackColor dark:text-blackColor-dark uppercase font-medium border-b border-borderColor dark:border-borderColor-dark"
                >
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Image
                  </th>
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Product
                  </th>
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Price
                  </th>
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Quantity
                  </th>
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Total
                  </th>
                  <th
                    class="pt-13px pb-9px md:py-22px px-5 md:px-25px leading-1.8 max-w-25 whitespace-nowrap"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-borderColor dark:border-borderColor-dark"
                >
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark"
                  >
                    <a href="#">
                      <img
                        loading="lazy"
                        src="assets/images/products/2.jpg"
                        alt="product-1"
                        class="max-w-20 w-full"
                      />
                    </a>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark w-300px"
                  >
                    <a
                      class="hover:text-primaryColor"
                      href="product-details.html"
                      >Product title acc 10 - s / red</a
                    >
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark"
                  >
                    <span class="amount">$110.00</span>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark w-300px"
                  >
                    <div class="mx-1">
                      <a
                        href="create-course.html"
                        class="text-xs md:text-size-15 text-whiteColor bg-primaryColor px-2 md:px-25px py-1 md:py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor rounded group text-nowrap"
                      >
                        <span class="md:leading-1.8"> Add to cart</span>
                      </a>
                    </div>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark"
                  >
                    $110.00
                  </td>
                  <td class="py-15px md:py-5">
                    <a href="#">
                      <svg
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 ionicon"
                        viewBox="0 0 512 512"
                       
                      >
                        <title>Pencil</title>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
                        ></path></svg
                    ></a>
                    <a href="#">
                      <svg
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 ionicon"
                        viewBox="0 0 512 512"
                       
                      >
                        <title>Trash</title>
                        <path
                          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M80 112h352"
                        ></path>
                        <path
                          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        ></path></svg
                    ></a>
                  </td>
                </tr>
                <tr
                  class="border-b border-borderColor dark:border-borderColor-dark"
                >
                  <td
                    class="py-15px md:py-5 border-r border-b border-borderColor dark:border-borderColor-dark"
                  >
                    <a href="#">
                      <img
                        loading="lazy"
                        src="assets/images/products/1.jpg"
                        alt="product-1"
                        class="max-w-20 w-full"
                      />
                    </a>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark w-300px"
                  >
                    <a
                      class="hover:text-primaryColor"
                      href="product-details.html"
                      >Product title acc 10 - s / red</a
                    >
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark"
                  >
                    <span class="amount">$110.00</span>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark w-300px"
                  >
                    <div class="mx-1">
                      <a
                        href="create-course.html"
                        class="text-xs md:text-size-15 text-whiteColor bg-primaryColor px-2 md:px-25px py-1 md:py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor rounded group text-nowrap"
                      >
                        <span class="md:leading-1.8"> Add to cart</span>
                      </a>
                    </div>
                  </td>
                  <td
                    class="py-15px md:py-5 border-r border-borderColor dark:border-borderColor-dark"
                  >
                    $110.00
                  </td>
                  <td class="py-15px md:py-5">
                    <a href="#">
                      <svg
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 ionicon"
                        viewBox="0 0 512 512"
                       
                      >
                        <title>Pencil</title>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
                        ></path></svg
                    ></a>
                    <a href="#">
                      <svg
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 ionicon"
                        viewBox="0 0 512 512"
                       
                      >
                        <title>Trash</title>
                        <path
                          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M80 112h352"
                        ></path>
                        <path
                          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        ></path></svg
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    );
}