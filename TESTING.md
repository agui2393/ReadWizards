# TESTING


## Compatibility

In order to confirm the correct functionality, responsiveness, and appearance:

+ The website was tested on the following browsers: Chrome, Firefox, Safari.

    - Chrome:

    ![Chrome](documentation/chrome.png)

    - FireFox:

    ![FireFox](documentation/firefox.png)

    - Safari:

![Brave](documentation/safari.png)
---

## Responsiveness

+ The website was checked by devtools implemented in Firefox and Chrome browsers.

    - Home Page:

    ![Home Page](documentation/responsive_home.png)

    - Products Page:

    ![Products Page](documentation/responsive_products.png)

    - Trends Page:

    ![Trends Page](documentation/responsive_trends.png)

    - Contact Page:

    ![Contact Page](documentation/responsive_contact.png)

    - About us Page:

    ![About us Page](documentation/responsive_aboutus.png)

    - Pre-oder Page:

    ![Pre-oder Page](documentation/responsive_preorder.png)

    - Response Newsletter Page:

    ![Response Newsletter Page](documentation/responsive_newsletter.png)

    - Response Pre-orders Page:

    ![Response Pre-orders](documentation/responsive_response_preorders.png)

    - Response Contact:

![Response Contact](documentation/responsive_response_contact.png)

+ The website was also tested for responsiveness on mobilephone devices size with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

![Website phone size](documentation/phone_responsive.jpg)
---

## Manual testing

+ The functionality of the links in the website was checked as well by different users. Please, see table below for testing results:

| Feature | Action | Expected result | Tested | Passed | Comments |
| --- | --- | --- | --- | --- | --- |
| Navbar | | | | | |
| Home | Click on the "Home" link | The user is redirected to the main page | Yes | Yes | - |
| Products | Click on the "Products" link | The user is redirected to the products page | Yes | Yes | - |
| Trends | Click on the "Trends" link | The user is redirected to the trends page | Yes | Yes | - |
| Contact | Click on the "Contact" link | The user is redirected to the contact page | Yes | Yes | - |
| About us | Click on the "About us" link | The user is redirected to the about us page | Yes | Yes | - |
| Footer | | | | | |
| Home | Click on the "Home" link | The user is redirected to the main page | Yes | Yes | - |
| Products | Click on the "Products" link | The user is redirected to the products page | Yes | Yes | - |
| Trends | Click on the "Trends" link | The user is redirected to the trends page | Yes | Yes | - |
| Contact | Click on the "Contact" link | The user is redirected to the contact page | Yes | Yes | - |
| About us | Click on the "About us" link | The user is redirected to the about us page | Yes | Yes | - |
| Instagram icon in the footer | Click on the Instagram icon | The user is redirected to the Instagram page | Yes | Yes | - |
| Facebook icon in the footer | Click on the Facebook icon | The user is redirected to the Facebook page | Yes | Yes | - |
| Twitter icon in the footer | Click on the Twitter icon | The user is redirected to the Twitter page | Yes | Yes | - |
| Home page | | | | | |
| Your email imput | Enter email | The email is entered | Yes | Yes |  If user doesn't enter the email, the error message appears |
| "Submit" button | Click on the "Submit" button | The user is redirected to the response page | Yes | Yes | - |
| Products page | | | | | |
| "Submit" button | Click on the "Pre-order" button | The user is redirected to the Preorder page | Yes | Yes | - |
| Trends page | | | | | |
| iframe | Open trends page | Iframe should show Vogue website | Yes | Yes | - |
| iframe| Open trend page | Iframe should show Glamour website | Yes | Yes | -|
| Pre-order page | | | | | |
| First name input | Enter the first name | The first name is entered | Yes | Yes | If user doesn't enter the first name, the error message appears |
| Second name input | Enter the second name | The second name is entered | Yes | Yes | If user doesn't enter the last name, the error message appears |
| Email input | Enter the email | The email is entered | Yes | Yes | If user doesn't enter the email, the error message appears. If user enters not valid email, the error message appears |
| Address input | Enter the Address | The Address is entered | Yes | Yes | If user doesn't enter the Address, the error message appears |
| Postcode input | Enter the Postcode | The Postcode is entered | Yes | Yes | If user doesn't enter the Postcode, the error message appears |
| Country input | Enter the Country | The Country is entered | Yes | Yes | If user doesn't enter the Country, the error message appears |
| Dropdown box | Choose one of the options | Option selected | Yes | Yes | If user doesn't choose an option, the error message appears |
| Text area | Enter text | text entered | Yes | Yes | - |
| "Submit" button | Click on the "Submit" button | The user is redirected to the response page | Yes | Yes | - |
| "Reset" button | Click on the "reset" button | Form is cleared | Yes | Yes | - |
| Contact page | | | | | |
| Full name input | Enter the full name | The full name is entered | Yes | Yes | If user doesn't enter the first name, the error message appears |
| Email input | Enter the email | The email is entered | Yes | Yes | If user doesn't enter the email, the error message appears. If user enters not valid email, the error message appears |
| Text area | Enter text | text entered | Yes | Yes |  If user doesn't enter the first name, the error message appears |
| "Send your message" button | Click on the "Send your message" button | The user is redirected to the response page | Yes | Yes | - |
| About us page | | | | | |
| iframe | Open about us page | Iframe should show gppgle maps| Yes | Yes | - |



## Validator testing

+ ### HTML

- Home Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Home Page HTML Validator](documentation/index_validatorw3c.png)

- Products Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Products Page HTML Validator](documentation/products_validatorw3c.png)

- Trends Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Trends Page HTML Validator](documentation/trends_validatorw3c.png)

- Contact Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![ Contact Page HTML Validator](documentation/validator_contactw3c.png)

- About us Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![About us HTML Validator](documentation/aboutus_validatorw3c.png)

- Pre-order Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Pre-order HTML Validator](documentation/preorder-validatorw3c.png)

- Response Newsletter Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Response Newsletter HTML Validator](documentation/newsletter_response_validatorw3c.png)

- Response Pre-order Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Response Pre-order HTML Validator](documentation/preorder-validatorw3c.png)

- Response Contact Page

  - No errors or warnings were found when passing through the official W3C validator.

    ![Response Contact HTML Validator](documentation/contact_response_validatorw3c.png)

+ ### CSS
  No errors or warnings were found when passing through the official W3C validator.

  ![CSS HTML Validator](documentation/css_validatorw3c.png)

+ ### LightHouse report

- Using Lighthouse in DevTools, I confirmed that the website is accessible and that the chosen colors and fonts are legible. However, a performance issue was identified, primarily due to the use of large images and the implementation of Bootstrap, which can impact load times. To address this, I plan to optimize images by compressing them and using responsive image techniques, such as the srcset attribute, to ensure faster loading. Additionally, I will explore replacing certain Bootstrap components with custom, lightweight solutions to improve overall performance. This will be part of my future improvements.

![Lighthouse Report](documentation/lighthouse_report1.png)


- The "Trends" & "About us" pages in Lighthouse showed a decrease in the Best Practices score due to the external websites embedded within the iframes using cookies. To address this issue, we could check if the iframe content can be served without cookies, or if the external website offers a cookie-free version for embedding.

![Lighthouse Report](documentation/lighthouse_report2.png)


- The response pages performed excellently across all areas, with the Lighthouse report showing strong results in key performance metrics such as accessibility, SEO, and best practices. There were no significant issues identified, and the pages passed all critical tests with high scores. This indicates a smooth user experience and optimized performance.

  ![Lighthouse Report](documentation/lighthouse_report3.png)


## Bugs

+ ### Solved bugs

- On the "Products" page, the product cards were not displaying correctly—they weren't aligning next to each other as intended. To resolve this, I applied the Bootstrap grid system, which fixed the layout and ensured the cards were properly aligned in a responsive, flexible grid.

- The images on the homepage were not displaying correctly on the website due to an incorrect file path. I resolved this issue by updating the paths to point to the correct locations of the images.

- The font size in the footer was changing with different screen sizes and sometimes became too small to read, as I had set the font size using the vw (viewport width) unit. To fix this, I replaced the vw unit with a more appropriate units like rem for better scalability across devices and improved readability on all screen sizes.

+ ### Mistakes

- I made some mistakes when committing changes initially, particularly with the use of past tense in my commit messages. As I continued working on the project, I realized the importance of using the present tense in commit messages to better align with best practices. 

- Initially, I developed the habit of committing changes before thoroughly testing them. However, I now understand the importance of testing changes first to ensure they work as expected, and I've since made it a priority to test all changes before committing.

- One of the mistakes I made early on was creating a new branch in the GitHub project when saving it for the first time, as I didn't fully understand how Git and GitHub worked. I now understand the importance of using the main branch for initial commits and only creating new branches when adding features or making significant changes. Going forward, I'll ensure to follow best practices by using branches effectively and keeping the main branch stable.