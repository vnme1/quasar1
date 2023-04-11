function getMixin(vm){
  const {title} = vm.$options;
  if(title){
    return typeof title ==="function" ? title.call(vm) : title;
  }
}

const serverMixin = {
  //server side
  created(){
    const title = getMixin(this);
    if(title){
      this.$ssrContex.title = title;
    }
  }
}

const clientMixin = {
  mounted(){
    const title = getMixin(this);
    if(title){
      document.title = title;
    }
  }
}

export default process.env.NODE_ENV === 'development' ? clientMixin : serverMixin;
