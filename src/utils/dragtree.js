// 返回最顶层那个drag_tree.vue组件
const findRoot = which => {
    let ok = false;
    let that = which;
    while (!ok) {
    //   根据组件name来判断
      if ('drag_tree' === that.$options._componentTag) {
        ok = true;
        // 交换两者的数据
        break;
      }
      that = that.$parent;
    }
    return that;
};

export default findRoot ;