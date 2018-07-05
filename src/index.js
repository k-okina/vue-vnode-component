export default {
  name: 'VNode',
  components: {
    VNode: {
      functional: true,
      render: (h, ctx) => ctx.props.vnode,
    },
  },
};
