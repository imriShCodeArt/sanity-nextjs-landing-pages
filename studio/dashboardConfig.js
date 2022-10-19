export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '634fcf53d5572f009fb2ae2f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qwmj3uwu',
                  apiId: '67a8bfa0-31fa-4850-85ef-9a9b9e4cef91'
                },
                {
                  buildHookId: '634fcf535b5e6400bae7bd8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y7wrjg1c',
                  apiId: 'e6d53a52-0911-4260-8320-d60f950b7f71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/imriShCodeArt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y7wrjg1c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
