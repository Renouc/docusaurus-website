import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'category',
      label: 'allOf',
      link: {
        type: 'doc',
        id: 'api/tags/allof-variations-api',
      },
      items: [
        {
          type: 'doc',
          id: 'api/tags/multiple-all-of-with-nested-properties',
          label: 'Multiple allOf with Nested Properties',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-shared-required-properties',
          label: 'allOf with Shared Required Properties',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-deep-merging',
          label: 'allOf with Deep Merging',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-same-level-properties',
          label: 'allOf with Same-Level Properties',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-array-items',
          label: 'allOf with Array Items',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-properties-in-array-item',
          label: 'allOf with Properties in Array Item',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-with-nested-all-of',
          label: 'allOf with Nested allOf',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/tags/all-of-inherits-parent-required',
          label: 'allOf inherits parent required',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Schemas',
      items: [
        {
          type: 'doc',
          id: 'api/tags/schemas/existingschema-1',
          label: 'ExistingSchema1',
          className: 'schema',
        },
        {
          type: 'doc',
          id: 'api/tags/schemas/existingschema-2',
          label: 'ExistingSchema2',
          className: 'schema',
        },
        {
          type: 'doc',
          id: 'api/tags/schemas/bookbase',
          label: 'BookBase',
          className: 'schema',
        },
        {
          type: 'doc',
          id: 'api/tags/schemas/additionalbookinfo',
          label: 'AdditionalBookInfo',
          className: 'schema',
        },
        {
          type: 'doc',
          id: 'api/tags/schemas/book',
          label: 'Book',
          className: 'schema',
        },
        {
          type: 'doc',
          id: 'api/tags/schemas/categorizedbook',
          label: 'CategorizedBook',
          className: 'schema',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
