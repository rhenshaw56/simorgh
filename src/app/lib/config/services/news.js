import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { news as brandSVG } from '@bbc/psammead-assets/svgs';
import { latin } from '@bbc/gel-foundations/scripts';
import * as fonts from '@bbc/psammead-styles/fonts';

const news = {
  articleAuthor: `https://www.facebook.com/bbcnews`,
  brandName: 'BBC News',
  defaultImage:
    'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
  defaultImageAltText: 'BBC News',
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: 'en_GB',
  service: 'news',
  serviceName: 'News',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@BBCNews',
  twitterSite: '@BBCNews',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  translations: {
    error: {
      404: {
        statusCode: '404',
        title: 'Page cannot be found',
        message:
          "Sorry, we're unable to bring you the page you're looking for. Please try:",
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC News homepage.',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/news',
      },
      500: {
        statusCode: '500',
        title: 'Internal server error',
        message:
          "Sorry, we're currently unable to bring you the page you're looking for. Please try:",
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC News homepage.',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/news',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
  },
  brandSVG,
  fonts: [
    fonts.F_REITH_SERIF_MEDIUM,
    fonts.F_REITH_SERIF_MEDIUM_ITALIC,
    fonts.F_REITH_SANS_REGULAR,
    fonts.F_REITH_SANS_ITALIC,
    fonts.F_REITH_SANS_BOLD,
    fonts.F_REITH_SANS_BOLD_ITALIC,
  ],
};

export default news;
