const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const router = express.Router();
const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise');

/**
  * Create an assessment to analyze the risk of a UI action.
  *
  * projectID: Your Google Cloud Project ID.
  * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
  * token: The generated token obtained from the client.
  * recaptchaAction: Action name corresponding to the token.
  */
async function createAssessment({
  // TODO: Replace the token and reCAPTCHA action variables before running the sample.
  projectID = "reppards-1727970234841",
  recaptchaKey = "6Lcr3VYqAAAAAOjiv9f07W-kRQLLWJZXF1UBZgi2",
  token = "6Lcr3VYqAAAAAOjiv9f07W-kRQLLWJZXF1UBZgi2",
  recaptchaAction = "LOGIN",
}) {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = ({
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  });

  const [ response ] = await client.createAssessment(request);

  // Check if the token is valid.
  if (!response.tokenProperties.valid) {
    console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason) => {
      console.log(reason);
    });

    return response.riskAnalysis.score;
  } else {
    console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
    return null;
  }
}
app.use(compression());

app.use(express.static(__dirname + '/public'));








router.get('/', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/about', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/about.html'))
})

app.get('/garden-installation', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/garden-installation.html'))
})

app.get('/pavers', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/pavers.html'))
})

app.get('/deck-arbor', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/deck-arbor.html'))
})

app.get('/fence', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/fence.html'))
})

app.get('/sitemap', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/sitemap.xml'))
})



//module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log('app listening on port ${port}')
})