export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5db6b68ba35d1f913234841a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kqafapcv',
                  apiId: 'ae539c19-6ed9-4f2e-8d2a-a51560b3cd9f'
                },
                {
                  buildHookId: '5db6b68b3100f315e25362c7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dh8noyq1',
                  apiId: '67498a65-cb53-4e62-bed3-743ec39d336c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/premiermatt/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dh8noyq1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
