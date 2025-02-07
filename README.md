#my-app  

Overview

This project is an interactive map web application built using React.js and Leaflet.js. Users can search for locations, click on the map to move the marker, and explore places interactively just like in Google Maps. The application features API integration, state management, custom hooks, and form handling.

Features

🌍 Maps Integration

Integrated Leaflet.js for interactive maps.

Users can move the map freely (drag, zoom, and pan).

Users can click anywhere on the map to place a marker.

Users can search for a location, and the map moves to the searched place.

Popup shows place name, latitude, and longitude when clicking or searching.

📌 State Management

Used React's useState to manage the map position and search state.

Used useEffect to handle side effects like API calls.

📡 API Integration

Integrated OpenStreetMap (Nominatim API) for searching locations.

Users can search by city, address, or landmarks.

The app dynamically fetches data and updates the UI.

Error handling for API failures and no results.

🔄 Async Operations

Used fetch API to make asynchronous requests to the OpenStreetMap API.

Properly handled loading and error states during API calls.

🔧 Custom Hooks

Implemented a custom hook to handle map location updates and API fetch requests.

Makes the component code more reusable and maintainable.

🖊 Form Handling

Added a search input field where users can type and search for a location.

Implemented data validation to prevent empty searches.

🔄 Filtering Data

Users can filter the displayed map location by searching specific names or addresses.

The map updates dynamically based on the input.

🏗 CSS & Layout

Styled using CSS and media queries for responsiveness.

Ensured mobile-friendly UI and good user experience.

Applied styled-components for modular styling.

🌍 URL Parameters & Routing

Implemented React Router for URL-based navigation.

Users can access different locations using URL parameters.

🌐 Context API for Global State Management

Used React Context API to share state across multiple components.

Example: Global state for storing last searched locations.

Installation & Setup

1️⃣ Clone the Repository

  git clone https://github.com/you-repo-name/my-app.git
  cd my-app

2️⃣ Install Dependencies

  npm install

3️⃣ Run the Application

  npm start

4️⃣ Usage Instructions

Search for a location using the input field.

Click on the map to move the marker and get the place name.

Drag the map freely in any direction.

Zoom in/out, but you cannot zoom out of the world map.

Technologies Used

React.js - Frontend framework

Leaflet.js - Interactive maps

OpenStreetMap API - Fetching location data

React Router - URL routing

React Context API - Global state management

CSS & Styled Components - Styling and responsiveness

Future Enhancements

Save favorite locations in local storage or database.

Add route planning feature for travel directions.

Dark mode theme support.

Contributors

👨‍💻 Developed by VIKAS MISHRA

License

This project is open-source under the MIT License.

🚀 Happy Mapping! 🌍
