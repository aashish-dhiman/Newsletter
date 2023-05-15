# Newsletter Signup

Welcome to the Newsletter Signup GitHub repository! This project allows users to sign up for a weekly newsletter by providing their name and email address. The signup data is securely saved using the Mailchimp API to the owner's Mailchimp account. 
The backend is built using Node.js and Express.js.

## Prerequisites

To run this project locally, you need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Getting Started

Follow the steps below to set up and run the project on your local machine:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/newsletter.git
   ```

2. Change into the project's directory:

   ```bash
   cd newsletter
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Configure Mailchimp API credentials:
   
   - Obtain your Mailchimp API key by creating an account at [https://mailchimp.com](https://mailchimp.com) (if you don't have one).
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
     ```
     MAILCHIMP_API_KEY=your-mailchimp-api-key
     MAILCHIMP_LIST_ID=your-mailchimp-list-id
     ```
     Replace `your-mailchimp-api-key` with your Mailchimp API key, and `your-mailchimp-list-id` with the ID of the Mailchimp list where the signup data will be stored.

5. Start the application:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000`.

6. Open your web browser and visit `http://localhost:3000` to access the newsletter signup form.

## Usage

To sign up for the weekly newsletter, follow these steps:

1. Open your web browser and go to `http://localhost:3000`.

2. Fill out the signup form with your name and email address.

3. Click the "Sign Up" button to submit the form.

   - If the signup is successful, you will see a confirmation message.
   - If there are any errors, you will be shown an error message.

4. The signup data will be securely saved to your Mailchimp account using the Mailchimp API.

## Contributing

Contributions are always welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.

2. Create a new branch with a descriptive name for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and ensure that the code is properly formatted.

4. Commit your changes:

   ```bash
   git commit -m "Add your commit message here"
   ```

5. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a pull request on the original repository, explaining your changes and why they should be merged.

7. Wait for a review and approval from the project maintainers.

## Acknowledgments

Special thanks to the developers of the following packages used in this project:

- Node.js - [https://nodejs.org](https://nodejs.org)
- Express.js - [https://expressjs.com](https://expressjs.com)
- Mailchimp API - [https://mailchimp.com/developer](https://mailchimp.com/developer)
