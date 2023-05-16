# Movies

movies-app is a robust and interactive React application built to provide movie enthusiasts with the ability to search for their favorite films. It utilizes the powerful OMDB API for data retrieval and presents the information in an aesthetically pleasing and intuitive user interface.

## Key Features
- Dynamic Search: Allows users to search for any movie by entering the name in the search bar.
- Interactive Movie Cards: Presents a list of movies relevant to the searched term. Each movie card displays important details like the year of release, movie poster, type and title.
- Informative Empty State: When there are no movies matching the search term, a friendly message "No movies found" is displayed to the user.
## Installation and Setup

### Steps to Run Locally
1. Clone the repository to your local machine:
bash

`git clone https://github.com/<your_github_username>/MovieLand.git`

2. Navigate to the project directory and install the required npm packages:

`cd movies-app`
`npm install`

3. Replace the placeholder API key with your own OMDB API key in App.js:

`const API_URL = "http://www.omdbapi.com?apikey=<your_api_key>";`

4. Run the application:

`npm start`

The application should now be running at http://localhost:3000/.

## Project Structure
The application consists of two main components:

- App.js: This is the main functional component that handles data fetching from the OMDB API, and manages state for the search term and movie data.

- MovieCard.jsx: This component is responsible for rendering individual movie cards based on the movie data passed in as props.

Contributions
I welcome contributions from the community. If you would like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss your proposed changes.
