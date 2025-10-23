import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "allOf",
      link: {
        type: "doc",
        id: "api/tags/allof-variations-api",
      },
      items: [
        {
          type: "doc",
          id: "api/tags/multiple-all-of-with-nested-properties",
          label: "多个 allOf 与嵌套属性",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-shared-required-properties",
          label: "allOf 与共享必需属性",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-deep-merging",
          label: "allOf 与深层合并",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-same-level-properties",
          label: "allOf 与同级属性",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-array-items",
          label: "allOf 与数组项",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-properties-in-array-item",
          label: "allOf 与数组项中的属性",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-with-nested-all-of",
          label: "allOf 与嵌套 allOf",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tags/all-of-inherits-parent-required",
          label: "allOf 继承父级必需",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "模式",
      items: [
        {
          type: "doc",
          id: "api/tags/schemas/existingschema-1",
          label: "ExistingSchema1",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/tags/schemas/existingschema-2",
          label: "ExistingSchema2",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/tags/schemas/bookbase",
          label: "BookBase",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/tags/schemas/additionalbookinfo",
          label: "AdditionalBookInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/tags/schemas/book",
          label: "Book",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/tags/schemas/categorizedbook",
          label: "CategorizedBook",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
