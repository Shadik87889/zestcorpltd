const express = require("express");
const path = require("path"); // ✅ Import path module
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Redirect "/" to "/home"
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Define page routes without ".html"
const pages = [
  "home",
  "about",
  "contact",
  "zest-ocean",
  "products",
  "apply",
  "application-form",
  "resources",
];

pages.forEach((page) => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, `${page}.html`));
  });
});
// ✅ Serve static files
app.use(express.static(__dirname));
// ✅ Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// ✅ Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Function to format date in 12-hour format
function formatDateTime() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const date = new Date();
  return date.toLocaleString("en-US", options); // Returns date in 12-hour format
}

// ✅ Contact form email handler
app.post("/send-email", async (req, res) => {
  const { fullName, email, subject, orderNumber, message } = req.body;

  if (!fullName || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  // ✅ Get the formatted current date and time
  const submissionDateTime = formatDateTime();

  // ✅ Email Template with HTML and inline CSS
  const emailHTML = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .email-container {
          width: 100%;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .email-header {
          text-align: center;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          color: #fff;
          padding: 15px;
          font-size: 28px;
          border-radius: 8px 8px 0 0;
        }
        .email-content {
          padding: 20px;
          background-color: #fafafa;
          border-radius: 0 0 8px 8px;
        }
        .email-content h3 {
          color: #333;
          margin-bottom: 15px;
        }
        .email-content p {
          color: #666;
          font-size: 16px;
        }
        .email-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }
        .email-table th, .email-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }
        .email-table th {
          background-color: #ff7e5f;
          color: white;
          font-size: 16px;
        }
        .email-table td {
          background-color: #fff;
          color: #333;
          font-size: 15px;
        }
        .email-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .email-footer {
          text-align: center;
          font-size: 14px;
          color: #fff;
          padding: 15px;
          background-color: #333;
          border-radius: 0 0 8px 8px;
        }
        .email-footer a {
          color: #fff;
          text-decoration: none;
        }
        .email-footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          New Contact Form Submission
        </div>
        <div class="email-content">
          <h3>Message Details:</h3>
          <table class="email-table">
            <tr>
              <th>Full Name</th>
              <td>${fullName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>${email}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>${subject}</td>
            </tr>
            <tr>
              <th>Order Number</th>
              <td>${orderNumber || "N/A"}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>${message}</td>
            </tr>
            <tr>
              <th>Submission Date & Time</th>
              <td>${submissionDateTime}</td>
            </tr>
          </table>
        </div>
        <div class="email-footer">
          <p>Best regards,</p>
          <p><strong>Zest Corporation Ltd.</strong></p>
          <p><a href="mailto:${process.env.EMAIL_USER}">Contact Us</a></p>
        </div>
      </div>
    </body>
  </html>`;

  // ✅ Set up mail options with HTML template
  const mailOptions = {
    from: process.env.EMAIL_USER, // Use sender email
    to: process.env.EMAIL_USER, // Send email to yourself
    subject: `New Contact Form Submission - ${subject}`,
    html: emailHTML, // Send the HTML content
  };

  // ✅ Send confirmation email to the form submitter
  const confirmationMailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: email, // Recipient (form submitter's email)
    subject: "Thank You for Contacting Zest Corporation Ltd.",
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            text-align: center;
            background-color: #ff7e5f;
            color: #ffffff;
            padding: 15px;
            border-radius: 8px;
          }
          .email-content {
            padding: 20px;
            background-color: #fafafa;
            border-radius: 8px;
          }
          .email-footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            Thank You for Reaching Out!
          </div>
          <div class="email-content">
            <h3>Dear ${fullName},</h3>
            <p>Thank you for contacting Zest Corporation Ltd. Our support team will get in touch with you shortly.</p>
            <p>We never disappoint our customers and we look forward to assisting you.</p>
          </div>
          <div class="email-footer">
            <p>Best regards,</p>
            <p><strong>Zest Corporation Ltd.</strong></p>
          </div>
        </div>
      </body>
    </html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);
    res
      .status(200)
      .json({ message: "Your message has been successfully sent!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// ✅ Job Application Email Handler
app.post(
  "/apply-job",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "supportingDocuments", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        birthday,
        gender,
        degree,
        institution,
        passingYear,
        workExperience,
        skills,
        workLocation,
        joinDate,
      } = req.body;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !birthday ||
        !gender ||
        !degree ||
        !institution ||
        !passingYear ||
        !workExperience ||
        !skills ||
        !workLocation ||
        !joinDate
      ) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const applicationDate = formatDateTime();

      const applicationEmailHTML = `
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7f9;
        margin: 0;
        padding: 20px;
      }
      .email-container {
        max-width: 700px;
        margin: auto;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }
      .email-header {
        background: linear-gradient(to right, #4facfe, #00f2fe);
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
      }
      .email-content {
        padding: 30px;
        background-color: #ffffff;
      }
      /* Responsive Table */
      .table-container {
        width: 100%;
        overflow-x: auto;
        display: block;
      }
      .email-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        min-width: 500px; /* Prevent table from being too small */
      }
      .email-table th, .email-table td {
        border: 1px solid #dddddd;
        padding: 12px;
        text-align: left;
        font-size: 16px;
        min-width: 150px; /* Ensures table columns do not shrink too much */
      }
      .email-table th {
        background: #4facfe;
        color: #ffffff;
        font-weight: bold;
      }
      .email-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      .email-table tr:hover {
        background-color: #f1f1f1;
      }
      .email-footer {
        background: #333333;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 14px;
        border-radius: 0 0 10px 10px;
      }
      .email-footer a {
        color: #00f2fe;
        text-decoration: none;
        font-weight: bold;
      }
      .email-footer a:hover {
        text-decoration: underline;
      }
      /* Mobile Optimization */
      @media screen and (max-width: 600px) {
        .email-container {
          width: 100%;
          padding: 10px;
        }
        .email-content {
          padding: 20px;
        }
        .email-table th, .email-table td {
          font-size: 14px;
          padding: 8px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header -->
      <div class="email-header">
        🚀 New Job Application Received!
      </div>
      
      <!-- Content -->
      <div class="email-content">
        <h2 style="color: #333; text-align: center;">Candidate Details</h2>
        <div class="table-container">
          <table class="email-table">
            <tr><th>First Name</th><td>${firstName}</td></tr>
            <tr><th>Last Name</th><td>${lastName}</td></tr>
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Phone</th><td>${phone}</td></tr>
            <tr><th>Birthday</th><td>${birthday}</td></tr>
            <tr><th>Gender</th><td>${gender}</td></tr>
            <tr><th>Degree</th><td>${degree}</td></tr>
            <tr><th>Institution</th><td>${institution}</td></tr>
            <tr><th>Passing Year</th><td>${passingYear}</td></tr>
            <tr><th>Work Experience</th><td>${workExperience} years</td></tr>
            <tr><th>Skills</th><td>${skills}</td></tr>
            <tr><th>Work Location</th><td>${workLocation}</td></tr>
            <tr><th>Join Date</th><td>${joinDate}</td></tr>
            <tr><th>Application Date</th><td>${applicationDate}</td></tr>
          </table>
        </div>
      </div>

      <!-- Footer -->
      <div class="email-footer">
        <p>Thank you for using our job application system!</p>
        <p><strong>📩 Contact HR:</strong> <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a></p>
      </div>
    </div>
  </body>
</html>`;

      // Get uploaded files
      const attachments = [];
      if (req.files["cv"]) {
        attachments.push({
          filename: "CV.pdf",
          content: req.files["cv"][0].buffer,
          contentType: "application/pdf",
        });
      }
      if (req.files["photo"]) {
        attachments.push({
          filename: "Photo.jpg",
          content: req.files["photo"][0].buffer,
          contentType: "image/jpeg",
        });
      }
      if (req.files["supportingDocuments"]) {
        attachments.push({
          filename: "SupportingDocument.pdf",
          content: req.files["supportingDocuments"][0].buffer,
          contentType: "application/pdf",
        });
      }
      // Send application email with attachments
      const applicationMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Job Application from ${firstName} ${lastName}`,
        html: applicationEmailHTML,
        attachments: attachments,
      };

      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "🎉 Thank You for Your Job Application! 🚀",
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: 'Poppins', sans-serif;
                  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
                  margin: 0;
                  padding: 0;
                  text-align: center;
                }
                .container {
                  max-width: 600px;
                  margin: 40px auto;
                  background: #ffffff;
                  border-radius: 12px;
                  padding: 30px;
                  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
                  animation: fadeIn 1s ease-in-out;
                }
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(-10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                h1 {
                  font-size: 26px;
                  color: #4A90E2;
                  margin-bottom: 10px;
                }
                p {
                  font-size: 18px;
                  color: #333;
                  line-height: 1.6;
                  margin-bottom: 20px;
                }
                .button {
                  display: inline-block;
                  padding: 12px 25px;
                  font-size: 16px;
                  color: white;
                  background: linear-gradient(135deg, #ff512f,rgb(255, 199, 224));
                  border-radius: 25px;
                  text-decoration: none;
                  font-weight: bold;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                  transition: transform 0.3s ease-in-out;
                }
                .button:hover {
                  transform: scale(1.05);
                }
                .footer {
                  margin-top: 30px;
                  font-size: 14px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>🎉 Thank You, ${firstName} ${lastName}! 🚀</h1>
                <p>
                  We are thrilled to receive your application! Our team is reviewing your profile, and we will get back to you soon.
                </p>
                <p>
                  Stay tuned, and feel free to explore more about our company in the meantime. 🚀✨
                </p>
                <a href="https://zestcorporation.com" class="button">Visit Our Website</a>
                <div class="footer">
                  Best Regards, <br>
                  <strong>The HR Team</strong> <br>
                  Zest Corporation Ltd.
                </div>
              </div>
            </body>
          </html>`,
      };

      await transporter.sendMail(applicationMailOptions);
      await transporter.sendMail(confirmationMailOptions);

      res.status(200).json({
        message: "Your job application has been submitted successfully!",
      });
    } catch (error) {
      console.error("Job Application Error:", error);
      res.status(500).json({ message: "Failed to send job application" });
    }
  }
);
// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}/home`);
});
