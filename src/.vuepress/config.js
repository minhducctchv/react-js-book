const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Part 1',
        link: '/part_1/',
      },
      {
        text: 'Part 2',
        link: '/part_2/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: true,
          children: [
            '',
            'using-vue',
          ]
        },
      ],
      '/part_1/': [
        {
          title: 'Advanced Component',
          collapsable: true,
          children: [
            '5_advanced_component/1_intro',
            '5_advanced_component/2_how_to_use',
            '5_advanced_component/3_components',
            '5_advanced_component/4_props_parameters',
            '5_advanced_component/5_proptypes',
            '5_advanced_component/6_default_props',
            '5_advanced_component/7_context',
            '5_advanced_component/8_state',
            '5_advanced_component/9_stateless_components',
            '5_advanced_component/10_talking_children',
            '5_advanced_component/11_summary',
            '5_advanced_component/12_references'
          ]
        }
      ],
      '/part_2/': [
        {
          title: 'Appendix A: PropTypes',
          collapsable: true,
          children: [
            '8_appendix_a/1_validators',
            '8_appendix_a/2_string',
            '8_appendix_a/3_number',
            '8_appendix_a/4_boolean',
            '8_appendix_a/5_function',
            '8_appendix_a/6_object',
            '8_appendix_a/7_object_shape',
            '8_appendix_a/8_multiple_types',
            '8_appendix_a/9_instance_of',
            '8_appendix_a/10_array',
            '8_appendix_a/11_array_of_type',
            '8_appendix_a/12_node',
            '8_appendix_a/13_element',
            '8_appendix_a/14_any_type',
            '8_appendix_a/15_optional_required',
            '8_appendix_a/16_custom_validator',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
