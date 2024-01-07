import { h, resolveComponent } from "vue";
import { usePage } from "#imports";
import camelCase from "camelcase";

export const CatnibdbPage = {
  props: {
    slug: { type: String },
  },
  async setup(props: { slug: string }) {
    const { data } = await usePage({ slug: props.slug });

    return () =>
      data.value.components.map((component: any) => {
        const componentName = camelCase(component.api_id, { pascalCase: true });

        return h(
          resolveComponent(componentName),
          {
            key: `${component?.id}-${component.api_id}`,
            component,
          }
        );
      });
  },
};
