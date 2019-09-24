export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d895af420057e0bd84163af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-juanabee-studio',
                  apiId: '2152acab-013d-4b3e-8afe-9c319f439fc1'
                },
                {
                  buildHookId: '5d895af4ad06152cbac5eb2e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-juanabee',
                  apiId: '14135621-3b35-4a80-b0ca-b5a0d15911b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juanabee/juanabee',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://juanabee-web.netlify.com/',
            category: 'apps'
          },
          {
            title: 'Studio',
            value: 'https://juanabee-studio.netlify.com/',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
