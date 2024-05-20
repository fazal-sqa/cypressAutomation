# Job Apply with incorrect email on iodine career page.

Follow steps as mentioned:

Step 1: Installed node version with 10 or above, I am using v18.18.2 at this moment. Try to install latest from https://nodejs.org/en/download/package-manager

Step 2: Setup the environment variable & verify its successful installation by running node --version in terminal (mac)

step 3: Open Visual Studio Code -> Select Clone a Repository -> Clone using: git clone <repo path>

step 4: Run 'npm i' to install required dependencies

Step 5: In terminal Run 'npx cypress open'

Step 6: Cypress runner will open, click on the Spec file and it will execute the "Job Apply with Incorrect Email" case.

Note 1 : Hardcoded waits were added to allow the iframe to load before Cypress searches for elements within it. This approach ensures the iframe is fully loaded but can be optimized further using intercept for Network Requests and Custom Command to Wait for Specific Condition
