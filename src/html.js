(params) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Transposit@SIGNAL2019</title>
    <style>
      /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */

      /*All the styling goes here*/

      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
      }

      body {
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
      }
      table td {
        font-family: sans-serif;
        font-size: 14px;
        vertical-align: top;
      }

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {
        width: 100%;
      }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #ffffff;
        border-radius: 3px;
        width: 100%;
      }

      .wrapper {
        box-sizing: border-box;
        padding: 30px;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #97a5ad;
        font-size: 13px;
        text-align: center;
      }

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 15px;
        margin-top: 15px;
      }

      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
      }

      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 15px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;

        line-height: 22px;
      }
      p li,
      ul li,
      ol li {
        list-style-position: inside;
        margin-left: 5px;
      }

      a {
        text-decoration: underline;
      }

      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {
        box-sizing: border-box;
        width: 100%;
      }
      .btn > tbody > tr > td {
        padding-bottom: 15px;
      }
      .btn table {
        width: auto;
      }
      .btn table td {
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
      }
      .btn a {
        background-color: #ffffff;
        border: solid 1px #41b9cb;
        border-radius: 5px;
        box-sizing: border-box;
        color: #3498db;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        padding: 12px 25px;
        text-decoration: none;
      }

      .btn-primary table td {
        background-color: #41b9cb;
      }

      .btn-primary a {
        background-color: #41b9cb;
        border-color: #41b9cb;
        color: #ffffff;
      }

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .clear {
        clear: both;
      }

      .mt0 {
        margin-top: 0;
      }

      .mb0 {
        margin-bottom: 0;
      }

      .powered-by a {
        text-decoration: none;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #f0f3f6;
        margin: 20px 0;
      }

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class="body"] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class="body"] p,
        table[class="body"] ul,
        table[class="body"] ol,
        table[class="body"] td,
        table[class="body"] span,
        table[class="body"] a {
          font-size: 16px !important;
        }
        table[class="body"] .wrapper,
        table[class="body"] .article {
          padding: 10px !important;
        }
        table[class="body"] .content {
          padding: 0 !important;
        }
        table[class="body"] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class="body"] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class="body"] .btn table {
          width: 100% !important;
        }
        table[class="body"] .btn a {
          width: 100% !important;
        }
        table[class="body"] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
      }
    </style>
  </head>
  <body class="">
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
    >
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">
            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td>
                        <p>
                          <img
                            src="https://s3-us-west-2.amazonaws.com/transposit.public.static.assets/logo-horizontal-364.png"
                            width="182"
                          />
                        <div align="center">
                          <a href="https://www.transposit.com/signal/">
                            <img
                              src="https://pbs.twimg.com/profile_images/1113425076957908992/RnEjq55c_400x400.png"
                            />
                          </a>
                        </div> 

                        </p>
                        <h3>
                          Thank you for checking out our booth at Twilio SIGNAL 2019!
                        </h3>
                        <p>
                          You're officially Entered for a Chance to Win a Nintendo Switch + Mario Maker 2!
                        </p>
                        <div align="center">
                          <img
                            src="https://i.imgur.com/JoZ1FvY.png"
                          />
                        </div> 
                        <p>
                          Don't forget to come back to the booth at 4:30pm on August 7th to find out if you've won. Winner must be in attendance.
                        </p>
                        <p>
                          What you just did was an example of an app you can build
                          with the power of Transposit. Here we were able to
                          use a webhook sent from Twilio to call a function that
                          generated this email to be sent using SendGrid's API.
                          Check out the code for yourself 
                          <a href="https://console.transposit.com/t/griffin/sendgrid_twilio?readme=true&c=signal"
                            >here</a>. 
                          Go ahead and fork it to see how it works!
                        </p>
                        <p>
                          Already have an idea you've been itching to make happen?
                          You can start from scratch using our
                          <a href="https://www.transposit.com/docs/get-started/quickstart/?c=signal"
                          >quickstart guide</a> to start building your own app with
                          one of our many different connectors like Twilio and SendGrid.
                          We also have a collection of
                          <a href="https://www.transposit.com/signal/"
                          >sample apps</a> for you to take a look at for further
                          inspiration.
                        </p>
                        <p>
                          Happy building!
                        </p>
                        <p>
                          PS: If you sign up for Transposit with the button below and show us at the booth,
                          we will give you a SECOND entry into our raffle!
                        </p>

                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="btn btn-primary"
                        >
                          <tbody>
                            <tr>
                              <td align="left">
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a
                                          href="https://console.transposit.com/?c=signal"
                                          target="_blank"
                                          >Start using Transposit</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div align="right">
                          <p>-- Your friends at Transposit</p>
                        </div>
                        <p>
                          Note: By participating in this app, you have been automatically
                          added to our email marketing list. To opt out, simply click
                          "unsubscribe" on the next newsletter you receive.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`
}
