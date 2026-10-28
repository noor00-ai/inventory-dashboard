# Inventory Dashboard

## About My Project

I created this Inventory Dashboard using React. The main purpose of this project is to make it easy to manage products and keep track of stock. Users can add new products, delete products, check the total stock, and see how many products have low stock. I also added a light and dark mode option to make the dashboard easier to use.

The project saves product information in the browser, so the products are still there after refreshing the page.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- React Hooks
- Local Storage

## Client-Side Rendering (CSR)

Client-Side Rendering means that the browser uses JavaScript to display a website. React commonly uses this method. When we open a React application, the browser loads the necessary files and displays the page.

In my Inventory Dashboard, when I add or delete a product, the information updates without reloading the whole page. This makes the application feel faster and easier to use.

One disadvantage is that the browser needs to load and run JavaScript before the application becomes fully interactive. This can sometimes take longer on a slow internet connection or an older device.

## Server-Side Rendering (SSR)

Server-Side Rendering means that the server prepares the HTML for a webpage and sends it to the browser. The browser can then display the page content.

SSR can help users see the initial content quickly. It can also help search engines understand webpage content. This makes it useful for websites such as blogs, news websites, and online stores.

However, SSR needs a server to prepare the pages. This can make the application more difficult to set up and maintain.

## Difference Between CSR and SSR

The main difference is where the webpage is prepared. In CSR, the browser creates and updates the interface using JavaScript. In SSR, the server prepares the initial HTML and sends it to the browser.

CSR is a good choice for interactive applications like my Inventory Dashboard. SSR can be a better choice for websites that need their content to appear quickly and be easy for search engines to find. The best option depends on the needs of the project.

## How to Run the Project

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the link shown in the terminal.

## Conclusion

This project helped me practise React components, props, state, hooks, context, and Local Storage. It also helped me understand how React can be used to build a useful and interactive application.