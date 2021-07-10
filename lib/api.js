const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPortfolio() {
  const data = await fetchAPI(
    `
    query Portfolio {
      portfolios(first: 1000) {
        edges {
          node {
            id
            uri
            date
            title
            acf {
              description
              type
              url
              gallery {
                sourceUrl
              }
            }
            portfolioTypes{
              edges {
                node {
                  databaseId
                  name
                }
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.portfolios.edges;
}

export async function getResumeFile() {
  const data = await fetchAPI(
    `
    query getMyOptionsPage {
      myOptionsPage {
        myOptionsPage {
          resumeFile {
            id
            mediaItemUrl
          }
        }
      }
    }
    `,
  );

  return data?.myOptionsPage.myOptionsPage.resumeFile.mediaItemUrl;
}
